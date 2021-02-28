import axios from 'axios';
import { LOGIN_USER, LOGOUT_USER } from './types';
import { api, versao } from '../config';

const saveToken = (usuario, opcaoLembrar) => {
  if (!usuario.token) return null;
  const [token1, token2, token3] = usuario.token.split('.');
  localStorage.setItem('token1', token1);
  localStorage.setItem('token2', token2);
  localStorage.setItem('token3', token3);
  localStorage.setItem('opcaoLembrar', opcaoLembrar);
};

const cleanToken = () => {
  localStorage.removeItem('token1');
  localStorage.removeItem('token2');
  localStorage.removeItem('token3');
  localStorage.removeItem('opcaoLembrar');
};

const getToken = () => {
  const token1 = localStorage.getItem('token1');
  const token2 = localStorage.getItem('token2');
  const token3 = localStorage.getItem('token3');
  if (!token1 || !token2 || !token3) return null;
  return `${token1}.${token2}.${token3}`;
};

const getHeaders = () => {
  return {
    "headers": {
      "authorization": `Ecommerce ${getToken()}`,
    },
  };
};

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
      .catch((error) => {
        console.log(error, error.response, error.response.data);
      });
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
