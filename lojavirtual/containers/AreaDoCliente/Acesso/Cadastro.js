import React, { Component } from 'react';

import { ESTADOS } from '../../../utils';
import FormSimples from '../../../components/Inputs/FormSimples';

import { connect } from 'react-redux';
import actions from '../../../redux/actions';
import AlertGeral from '../../../components/Alert/Geral';
import {
  formatCPF,
  formatCEP,
  formatDataDeNascimento,
  formatNumber,
  formatTelefone,
} from '../../../utils/format';
import { validateCPF } from '../../../utils/validate';

class CadastroContainer extends Component {
  state = {
    aviso: null,
    erros: {},

    email: '',
    senha: '',

    nome: '',
    CPF: '',
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

  validate() {
    const {
      email,
      senha,
      nome,
      CPF,
      dataDeNascimento,
      telefone,
      local,
      numero,
      bairro,
      cidade,
      estado,
      CEP,
    } = this.state;
    const erros = {};

    if (!email) erros.email = 'Preencha aqui com o seu email';
    if (!senha) erros.senha = 'Preencha aqui com a sua senha';
    if (!nome) erros.nome = 'Preencha aqui com o seu nome';
    if (!CPF || CPF.length !== 14) erros.CPF = 'Preencha aqui com o seu CPF';
    if (CPF && CPF.length === 14 && !validateCPF(CPF))
      erros.CPF = 'Preencha aqui com o seu CPF corretamente';
    if (!dataDeNascimento || dataDeNascimento.length !== 10)
      erros.dataDeNascimento = 'Preencha aqui com a sua data de nascimento';
    if (!telefone || telefone.length < 11)
      erros.telefone = 'Preencha aqui com o seu telefone';

    if (!local) erros.local = 'Preencha aqui com a sua Rua/Avenida';
    if (!numero) erros.numero = 'Preencha aqui com o seu numero';
    if (!bairro) erros.bairro = 'Preencha aqui com o seu bairro';
    if (!cidade) erros.cidade = 'Preencha aqui com a sua cidade';
    if (!estado) erros.estado = 'Preencha aqui com o seu estado';
    if (!CEP || CEP.length !== 9) erros.CEP = 'Preencha aqui com o seu CEP';

    this.setState({ erros, aviso: null });
    return (Object.keys(erros).length === 0);
  }

  handleSubmit() {
    if (!this.validate()) return null;
    this.props.newCliente(this.state, (error) => {
      if (error)
        this.setState({
          aviso: {
            status: false,
            message: error.message,
          },
        });
    });
  }

  onChange = (field, value) =>
    this.setState({ [field]: value }, () => this.validate());

  render() {
    const {
      email,
      senha,
      nome,
      CPF,
      telefone,
      dataDeNascimento,
      local,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      CEP,
      aviso,
      erros,
    } = this.state;
    return (
      <div className="Cadastro-Container">
        <h2 className="text-center">Criar Conta</h2>
        <br />
        <br />
        <div className="form-cadastro">
          <FormSimples
            value={email}
            erro={erros.email}
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => this.onChange('email', e.target.value)}
          />
          <FormSimples
            value={senha}
            erro={erros.senha}
            name="senha"
            type="password"
            placeholder="Senha"
            onChange={(e) => this.onChange('senha', e.target.value)}
          />
          <br />
          <FormSimples
            value={nome}
            erro={erros.nome}
            name="nome"
            type="text"
            placeholder="Nome"
            onChange={(e) => this.onChange('nome', e.target.value)}
          />
          <FormSimples
            value={CPF}
            erro={erros.CPF}
            name="CPF"
            type="text"
            placeholder="CPF"
            onChange={(e) => this.onChange('CPF', formatCPF(e.target.value))}
          />
          <div className="flex horizontal">
            <div className="flex-1">
              <FormSimples
                value={telefone}
                erro={erros.telefone}
                name="telefone"
                type="text"
                placeholder="Telefone"
                onChange={(e) =>
                  this.onChange('telefone', formatTelefone(e.target.value))
                }
                label="Telefone"
              />
            </div>
            <div className="flex-1">
              <FormSimples
                value={dataDeNascimento}
                erro={erros.dataDeNascimento}
                name="dataDeNascimento"
                type="text"
                placeholder="DD/MM/AAAA"
                onChange={(e) =>
                  this.onChange(
                    'dataDeNascimento',
                    formatDataDeNascimento(e.target.value),
                  )
                }
                label="Data de Nascimento"
              />
            </div>
          </div>
          <br />
          <div className="flex horizontal">
            <div className="flex-3">
              <FormSimples
                value={local}
                erro={erros.local}
                name="local"
                placeholder="Endereço"
                onChange={(e) => this.onChange('local', e.target.value)}
              />
            </div>
            <div className="flex-1">
              <FormSimples
                value={numero}
                erro={erros.numero}
                name="numero"
                placeholder="Número"
                onChange={(e) =>
                  this.onChange('numero', formatNumber(e.target.value))
                }
              />
            </div>
          </div>
          <AlertGeral aviso={aviso} />
          <div className="flex horizontal">
            <div className="flex-1">
              <FormSimples
                value={bairro}
                erro={erros.bairro}
                name="bairro"
                placeholder="Bairro"
                onChange={(e) => this.onChange('bairro', e.target.value)}
              />
            </div>
            <div className="flex-1">
              <FormSimples
                value={complemento}
                erro={erros.complemento}
                name="complemento"
                placeholder="Complemento"
                onChange={(e) => this.onChange('complemento', e.target.value)}
              />
            </div>
          </div>
          <div className="flex horizontal">
            <div className="flex-1">
              <FormSimples
                value={cidade}
                erro={erros.cidade}
                name="cidade"
                placeholder="Cidade"
                onChange={(e) => this.onChange('cidade', e.target.value)}
                label="Cidade"
              />
            </div>
            <div className="form-input">
              <label>Estado</label>
              <select
                name="estado"
                value={estado}
                onChange={(e) => this.onChange('estado', e.target.value)}
              >
                <option>Selecione seu estado</option>
                {Object.keys(ESTADOS).map((abbr) => (
                  <option value={abbr} key={abbr}>
                    {ESTADOS[abbr]}
                  </option>
                ))}
              </select>
              {erros.estados && <small className="erro">{erros.estado}</small>}
            </div>
          </div>
          <FormSimples
            value={CEP}
            erro={erros.CEP}
            name="CEP"
            placeholder="12345-789"
            onChange={(e) => this.onChange('CEP', formatCEP(e.target.value))}
            label="CEP"
          />
          <br />
          <AlertGeral aviso={aviso} />
          <div className="flex flex-center">
            <button
              className="btn btn-primary"
              onClick={() => this.handleSubmit()}
            >
              CADASTRAR
            </button>
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

export default connect(null, actions)(CadastroContainer);
