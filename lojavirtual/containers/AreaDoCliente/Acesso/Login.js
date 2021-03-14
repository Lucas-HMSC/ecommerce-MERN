import React, { Component } from 'react';

class LoginContainer extends Component {
  state = {
    email: '',
    senha: '',
  };

  render() {
    const { email, senha } = this.state;
    return (
      <div className="Login-Container">
        <h2 className="text-center">Minha Conta</h2>
        <br />
        <hr />
        <br />
        <div className="form-login">
          <FormInput
            value={email}
            name="email"
            type="email"
            placeholder="Email"
          />
          <FormInput
            value={senha}
            name="senha"
            type="password"
            placeholder="Senha"
          />
          <br />
          <div className="flex flex-center">
            <button className="btn btn-primary">
              ENTRAR
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
