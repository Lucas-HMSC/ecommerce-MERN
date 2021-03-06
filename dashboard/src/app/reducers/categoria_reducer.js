import { GET_CATEGORIAS, GET_CATEGORIA } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_CATEGORIAS:
      return {
        ...state,
        categorias: action.payload.categorias,
      };
    case GET_CATEGORIA:
      return {
        ...state,
        categoria: action.payload.categoria,
      };
    default:
      return state;
  }
};
