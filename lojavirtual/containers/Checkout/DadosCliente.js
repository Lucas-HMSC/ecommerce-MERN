import React, { Component } from 'react';

import DadosClienteContainer from '../Cliente/DadosCliente';
import ClienteLogin from '../Cliente/ClienteLogin';
import actions from '../../redux/actions';
import { connect } from 'react-redux';

class DadosCliente extends Component {
  componentDidMount() {
    this.fetchCliente();
  }

  componentDidUpdate() {
    this.fetchCliente();
  }

  fetchCliente() {
    const { usuario, token, cliente } = this.props;
    if (usuario && token && !cliente) {
      this.props.fetchCliente(usuario._id, token);
    }
  }

  render() {
    const { usuario, permissaoInicial, permitir } = this.props;
    return usuario || permissaoInicial ? (
      <DadosClienteContainer />
    ) : (
      <ClienteLogin permitir={permitir} />
    );
  }
}

const mapStateToProps = (state) => ({
  usuario: state.auth.usuario,
  token: state.auth.token,
  cliente: state.cliente.cliente,
});

export default connect(mapStateToProps, actions)(DadosCliente);
