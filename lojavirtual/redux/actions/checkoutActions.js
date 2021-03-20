import {
  SET_FORM,
  CLEAN_FORM,
  SET_TIPO_PAGAMENTO,
  FETCH_SESSION_ID,
  FETCH_SENDER_HASH,
} from '../types';
import axios from 'axios';
import { API, versao } from '../../config';

export const setForm = (payload, prefix) => (dispatch) => {
  dispatch({
    type: SET_FORM,
    payload,
    prefix,
  });
  return Promise.resolve();
};

export const cleanForm = () => ({
  type: CLEAN_FORM,
});

export const setTipoPagamento = (tipoPagamentoSelecionado) => ({
  type: SET_TIPO_PAGAMENTO,
  tipoPagamentoSelecionado,
});

export const getSessionPagamento = () => (dispatch) => {
  axios.get(`${API}/${versao}/api/pagamentos/session`).then((response) => {
    dispatch({
      type: FETCH_SESSION_ID,
      payload: response.data,
    });
    PagSeguroDirectPayment.setSessionId(response.data.sessionId);
    let senderHash = PagSeguroDirectPayment.getSenderHash();
    dispatch({
      type: FETCH_SENDER_HASH,
      senderHash,
    }).catch((e) => console.log(e));
  });
};

export default {
  setForm,
  cleanForm,
  setTipoPagamento,
  getSessionPagamento,
};
