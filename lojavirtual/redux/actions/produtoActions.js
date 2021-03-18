import axios from 'axios';
import {
  FETCH_PRODUTOS,
  FETCH_PESQUISA,
  FETCH_PRODUTOS_PESQUISA,
  FETCH_PRODUTO,
  FETCH_PRODUTO_AVALIACOES,
  FETCH_PRODUTO_VARIACOES,
} from '../types';
import { API, versao, loja } from '../../config;';

export const fetchProdutosPaginaInicial = () => (dispatch) => {
  axios
    .get(
      `${API}/${versao}/api/produtos/disponiveis?loja=${loja}&offset=${0}&limit=${4}&sortType=${'preco-crescente'}`,
    )
    .then((response) =>
      dispatch({
        type: FETCH_PRODUTOS,
        payload: response.data,
      }),
    )
    .catch((e) => console.log(e));
};

export const fetchTermo = (termo) => ({
  type: FETCH_PESQUISA,
  termo,
});

export const fetchProdutosPesquisa = (termo, atual = 0, limit = 20) => (
  dispatch,
) => {
  axios
    .get(
      `${API}/${versao}/api/produtos/search/${termo}?loja=${loja}&offset=${atual}&limit=${limit}`,
    )
    .then((response) =>
      dispatch({
        type: FETCH_PRODUTOS_PESQUISA,
        payload: response.data,
        termo,
      }),
    )
    .catch((e) => console.log(e));
};

export const fetchProduto = (id) => (dispatch) => {
  axios
    .get(`${API}/${versao}/api/produtos/${id}?loja=${loja}`)
    .then((response) =>
      dispatch({
        type: FETCH_PRODUTO,
        payload: response.data,
        termo,
      }),
    )
    .catch((e) => console.log(e));
};

export const fetchAvaliacoes = (id) => (dispatch) => {
  axios
    .get(`${API}/${versao}/api/produtos/${id}/avaliacoes?loja=${loja}&id=${id}`)
    .then((response) =>
      dispatch({
        type: FETCH_PRODUTO_AVALIACOES,
        payload: response.data,
        termo,
      }),
    )
    .catch((e) => console.log(e));
};

export const fetchVariacoes = (id) => (dispatch) => {
  axios
    .get(`${API}/${versao}/api/produtos/${id}/variacoes?loja=${loja}&id=${id}`)
    .then((response) =>
      dispatch({
        type: FETCH_PRODUTO_VARIACOES,
        payload: response.data,
        termo,
      }),
    )
    .catch((e) => console.log(e));
};

export default {
  fetchProdutosPaginaInicial,
  fetchTermo,
  fetchProdutosPesquisa,
  fetchProduto,
  fetchAvaliacoes,
  fetchVariacoes,
};
