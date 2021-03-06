import { getHeaders } from './localStorage';
import axios from 'axios';
import { api, versao } from '../config';
import errorHandling from './errorHandling';
import { GET_CATEGORIAS } from './types';

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
