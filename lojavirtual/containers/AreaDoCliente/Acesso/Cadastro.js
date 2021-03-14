import React, { Component } from 'react';

import { ESTADOS } from '../../../utils';
import FormSimples from '../../../components/Inputs/FormSimples';

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
        <h2 className="text-center">Criar Conta</h2>
        <br />
        <br />
        <div className="form-cadastro">
          <FormSimples
            value={email}
            name="email"
            type="email"
            placeholder="Email"
          />
          <FormSimples
            value={senha}
            name="senha"
            type="password"
            placeholder="Senha"
          />
          <br />
          <FormSimples
            value={nome}
            name="nome"
            type="text"
            placeholder="Nome"
          />
          <FormSimples value={cpf} name="cpf" type="text" placeholder="CPF" />
          <div className="flex horizontal">
            <div className="flex-1">
              <FormSimples
                value={telefone}
                name="telefone"
                type="text"
                placeholder="Telefone"
                label="Telefone"
              />
            </div>
            <div className="flex-1">
              <FormSimples
                value={dataDeNascimento}
                name="dataDeNascimento"
                type="text"
                placeholder="DD/MM/AAAA"
                label="Data de Nascimento"
              />
            </div>
          </div>
          <br />
          <div className="flex horizontal">
            <div className="flex-3">
              <FormSimples value={local} name="local" placeholder="Endereço" />
            </div>
            <div className="flex-1">
              <FormSimples value={numero} name="numero" placeholder="Número" />
            </div>
          </div>
          <div className="flex horizontal">
            <div className="flex-1">
              <FormSimples value={bairro} name="bairro" placeholder="Bairro" />
            </div>
            <div className="flex-1">
              <FormSimples
                value={complemento}
                name="complemento"
                placeholder="Complemento"
              />
            </div>
          </div>
          <div className="flex horizontal">
            <div className="flex-1">
              <FormSimples
                value={cidade}
                name="cidade"
                placeholder="Cidade"
                label="Cidade"
              />
            </div>
            <div className="form-input">
              <label>Estado</label>
              <select name="estado" value={estado}>
                <option>Selecione seu estado</option>
                {Object.keys(ESTADOS).map((abbr) => (
                  <option value={abbr} key={abbr}>
                    {ESTADOS[abbr]}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <FormSimples
            value={CEP}
            name="CEP"
            placeholder="12345-789"
            label="CEP"
          />
          <br />
          <div className="flex flex-center">
            <button className="btn btn-primary">CADASTRAR</button>
          </div>
          <br />
          <hr />
          <div className="link-acesso text-center">
            <span onClick={this.props.changeAcesso}>
              Já tem conta? Clique aqui para logar
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default CadastroContainer;
