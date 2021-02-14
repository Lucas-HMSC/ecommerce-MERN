import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Titulo from '../../components/Texto/Titulo';

import Input from '../../components/Inputs/Simples';
import Checkbox from '../../components/Inputs/Checkbox';

class Login extends Component {
  state = {
    email: '',
    senha: '',
    opcaoLembrar: true,
  };

  onChangeInput = (field, ev) => this.setState({ [field]: ev.target.value });
  onChangeCheckbox = (field) => this.setState({ [field]: !this.state[field] });

  render() {
    const { email, senha } = this.state;
    return (
      <div className="Login">
        <div className="card">
          <Titulo tipo="h1" titulo="Loja TI" />
          <p>Faça seu login abaixo</p>
          <Input
            label="E-mail"
            value={email}
            type="email"
            onChange={(ev) => this.onChangeInput('email', ev)}
          />
          <Input
            label="Senha"
            value={senha}
            type="password"
            onChange={(ev) => this.onChangeInput('senha', ev)}
          />

          <div>
            <div>
              <Checkbox
                value={opcaoLembrar}
                onChange={() => this.onChangeCheckbox('opcaoLembrar')}
                label="Lembrar?"
              />
            </div>
            <div>
              <Link to="/recuperar-senha">Esqueceu sua senha?</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
