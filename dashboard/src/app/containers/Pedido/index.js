import React, { Component } from 'react';

import DetalhesDoPedido from './DetalhesDoPedido';
import DetalhesDaEntrega from './DetalhesDaEntrega';
import DetalhesDoPagamento from './DetalhesDoPagamento';

import Voltar from '../../components/Links/Voltar';

class Pedido extends Component {
  render() {
    return (
      <div className="Pedidos full-width flex vertical">
        <div className="Card">
          <Voltar path="/" />
          <DetalhesDoPedido />
        </div>
        <div className="flex horizontal">
          <div className="Sub-Card flex-1 flex vertical">
            <DetalhesDaEntrega />
          </div>
          <div className="Sub-Card flex-1 flex vertical">
            <DetalhesDoPagamento />
          </div>
        </div>
      </div>
    );
  }
}

export default Pedido;
