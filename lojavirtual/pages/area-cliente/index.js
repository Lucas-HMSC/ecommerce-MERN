import React, { Component } from 'react';

import Layout from '../components/Layout';
import Cabecalho from '../containers/Cabecalho';
import AreaDoCliente from '../containers/AreaDoCliente';
import Rodape from '../containers/Rodape';

export default class AreaDoCliente extends Component {
  render() {
    return (
      <Layout title="Loja TI - Melhores produtos de tecnologia">
        <Cabecalho />
        <AreaDoCliente />
        <Rodape />
      </Layout>
    );
  }
}
