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
          value={nomeCartao}
          name="nomeCartao"
          placeholder="Nome como escrito no cartão"
          label="Nome Completo no Cartão"
          onChange={(e) => this.onChange('nomeCartao', e)}
        />
        <div className="flex horizontal">
          <div className="flex-1">
            <FormSimples
              value={numeroCartao}
              name="numeroCartao"
              placeholder="XXXX XXXX XXXX XXXX"
              label="Número do Cartão"
              onChange={(e) => this.onChange('numeroCartao', e)}
            />
          </div>
          <div className="flex-1">
            <FormSimples
              value={CVVCartao}
              name="CVVCartao"
              placeholder="XXX"
              label="Código de Segurança do Cartão"
              onChange={(e) => this.onChange('CVVCartao', e)}
            />
          </div>
        </div>
        <div>
          <label className="form-input">Data de Validade</label>
        </div>
        <div className="flex">
          <FormSimples
            value={mesCartao}
            name="mesCartao"
            placeholder="MM"
            label="Mês"
            onChange={(e) => this.onChange('mesCartao', e)}
          />
          <span className="slash-pagamento">&nbso;/&nbsp;</span>
          <FormSimples
            value={anoCartao}
            name="anoCartao"
            placeholder="AAAA"
            label="Ano"
            onChange={(e) => this.onChange('anoCartao', e)}
          />
        </div>
        <br />
        <div>
          <label className="form-input">Parcelas</label>
        </div>
        <div className="flex">
          <select name="parcela">
            <option>Selecione a quantidade de parcelas para pagamento</option>
            <option value="1">1x de R$ 105,00 sem juros</option>
            <option value="2">2x de R$ 62,50 sem juros</option>
            <option value="3">3x de R$ 35,00 sem juros</option>
            <option value="4">4x de R$ 31,75 sem juros</option>
            <option value="5">5x de R$ 21,00 sem juros</option>
            <option value="6">6x de R$ 17,50 sem juros</option>
          </select>
        </div>
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
