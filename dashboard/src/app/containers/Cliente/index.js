import React, { Component } from 'react';
//import DetalhesDoPedido from '../Pedido/DetalhesDoPedido';

import DetalhesDoCliente from './detalhesDoCliente';
import DetalhesDosPedidos from './detalhesDosPedidos';

class Cliente extends Component {
  render() {
    return (
      <div className="Cliente full-width flex vertical">
        <div className="Card">
          <DetalhesDoCliente />
        </div>
        <div className="Sub-card">
          <DetalhesDosPedidos />
        </div>
      </div>
    );
  }
}

export default Cliente;
