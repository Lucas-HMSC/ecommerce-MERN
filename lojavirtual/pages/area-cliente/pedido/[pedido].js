import React, { Component } from 'react';

import Layout from '../../../components/Layout';
import Cabecalho from '../../../containers/Cabecalho';
import PedidoContainer from '../../../containers/PedidoContainer';
import Rodape from '../../../containers/Rodape';

export default class Pedido extends Component {
  render() {
    return (
      <Layout title="Pedido | Loja TI - Melhores produtos de tecnologia">
        <Cabecalho />
        <PedidoContainer />
        <Rodape />
      </Layout>
    );
  }
}
