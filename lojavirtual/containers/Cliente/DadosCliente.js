import React, { Component } from 'react';
import FormSimples from '../../components/Inputs/FormSimples';

export default class DadosClienteContainer extends Component {
  renderDadosRegistro() {
    return (
      <div>
        <FormSimples
          value={email}
          name="email"
          placeholder="E-mail"
          label="E-mail"
          onChange={(e) => this.onChange('email', e)}
        />
        <br />
        <FormSimples
          value={senha}
          name="senha"
          placeholder="Senha"
          label="Senha"
          onChange={(e) => this.onChange('senha', e)}
        />
      </div>
    );
  }
  renderDadosUsuario() {}
  render() {
    return (
      <div className="flex-1">
        {this.renderDadosRegistro()}
        {this.renderDadosUsuario()}
      </div>
    );
  }
}
