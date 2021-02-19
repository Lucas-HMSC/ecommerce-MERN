import React from 'react';
import ButtonSimples from '../../components/Button/Simples';
import Titulo from '../../components/Texto/Titulo';

class DetalhesDoCliente extends React.Component {
  renderCabecalho() {
    <div className="flex">
      <div className="flex-1 flex">
        <Titulo tipo="h1" titulo="Cliente 1" />
      </div>
      <div className="flex-1 flex flex-end">
        <ButtonSimples
          onClick={() => alert('Salvo!')}
          label="Salvar"
          type="success"
        />
        <ButtonSimples
          onClick={() => alert('Removido!')}
          label="Remover"
          type="danger"
        />
      </div>
    </div>;
  }

  renderDetalhesCadastro() {
    return null;
  }

  renderDetalhesEntrega() {
    return null;
  }

  render() {
    return (
      <div className="DetalhesDoCliente">
        {this.renderCabecalho()}
        <div className="DetalhesDoCliente">
          <div className="flex-1 flex vertical">
            {this.renderDetalhesCadastro()}
          </div>
          <div className="flex-1 flex vertical">
            {this.renderDetalhesEntrega()}
          </div>
        </div>
      </div>
    );
  }
}

export default DetalhesDoCliente;
