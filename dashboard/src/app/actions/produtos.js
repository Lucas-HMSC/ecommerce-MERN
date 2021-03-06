import { getHeaders } from './localStorage';
import axios from 'axios';
import { api, versao } from '../config';
import errorHandling from './errorHandling';
import { GET_PRODUTOS } from './types';

export const getProdutos = (ordem, atual, limit, loja) => {
  return function (dispatch) {
    axios
      .get(
        `${api}/${versao}/api/produtos?offset=${atual}&limit=${limit}&loja=${loja}&sortType=${ordem}`,
        getHeaders(),
      )
      .then((response) =>
        dispatch({
          type: GET_PRODUTOS,
          payload: response.data,
        }),
      )
      .catch(errorHandling);
  };
};

export const getProdutosPesquisa = (termo, ordem, atual, limit, loja) => {
  return function (dispatch) {
    axios
      .get(
        `${api}/${versao}/api/produtos/search/${termo}?offset=${atual}&limit=${limit}&loja=${loja}&sortType=${ordem}`,
        getHeaders(),
      )
      .then((response) =>
        dispatch({
          type: GET_PRODUTOS,
          payload: response.data,
        }),
      )
      .catch(errorHandling);
  };
};
