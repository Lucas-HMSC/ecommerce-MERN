import React, { Component } from 'react';

import Layout from '../components/Layout';
import Cabecalho from '../containers/Cabecalho';
import SucessoContainer from '../containers/SucessoContainer';
import Rodape from '../containers/Rodape';

export default class Sucesso extends Component {
  render() {
    return (
      <Layout title="Loja TI - Melhores produtos de tecnologia">
        <Cabecalho simples />
        <SucessoContainer />
        <Rodape />
      </Layout>
    );
  }
}
