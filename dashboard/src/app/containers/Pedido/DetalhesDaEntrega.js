import React, { Component } from 'react';

import Titulo from '../../components/Texto/Titulo';
import ListaDinamica from '../../components/Listas/ListaDinamicaSimples';
import InputValor from '../../components/Inputs/InputValor';

class DetalhesDaEntrega extends Component {
  state = {
    status: [
      'Preparando para Envio',
      'Entregue a Transportadora',
      'Em Trânsito',
    ],
    codigoDeRastreamento: 'PA123456912BR',
  };

  onAddListaDinamica = (texto) => {
    if (!texto) return false;
    let { status } = this.state;
    status.push(texto);
    this.setState({ status });
  };

  onChangeInput = (field, ev) => {
    this.setState({ [field]: ev.target.value });
  };

  handleSubmit = () => {
    alert('SALVO!');
  };

  render() {
    const { status, codigoDeRastreamento } = this.state;
    return (
      <div className="Detalhes-de-Entrega">
        <Titulo tipo="h4" titulo="Entrega" />
        <br />
        <InputValor
          value={codigoDeRastreamento}
          onChangeInput={(ev) => this.onChangeInput('codigoDeRastreamento', ev)}
          handleSubmit={() => this.handleSubmit()}
        />
        <br />
        <ListaDinamica dados={status} onAdd={this.onAddListaDinamica} />
      </div>
    );
  }
}

export default DetalhesDaEntrega;
