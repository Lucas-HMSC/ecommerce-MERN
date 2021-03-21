import React, { Component } from 'react';

import Layout from '../../components/Layout';
import Cabecalho from '../../containers/Cabecalho';
import AlterarSenhaContainer from '../../containers/AreaDoCliente/AlterarSenha';
import Rodape from '../../containers/Rodape';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import callBaseData from '../../utils/callBaseData';
import initialize from '../../utils/initialize';

class AlterarSenha extends Component {
  static async getInitialProps(ctx) {
    initialize(ctx);
    return callBaseData([], ctx);
  }

  async componentDidMount() {
    await this.props.getUser({ token: this.props.token });
  }
  
  render() {
    return (
      <Layout title="Alterar Senha | Loja TI - Melhores produtos de tecnologia">
        <Cabecalho />
        <AlterarSenhaContainer />
        <Rodape />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, actions)(AlterarSenha);
