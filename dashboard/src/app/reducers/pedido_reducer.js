import { GET_PEDIDOS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_PEDIDOS:
      return {
        ...state,
        pedidos: action.payload.pedidos,
      };
    default:
      return state;
  }
};
