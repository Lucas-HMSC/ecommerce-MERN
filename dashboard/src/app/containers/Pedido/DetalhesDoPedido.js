import React, { Component } from 'react';
import ButtonSimples from '../../components/Button/Simples';
import Titulo from '../../components/Texto/Titulo';

class DetalhesDoPedido extends Component {
  renderCabecalho() {
    return (
      <div className="">
        <div>
          <Titulo tipo="h2" titulo="Pedido - Cliente 1 - 15/02/2021" />
        </div>
        <div>
          <ButtonSimples
            type="danger"
            label="CANCELAR PEDIDO"
            onClick={() => alert('Cancelado')}
          />
        </div>
      </div>
    );
  }

  render() {
    return <div className="Detalhes-do-Pedido">{this.renderCabecalho()}</div>;
  }
}

export default DetalhesDoPedido;
