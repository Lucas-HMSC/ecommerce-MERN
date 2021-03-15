import { AUTENTICAR_TOKEN, USER } from '../types';

const initialState = { token: null, usuario: null };
export default (satte = initialState, action) => {
  switch (action.type) {
    case USER:
      return {
        ...state,
        usuario: action.payload,
        token: action.payload ? action.payload.token : null,
      };
    case AUTENTICAR_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
