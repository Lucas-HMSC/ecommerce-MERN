import { combineReducers } from 'redux';

import authReducer from './authReducers';
import categoriaReducer from './categoriaReducers';
import lojaReducer from './lojaReducers';
import produtoReducer from './produtoReducers';
import carrinhoReducer from './carrinhoReducers';

export default combineReducers({
  auth: authReducer,
  categoria: categoriaReducer,
  loja: lojaReducer,
  produto: produtoReducer,
  carrinho: carrinhoReducer,
});
