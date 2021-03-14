import React, { Component } from 'react';

import FormRadio from '../../components/Inputs/FormRadio';
import FormSimples from '../../components/Inputs/FormSimples';

class DadosPagamento extends Component {
  state = {
    opcaoPagamentoSelecionada: 'boleto',
    CPF: '',
  };

  renderOpcoesPagamento() {
    const { opcaoPagamentoSelecionada } = this.state;
    return (
      <div className="flex horizontal">
        <div className="flex-1">
          <FormRadio
            name="tipo_pagamento_selecionado"
            checked={opcaoPagamentoSelecionada === 'boleto'}
            onChange={() =>
              this.setState({ opcaoPagamentoSelecionada: 'boleto' })
            }
            label="Boleto Bancário"
          />
        </div>
        <div className="flex-1">
          <FormRadio
            name="tipo_pagamento_selecionado"
            checked={opcaoPagamentoSelecionada === 'cartao'}
            onChange={() =>
              this.setState({ opcaoPagamentoSelecionada: 'cartao' })
            }
            label="Cartão de Crédito"
          />
        </div>
      </div>
    );
  }

  onChange = (field, e) => this.setState({ [field]: e.target.value });

  renderPagamentoComBoleto() {
    const { CPF } = this.state;
    return (
      <div className="Dados-Pagamento">
        <FormSimples
          value={CPF}
          name="CPF"
          placeholder="CPF"
          label="CPF"
          onChange={(e) => this.onChange('CPF', e)}
        />
      </div>
    );
  }

  renderPagamentoComCartao() {
    const {
      nomeCartao,
      numeroCartao,
      CVVCartao,
      mesCartao,
      anoCartao,
    } = this.state;
    return (
      <div className="Dados-Pagamento">
        <FormSimples
          value={CPnomeCartaoF}
          name="nomeCartao"
          placeholder="Nome como escrito no cartão"
          label="Nome Completo no Cartão"
          onChange={(e) => this.onChange('nomeCartao', e)}
        />
      </div>
    );
  }

  render() {
    const { opcaoPagamentoSelecionada } = this.state;
    return (
      <div className="Dados-Pagamento-Container">
        <h2>DADOS DE PAGAMENTO</h2>
        <br />
        {this.renderOpcoesPagamento()}
        <br />
        <br />
        {opcaoPagamentoSelecionada === 'boleto' &&
          this.renderPagamentoComBoleto()}
        {opcaoPagamentoSelecionada === 'cartao' &&
          this.renderPagamentoComCartao()}
      </div>
    );
  }
}

export default DadosPagamento;
