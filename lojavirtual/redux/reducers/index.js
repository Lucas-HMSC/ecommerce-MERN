import { combineReducers } from 'redux';

import authReducer from './authReducers';
import categoriaReducer from './categoriaReducers';
import lojaReducer from './lojaReducers';
import produtoReducer from './produtoReducers';

export default combineReducers({
  auth: authReducer,
  categoria: categoriaReducer,
  loja: lojaReducer,
  produto: produtoReducer,
});
