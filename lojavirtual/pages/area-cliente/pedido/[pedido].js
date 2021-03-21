import React, { Component } from 'react';

import Layout from '../../../components/Layout';
import Cabecalho from '../../../containers/Cabecalho';
import PedidoContainer from '../../../containers/PedidoContainer';
import Rodape from '../../../containers/Rodape';

import { connect } from 'react-redux';
import actions from '../../../redux/actions';
import callBaseData from '../../../utils/callBaseData';
import initialize from '../../../utils/initialize';

class Pedido extends Component {
  static async getInitialProps(ctx) {
    initialize(ctx);
    return {
      ...(await callBaseData([], ctx)),
      query: ctx.query,
    };
  }

  async componentDidMount() {
    await this.props.getUser({ token: this.props.token });
  }

  render() {
    const { query } = this.props;
    return (
      <Layout title="Pedido | Loja TI - Melhores produtos de tecnologia">
        <Cabecalho />
        <PedidoContainer query={query} />
        <Rodape />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, actions)(Pedido);
