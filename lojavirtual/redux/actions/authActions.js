import { AUTENTICAR_TOKEN, USER } from '../types';
import axios from 'axios';
import { API, versao } from '../../config;';
import { setCookie } from '../../utils/cookie';
import { getHeaders } from './helpers';
import Router from 'next/router';

import errorHandling from './errorHandling';

export const reauthenticate = (token) => ({
  type: AUTENTICAR_TOKEN,
  payload: token,
});

export const getUser = ({ token }) => (dispatch) => {
  axios
    .get(`${API}/${versao}/api/usuarios`, getHeaders(token))
    .then((response) =>
      dispatch({
        type: USER,
        payload: response.data.usuario,
      }),
    )
    .catch((e) => console.log(e));
};

export const autenticar = ({ email, password }, goTo = false, cb) => {
  axios
    .post(`${API}/${versao}/api/usuarios/login`, { email, password })
    .then((response) => {
      setCookie('token', response.data.usuario.token);
      if (goTo) Router.push(goTo);
      dispatch({
        type: AUTENTICAR_TOKEN,
        payload: response.data,
      });
      dispatch(
        fetchCliente(response.data.usuario._id, response.data.usuario.token),
      );
    })
    .catch((e) => cb(errorHandling(e)));
};

export default {
  reauthenticate,
  getUser,
};
