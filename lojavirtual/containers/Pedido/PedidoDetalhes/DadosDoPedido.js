import React, { Component } from 'react';

import TextoDados from '../../../components/Texto/Dados';

class DadosDoPedido extends Component {
  renderDadosDoCliente() {
    return (
      <div className="flex-3">
        <h4 className="headline">DADOS DO CLIENTE</h4>
        <br />
        <TextoDados chave="Nome" valor="Lucas Carvalho" />
        <TextoDados chave="CPF" valor="111.222.333-45" />
        <TextoDados chave="Telefone" valor="(11) 1234-5678" />
        <TextoDados chave="Data de Nascimento" valor="01/01/1999" />
      </div>
    );
  }
  renderDadosDoCarrinho() {
    return (
      <div className="flex-5">
        <h4 className="headline">CARRINHO</h4>
        <br />
        <TabelaSimples
          
        />
      </div>
    );
  }
  renderDadosDeEntrega() {}
  renderDadosDePagamento() {}

  render() {
    return (
      <div className="Detalhes-do-Pedido">
        <div className="flex horizontal">
          {this.renderDadosDoCliente()}
          {this.renderDadosDoCarrinho()}
        </div>
        <div className="flex horizontal">
          {this.renderDadosDeEntrega()}
          {this.renderDadosDePagamento()}
        </div>
      </div>
    );
  }
}

export default DadosDoPedido;
