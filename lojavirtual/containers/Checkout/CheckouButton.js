import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { getCart } from '../../utils/cart';

import AlertGeral from '../../components/Alert/Geral';

class CheckoutButton extends Component {
  state = {
    disabled: false,
    aviso: null,
  };

  toggleDisabled = () => this.setState({ disabled: !this.state.disabled });

  calcularValorTotal(carrinho, freteSelecionado) {
    const valorProdutos = carrinho.reduce(
      (all, item) => all + Number(item.precoUnitario) + Number(item.quantidade),
      0,
    );
    const valorFrete = Number(freteSelecionado.Valor.replace(',', '.'));
    return valorProdutos + valorFrete;
  }

  validarFormulario(){
    
  }

  validate() {
    const { freteSelecionado, tipoPagamentoSelecionado } = this.props;
    const validarFormulario = this.validarFormulario();
    return validarFormulario && freteSelecionado && tipoPagamentoSelecionado;
  }

  handleSubmit() {
    const {
      form,
      freteSelecionado,
      token,
      senderHash,
      tipoPagamentoSelecionado,
    } = this.props;
    const carrinho = getCart();
    const valorTotal = this.calcularValorTotal(carrinho, freteSelecionado);

    if (!this.validate()) return null;
    this.toggleDisabled();
    this.props.novoPedido(
      form,
      freteSelecionado,
      tipoPagamentoSelecionado,
      valorTotal,
      token,
      senderHash,
      carrinho,
      (error) => {
        if (error) {
          this.setState({
            aviso: {
              status: false,
              message: error.message,
            },
          });
        }
        this.toggleDisabled();
      },
    );
  }

  render() {
    return (
      <div className="flex flex-right">
        <AlertGeral aviso={this.state.aviso} />
        <button
          className="btn btn-success btn-cta"
          disabled={this.state.disabled}
          onClick={() => this.handleSubmit()}
        >
          <span>{this.state.disabled ? 'ENVIANDO...' : 'CONCLUIR PEDIDO'}</span>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  carrinho: state.carrinho.carrinho,
  usuario: state.auth.usuario,
  cliente: state.cliente.cliente,
  freteSelecionado: state.carrinho.freteSelecionado,
  form: state.checkout.form,
  token: state.auth.token,
  senderHash: state.checkout.senderHash,
  tipoPagamentoSelecionado: state.checkout.tipoPagamentoSelecionado,
});

export default connect(mapStateToProps, actions)(CheckoutButton);
