import axios from 'axios';
import { FETCH_DADOS } from '../types';
import { API, versao, loja } from '../../config';

export const fetchDados = () => (dispatch) => {
  axios
    .get(`${API}/${versao}/lojas/${loja}?loja=${loja}`)
    .then((response) =>
      dispatch({
        type: FETCH_DADOS,
        payload: response.data,
      }),
    )
    .catch((e) => console.log(e));
};

export default {
  fetchDados,
};
