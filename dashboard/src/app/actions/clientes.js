import { getHeaders } from './localStorage';
import axios from 'axios';
import { api, versao } from '../config';
import errorHandling from './errorHandling';
import { GET_CLIENTES } from './types';

export const getClientes = (atual, limit, loja) => {
  return function (dispatch) {
    axios
      .get(
        `${api}/${versao}/api/clientes?offset=${atual}&limit=${limit}&loja=${loja}`,
        getHeaders(),
      )
      .then((response) =>
        dispatch({
          type: GET_CLIENTES,
          payload: response.data,
        }),
      )
      .catch(errorHandling);
  };
};

export const getClientesPesquisa = (termo, atual, limit, loja) => {
  return function (dispatch) {
    axios
      .get(
        `${api}/${versao}/api/clientes/search/${termo}?offset=${atual}&limit=${limit}&loja=${loja}`,
        getHeaders(),
      )
      .then((response) =>
        dispatch({
          type: GET_CLIENTES,
          payload: response.data,
        }),
      )
      .catch(errorHandling);
  };
};
