import React, { Component } from 'react';

import Layout from '../components/Layout';
import Cabecalho from '../containers/Cabecalho';
import AreaDoCliente from '../containers/AreaDoCliente';
import Rodape from '../containers/Rodape';

import initialize from '../../utils/initialize';
import callBaseData from '../../utils/callBaseData';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

class AreaDoCliente extends Component {
  static async getInitialProps(ctx) {
    initialize(ctx);
    return callBaseData([], ctx);
  }

  async componentDidMount() {
    await this.props.getUser({ token: this.props.token });
  }

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

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, actions)(AreaDoCliente);
