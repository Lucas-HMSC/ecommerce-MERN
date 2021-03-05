import React, { Component } from 'react';

import DetalhesDoCliente from './detalhesDoCliente';
import DetalhesDosPedidos from './detalhesDosPedidos';

import { connect } from 'react-redux';
import { actions } from '../../actions/clientes';

class Cliente extends Component {
  componentDidMount() {
    const { usuario } = this.props;
    const { id } = this.props.match.params;
    if (!usuario) return null;
    this.props.getCliente(id, usuario.loja);
  }

  componentWillUnmount() {
    this.props.limparCliente();
  }

  render() {
    return (
      <div className="Cliente full-width flex vertical">
        <div className="Card">
          <DetalhesDoCliente history={this.props.history} />
        </div>
        <div className="Sub-card">
          <DetalhesDosPedidos id={this.props.match.params.id} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  usuario: state.auth.usuario,
});

export default connect(mapStateToProps, actions)(Cliente);
