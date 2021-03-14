import React, { Component } from 'react';

import Layout from '../../components/Layout';
import Cabecalho from '../../containers/Cabecalho';
import DadosContainer from '../../containers/AreaDoCliente/Dados';
import Rodape from '../../containers/Rodape';

export default class DadosDoCliente extends Component {
  render() {
    return (
      <Layout title="Meus Dados | Loja TI - Melhores produtos de tecnologia">
        <Cabecalho />
        <DadosContainer />
        <Rodape />
      </Layout>
    );
  }
}
