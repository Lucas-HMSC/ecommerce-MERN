import { FETCH_CATEGORIAS } from '../types';
import axios from 'axios';
import { API, versao, loja } from '../../config';

export const fetchCategorias = () => (dispatch) => {
  axios
    .get(`${API}/${versao}/api/categorias/disponiveis?loja=${loja}`)
    .then((response) =>
      dispatch({
        type: FETCH_CATEGORIAS,
        payload: response.data,
      }),
    )
    .catch((e) => console.log(e));
};

export default {
  fetchCategorias,
};
