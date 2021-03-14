import React, { Component } from 'react';

class SucessoContainer extends Component {
  state = {
    pedidoSucesso: true,
    formaPagamento: 'boleto',
  };

  renderBoleto() {
    return (
      <div>
        <p>
          Para finalizar o pedido, realize o pagamento do boleto pleo link
          abaixo:
        </p>
        <br />
        <a href="#" className="btn btn-success">
          IMPRIMIR BOLETO
        </a>
        <br />
      </div>
    );
  }

  renderCartao() {
    return (
      <div>
        <p>
          O pagamento está sendo processador e você receberá uma confirmação
          pelo e-mail em breve. Obrigado pelo pedido!
        </p>
        <br />
      </div>
    );
  }

  renderSucesso() {
    const { formaPagamento } = this.state;
    return (
      <div className="Sucesso">
        <br />
        <h1 className="headline-big">PEDIDO CONCLUÍDO COM SUCESSO</h1>
        <br />
        <br />
        {formaPagamento === 'boleto'
          ? this.renderBoleto()
          : this.renderCartao()}
        <br />
      </div>
    );
  }

  renderErro() {
    return (
      <div className="Erro">
        <br />
        <h1 className="headline-big">HOUVE UM ERRO COM O SEU PEDIDO</h1>
        <br />
        <br />
        <p>
          Houve um erro com o seu pedido e ele foi cancelado, por favor refaça
          seu pedido na loja ou entre em contato para continuar o pedido.
        </p>
        <br />
      </div>
    );
  }

  render() {
    const { pedidoSucesso } = this.state;
    return (
      <div className="Sucesso-Container container">
        {pedidoSucesso ? this.renderSucesso() : this.renderErro()}
      </div>
    );
  }
}
export default SucessoContainer;
