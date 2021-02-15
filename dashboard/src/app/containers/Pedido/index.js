import React, { Component } from 'react';

import DetalhesDoPedido from './DetalhesDoPedido';
import DetalhesDaEntrega from './DetalhesDaEntrega';
import DetalhesDoPagamento from './DetalhesDoPagamento';

class Pedido extends Component {
  render() {
    return (
      <div className="Pedidos flex vertical">
        <div>
          <DetalhesDoPedido />
        </div>
        <div className="flex horizontal">
          <div className="flex-1 flex vertical">
            <DetalhesDaEntrega />
          </div>
          <div className="flex-1 flex vertical">
            <DetalhesDoPagamento />
          </div>
        </div>
      </div>
    );
  }
}

export default Pedido;
