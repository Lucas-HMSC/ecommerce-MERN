import React, { Component } from 'react';
import Link from 'next/link';

import { formatMoney } from '../../utils';

class PedidoCard extends Component {
  render() {
    const { pedido } = this.props;
    const { id, data, valor, status } = pedido;
    return (
      <div className="Pedido-Card flex">
        <div className="flex-1 flex-start">
          <span>{data}</span>
        </div>
        <div className="flex-1 flex-start">
          <span>{formatMoney(valor)}</span>
        </div>
        <div className="flex-3 flex-start">
          <span>{status}</span>
        </div>
        <div className="flex-1 flex-start">
          <Link href={`/area/cliente/pedido/${id}`}>
            <span className="btn btn-primary btn-sm">VER DETALHES</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default PedidoCard;
