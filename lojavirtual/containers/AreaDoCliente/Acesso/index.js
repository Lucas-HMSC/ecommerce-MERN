import React, { Component } from 'react';

import LoginContainer from './Login';
import CadastroContainer from './Cadastro';

export default class AcessoContainer extends Component {
  state = {
    paraLogar: true,
  };
  render() {
    return (
      <div className="Acesso-Container">
        {this.state.paraLogar ? <LoginContainer /> : <CadastroContainer />}
      </div>
    );
  }
}
