import React, { Component } from 'react';

import Layout from '../../components/Layout';
import Cabecalho from '../../containers/Cabecalho';
import ProdutosCategoria from '../../containers/Lista/ProdutosCategoria';
import Rodape from '../../containers/Rodape';

export default class Categoria extends Component {
  render() {
    return (
      <Layout title="Acessórios | Loja TI - Melhores produtos de tecnologia">
        <Cabecalho />
        <ProdutosCategoria />
        <Rodape />
      </Layout>
    );
  }
}
