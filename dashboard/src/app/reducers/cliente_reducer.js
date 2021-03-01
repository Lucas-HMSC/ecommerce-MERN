import { GET_CLIENTES } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_CLIENTES:
      return {
        ...state,
        clientes: action.payload.clientes,
      };
    default:
      return state;
  }
};
