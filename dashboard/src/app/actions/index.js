import axios from 'axios';
import { LOGIN_USER, LOGOUT_USER } from './types';
import { api, versao } from '../config';
import { saveToken, getHeaders, cleanToken } from './localStorage';
import errorHandling from './errorHandling';

export const initApp = () => {
  const opcaoLembrar = localStorage.getItem('opcaoLembrar');
  if (opcaoLembrar === 'false') cleanToken();
};

// Usuários
export const handleLogin = ({ email, password, opcaoLembrar }, callback) => {
  return function (dispatch) {
    axios
      .post(`${api}/${versao}/api/usuarios/login`, { email, password })
      .then((response) => {
        saveToken(response.data.usuario, opcaoLembrar);
        dispatch({ type: LOGIN_USER, payload: response.data });
      })
      .catch((e) => callback(errorHandling(e)));
  };
};

export const getUser = () => {
  return function (dispatch) {
    axios
      .get(`${api}/${versao}/api/usuarios/`, getHeaders())
      .then((response) => {
        saveToken(response.data.usuario, true);
        dispatch({ type: LOGIN_USER, payload: response.data });
      })
      .catch((error) => {
        console.log(error, error.response, error.response.data);
      });
  };
};

export const handleLogout = () => {
  cleanToken();
  return {
    type: LOGOUT_USER,
  };
};
