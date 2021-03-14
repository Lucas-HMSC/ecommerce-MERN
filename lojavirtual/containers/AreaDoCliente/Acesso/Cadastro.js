import React, { Component } from 'react';

class CadastroContainer extends Component {
  state = {
    email: '',
    senha: '',

    nome: '',
    cpf: '',
    telefone: '',
    dataDeNascimento: '',

    local: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    CEP: '',
  };

  render() {
    const {
      email,
      senha,
      nome,
      cpf,
      telefone,
      dataDeNascimento,
      local,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      CEP,
    } = this.state;
    return (
      <div className="Cadastro-Container">
        <h2 className="text-center">Minha Conta</h2>
        <br />
        <hr />
        <br />
        <div className="form-cadastro">
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
            <button className="btn btn-primary">CADASTRAR</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CadastroContainer;
