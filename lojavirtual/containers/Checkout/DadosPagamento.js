import React, { Component } from 'react';

import FormRadio from '../../components/Inputs/FormRadio';
import FormSimples from '../../components/Inputs/FormSimples';

import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { formatCPF, formatCartao, formatNumber } from '../../utils/format';
import { formatMoney } from '../../utils';

class DadosPagamento extends Component {
  componentDidMount() {
    this.props.getSessionPagamento();
  }

  componentDidUpdate(prevProps) {
    const {
      numeroCartao,
      mesCartao,
      anoCartao,
      CVVCartao,
      credit_card_token,
      bandeira_cartao,
      parcelasCartao,
    } = this.props.form;

    if (
      !bandeira_cartao &&
      numeroCartao &&
      numeroCartao.split(' ').join('').length > 7
    ) {
      this.getBrand();
    }

    if (
      !credit_card_token &&
      numeroCartao &&
      numeroCartao.split(' ').join('').length === 16 &&
      mesCartao &&
      mesCartao.length === 2 &&
      anoCartao &&
      anoCartao.length === 4 &&
      CVVCartao &&
      CVVCartao.length === 3 &&
      bandeira_cartao
    )
      this.submitCartaoHash();

    if (
      !parcelasCartao &&
      bandeira_cartao &&
      parcelasCartao &&
      bandeira_cartao &&
      prevProps.freteSelecionado !== this.props.freteSelecionado
    )
      this.getParcelas();
  }

  getBrand() {
    const { numeroCartao } = this.props.form;
    PagSeguroDirectPayment.getBrand({
      cardBin: numeroCartao.split(' ').join('').slice(0, 6),
      success: (r) =>
        this.props.setForm({
          bandeira_cartao: r.brand,
        }),
      error: (r) => console.log(r),
    });
  }

  submitCartaoHash() {
    const {
      numeroCartao,
      mesCartao,
      anoCartao,
      CVVCartao,
      bandeira_cartao,
    } = this.props.form;
    const params = {
      cardNumber: numeroCartao.split(' ').join(''),
      brand: bandeira_cartao.name,
      cvv: CVVCartao,
      expirationMonth: mesCartao,
      expirationYear: anoCartao,
      success: (r) =>
        this.props.setForm({
          credit_card_token: r.card.token,
        }),
      error: (r) => console.log(r),
    };
    PagSeguroDirectPayment.createCardToken(params);
  }

  getParcelas() {
    const { freteSelecionado, carrinho } = this.props;
    const { bandeira_cartao } = this.props.form;

    let valorTotal = carrinho.reduce(
      (all, item) => all + Number(item.precoUnitario) * Number(item.quantidade),
      0,
    );
    let freteValor = Number(freteSelecionado.Valor.replace(',', '.'));

    PagSeguroDirectPayment.getInstallments({
      amount: valorTotal + freteValor,
      maxInstallmentNoInterest: 6,
      maxInstallment: 6,
      brand: bandeira_cartao.name,
      success: (data) => {
        this.props.setForm({ parcelasCartao: data.installments });
        this.props.setForm({
          parcelasCartaoSelecionada: data.installments[bandeira_cartao.name][0],
        });
        error: (r) => console.log(r);
      },
    });
  }

  renderOpcoesPagamento() {
    const { tipoPagamentoSelecionado } = this.props;
    return (
      <div className="flex horizontal">
        <div className="flex-1">
          <FormRadio
            name="tipo_pagamento_selecionado"
            checked={tipoPagamentoSelecionado === 'boleto'}
            onChange={() => this.props.setTipoPagamento('boleto')}
            label="Boleto Bancário"
          />
        </div>
        <div className="flex-1">
          <FormRadio
            name="tipo_pagamento_selecionado"
            checked={tipoPagamentoSelecionado === 'cartao'}
            onChange={() => this.props.setTipoPagamento('cartao')}
            label="Cartão de Crédito"
          />
        </div>
      </div>
    );
  }

  validate() {}

  onChange = (field, value) =>
    this.props.setForm({ [field]: value }).then(() => this.validate());

  renderPagamentoComBoleto() {
    const { CPF, CPFboleto } = this.props.form;
    return (
      <div className="Dados-Pagamento">
        <FormSimples
          value={CPFboleto || CPF}
          name="CPF"
          placeholder="CPF"
          label="CPF"
          onChange={(e) => onChange(CPFboleto, formatCPF(e.target.value))}
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
      parcelasCartao,
      parcelasCartaoSelecionada,
      bandeira_cartao,
    } = this.props.form;
    return (
      <div className="Dados-Pagamento">
        <FormSimples
          value={nomeCartao}
          name="nomeCartao"
          placeholder="Nome como escrito no cartão"
          label="Nome Completo no Cartão"
          onChange={(e) => this.onChange('nomeCartao', e.target.value)}
        />
        <div className="flex horizontal">
          <div className="flex-1">
            <FormSimples
              value={numeroCartao}
              name="numeroCartao"
              placeholder="XXXX XXXX XXXX XXXX"
              label="Número do Cartão"
              onChange={(e) =>
                this.onChange('numeroCartao', formatCartao(e.target.value))
              }
            />
          </div>
          <div className="flex-1">
            <FormSimples
              value={CVVCartao}
              name="CVVCartao"
              placeholder="XXX"
              label="Código de Segurança do Cartão"
              onChange={(e) =>
                this.onChange('CVVCartao', formatNumber(e.target.value, 3))
              }
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
            onChange={(e) =>
              this.onChange('mesCartao', formatNumber(e.target.value, 2))
            }
          />
          <span className="slash-pagamento">&nbso;/&nbsp;</span>
          <FormSimples
            value={anoCartao}
            name="anoCartao"
            placeholder="AAAA"
            label="Ano"
            onChange={(e) =>
              this.onChange('anoCartao', formatNumber(e.target.value, 4))
            }
          />
        </div>
        <br />
        <div>
          <label className="form-input">Parcelas</label>
        </div>
        {parcelasCartao && parcelasCartaoSelecionada && (
          <div className="flex">
            <select
              name="parcela"
              value={parcelasCartaoSelecionada.quantity}
              onChange={(e) =>
                this.onChange(
                  'parcelasCartaoSelecionada',
                  parcelasCartao[bandeira_cartao.name][e.target.value - 1],
                )
              }
            >
              <option>Selecione a quantidade de parcelas para pagamento</option>
              {parcelasCartao[bandeira_cartao.name].map((item, index) => (
                <option key={index} value={item.quantity}>
                  {item.quantity}x de{' '}
                  {formatMoney(item.totalAmount / item.quantity)} sem juros
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    );
  }

  render() {
    const { tipoPagamentoSelecionado } = this.props;
    return (
      <div className="Dados-Pagamento-Container">
        <h2>DADOS DE PAGAMENTO</h2>
        <br />
        {this.renderOpcoesPagamento()}
        <br />
        <br />
        {tipoPagamentoSelecionado === 'boleto' &&
          this.renderPagamentoComBoleto()}
        {tipoPagamentoSelecionado === 'cartao' &&
          this.renderPagamentoComCartao()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  usuario: state.auth.usuario,
  carrinho: state.carrinho.carrinho,
  cliente: state.cliente.cliente,
  form: state.checkout.form,
  tipoPagamentoSelecionado: state.checkout.tipoPagamentoSelecionado,
  sessionId: state.checkout.sessionId,
  senderHash: state.checkout.senderHash,
  freteSelecionado: state.carrinho.freteSelecionado,
});

export default connect(mapStateToProps, actions)(DadosPagamento);
