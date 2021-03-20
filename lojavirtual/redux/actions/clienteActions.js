import { FETCH_CLIENTE } from '../types';
import axios from 'axios';
import { API, versao, loja } from '../../config;';
import { setCookie } from '../../utils/cookie';
import { getHeaders } from './helpers';
import Router from 'next/router';
import { autenticar } from './authActions';
import errorHandling from './errorHandling';

export const getRawData = (data) => {
  let _data = data.split('/');
  return `${_data[2]}-${_data[1] - 1}-${_data[0]}`;
};

export const fetchCliente = (id, token) => (dispatch) => {
  axios
    .get(`${API}/${versao}/api/clientes/${id}?loja=${loja}`, getHeaders(token))
    .then((response) => {
      dispatch({
        type: FETCH_CLIENTE,
        payload: response.data,
      });
    })
    .catch((e) => console.log(e));
};

export const newCliente = (form, cb) => (dispatch) => {
  axios
    .post(`${API}/${versao}/api/clientes?loja=${loja}`, {
      nome: form.nome,
      password: form.senha,
      cpf: form.CPF,
      email: form.email,
      telefones: [form.telefone],
      endereco: {
        local: form.local,
        numero: form.numero,
        complemento: form.complemento,
        bairro: form.bairro,
        cidade: form.cidade,
        estado: form.estado,
        CEP: form.CEP,
      },
      dataDeNascimento: getRawData(form.dataDeNascimento),
    })
    .then((response) => {
      dispatch({
        type: FETCH_CLIENTE,
        payload: response.data,
      });
      dispatch(autenticar({ email: form.email, password: form.senha }));
      cb(null);
    })
    .catch((e) => cb(errorHandling(e)));
};

export const updateCliente = (form, id, token, cb) => (dispatch) => {
  axios
    .put(
      `${API}/${versao}/api/clientes/${id}?loja=${loja}`,
      {
        nome: form.nome,
        cpf: form.CPF,
        telefones: [form.telefone],
        endereco: {
          local: form.local,
          numero: form.numero,
          complemento: form.complemento,
          bairro: form.bairro,
          cidade: form.cidade,
          estado: form.estado,
          CEP: form.CEP,
        },
        dataDeNascimento: getRawData(form.dataDeNascimento),
      },
      getHeaders(token),
    )
    .then((response) => {
      dispatch({
        type: FETCH_CLIENTE,
        payload: response.data,
      });
      cb(null);
    })
    .catch((e) => cb(errorHandling(e)));
};

export default {
  fetchCliente,
  newCliente,
  updateCliente,
};
