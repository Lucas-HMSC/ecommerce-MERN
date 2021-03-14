import React, { Component } from 'react';

import Pedidos from '../../../components/Listas/Pedidos';
import Paginacao from '../../../components/Paginacao';

const PEDIDOS = [
  {
    id: 3151321,
    data: '16/07/2019',
    valor: 189.55,
    status: 'Pago / Entregue',
  },
  {
    id: 3151322,
    data: '18/07/2019',
    valor: 255.55,
    status: 'Pago / Em Trânsito',
  },
  {
    id: 3151323,
    data: '16/07/2019',
    valor: 189.55,
    status: 'Pago / Entregue',
  },
  {
    id: 3151324,
    data: '16/07/2019',
    valor: 189.55,
    status: 'Pago / Entregue',
  },
];

class ListaPedidos extends Component {
  state = {
    atual: 0,
  };
  render() {
    return (
      <div className="flex-4 conteudo-area-cliente">
        <h2>MEUS PEDIDOS</h2>
        <br />
        <Pedidos pedidos={PEDIDOS} />
        <Paginacao
          atual={this.state.atual || 0}
          total={PEDIDOS.length * 4}
          limite={PEDIDOS.length}
          onClick={(numeroAtual) => this.setState({ atual: numeroAtual })}
        />
      </div>
    );
  }
}

export default ListaPedidos;
