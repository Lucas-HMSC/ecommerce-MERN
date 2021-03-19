import React, { Component } from 'react';

import DadosCliente from './DadosCliente';
import DadosEntrega from './DadosEntrega';
import SubmitDadosCliente from './SubmitDadosCliente';
import DadosFrete from './DadosFrete';
import DadosPagamento from './DadosPagamento';
import DadosPedido from './DadosPedido';
import CheckoutButton from './CheckoutButton';

import { connect } from 'react-redux';
import actions from '../../redux/actions';

class Checkout extends Component {
  state = {
    permissaoInicial: false,
    permissaoCheckout: false,
  };
  render() {
    const { permissaoInicial, permissaoCheckout } = this.state;
    const { usuario } = this.props;
    return (
      <div className="Checkout container">
        <h2>CONCLUINDO SEU PEDIDO</h2>
        <br />
        <DadosCliente
          usuario={usuario}
          permissaoInicial={permissaoInicial}
          permitir={() => this.setState({ permissaoInicial: true })}
        />
        {(permissaoInicial || usuario) && <DadosEntrega />}
        {(permissaoInicial || usuario) && <SubmitDadosCliente />}
        {permissaoCheckout && <DadosFrete />}
        {permissaoCheckout && <DadosPagamento />}
        {permissaoCheckout && <DadosPedido />}
        {permissaoCheckout && <CheckoutButton />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  usuario: state.auth.usuario,
});

export default connect(mapStateToProps, actions)(Checkout);
