import { getHeaders } from './localStorage';
import axios from 'axios';
import { api, versao } from '../config';
import errorHandling from './errorHandling';
import { GET_CATEGORIAS, GET_CATEGORIA } from './types';

export const getCategorias = (loja) => {
  return function (dispatch) {
    axios
      .get(`${api}/${versao}/api/categorias?loja=${loja}`, getHeaders())
      .then((response) =>
        dispatch({
          type: GET_CATEGORIAS,
          payload: response.data,
        }),
      )
      .catch(errorHandling);
  };
};

export const salvarCategoria = (categoria, loja, cb) => {
  return function (dispatch) {
    axios
      .post(
        `${api}/${versao}/api/categorias?loja=${loja}`,
        {
          nome: categoria.nome,
          codigo: categoria.codigo,
        },
        getHeaders(),
      )
      .then((response) => {
        dispatch({
          type: GET_CATEGORIA,
          payload: response.data,
        });
        cb(null);
      })
      .catch((e) => cb(errorHandling(e)));
  };
};
