import { getHeaders } from './localStorage';
import axios from 'axios';
import { api, versao } from '../config';
import errorHandling from './errorHandling';
import {
  GET_VARIACOES,
  GET_VARIACAO,
  LIMPAR_VARIACAO,
  REMOVE_VARIACAO,
} from './types';

export const getVariacoes = (produto, loja) => {
  return function (dispatch) {
    axios
      .get(
        `${api}/${versao}/api/variacoes?loja=${loja}&produto=${produto}`,
        getHeaders(),
      )
      .then((response) =>
        dispatch({
          type: GET_VARIACOES,
          payload: response.data,
        }),
      )
      .catch(errorHandling);
  };
};

export const getVariacao = (id, produto, loja) => {
  return function (dispatch) {
    axios
      .get(
        `${api}/${versao}/api/variacoes/${id}?loja=${loja}&produto=${produto}`,
        getHeaders(),
      )
      .then((response) =>
        dispatch({
          type: GET_VARIACAO,
          payload: response.data,
        }),
      )
      .catch(errorHandling);
  };
};

export const limparVariacao = () => ({ type: LIMPAR_VARIACAO });
