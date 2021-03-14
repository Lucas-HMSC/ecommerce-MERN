import React, { Component } from 'react';

import AlertGeral from '../../components/Alert/Geral';

class SubmitDadosCliente extends Component {
  render() {
    return (
      <div>
        <AlertGeral />
        <div className="flex flex-right">
          <button
            className="btn btn-success btn-cta"
            onClick={() => alert('Continuar Pedido')}
          >
            CONTINUAR PEDIDO
          </button>
        </div>
      </div>
    );
  }
}

export default SubmitDadosCliente;
