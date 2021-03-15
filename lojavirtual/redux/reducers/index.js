import { combineReducers } from 'redux';

import authReducer from './authReducer';
import categoriaReducer from './categoriaReducer';

export default combineReducers({
  auth: authReducer,
  categoria: categoriaReducer,
});
