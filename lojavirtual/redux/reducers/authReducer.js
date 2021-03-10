import { AUTENTICAR_TOKEN } from '../types';

const initialState = { token: null, usuario: null };
export default (satte = initialState, action) => {
  switch (action.type) {
    case AUTENTICAR_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
