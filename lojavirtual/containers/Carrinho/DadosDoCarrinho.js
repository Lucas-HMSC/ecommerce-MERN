import React, { Component } from 'react';
import { formatMoney } from '../../utils';

import Frete from '../../components/Item/Frete';

class DadosDoCarrinho extends Component {
  renderDadosDoCarrinho() {
    return (
      <div className="dados-do-carrinho-container flex-3">
        <div className="dados-do-carrinho-item flex">
          <div className="flex-1">
            <p className="headline">Valor do Pedido:</p>
          </div>
          <div className="flex-1 flex flex-center">{formatMoney(85.35)}</div>
        </div>
        <Frete />
        <div className="dados-do-carrinho-item flex">
          <div className="flex-1">
            <p className="headline">Valor Total:</p>
          </div>
          <div className="flex-1 flex flex-center">{formatMoney(105.35)}</div>
        </div>
        <div className="dados-do-carrinho-item flex flex-right">
          <button className="btn btn-success btn-cta">
            <span>Finalizar Pedido</span>
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="Dados-Do-Carrinho flex horizontal">
        <div className="flex-4"></div>
        {this.renderDadosDoCarrinho()}
      </div>
    );
  }
}

export default DadosDoCarrinho;
