import React, { Component } from 'react';

import DadosClienteContainer from '../Cliente/DadosCliente';
import ClienteLogin from '../Cliente/ClienteLogin';

class DadosCliente extends Component {
  render() {
    const { usuario, permissaoInicial, permitir } = this.props;
    return usuario || permissaoInicial ? (
      <DadosClienteContainer />
    ) : (
      <ClienteLogin permitir={permitir} />
    );
  }
}

export default DadosCliente;
