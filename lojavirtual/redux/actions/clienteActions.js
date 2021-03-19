import { FETCH_CLIENTE } from '../types';
import axios from 'axios';
import { API, versao, loja } from '../../config;';
import { setCookie } from '../../utils/cookie';
import { getHeaders } from './helpers';
import Router from 'next/router';

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

export default {
  fetchCliente,
};
