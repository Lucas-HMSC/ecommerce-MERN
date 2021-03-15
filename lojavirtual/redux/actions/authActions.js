import { AUTENTICAR_TOKEN, USER } from '../types';
import axios from 'axios';
import { API, versao } from '../../config;';

const getHeaders = (token) => ({
  headers: {
    Authorization: `Ecommerce ${token}`,
  },
});

export const reauthenticate = (token) => ({
  type: AUTENTICAR_TOKEN,
  payload: token,
});

export const getUser = ({ token }) => (dispatch) => {
  axios
    .get(`${API}/${versao}/usuarios`, getHeaders(token))
    .then((response) =>
      dispatch({
        type: USER,
        payload: response.data.usuario,
      }),
    )
    .catch((e) => console.log(e));
};

export default {
  reauthenticate,
};
