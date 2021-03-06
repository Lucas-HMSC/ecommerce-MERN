import React, { Component } from 'react';

import FormSimples from '../../../components/Inputs/FormSimples';
import TextoDados from '../../../components/Texto/Dados';
import ESTADOS from '../../../utils';

import { connect } from 'react-redux';
import actions from '../../../redux/actions';

import AlertGeral from '../../../components/Alert/Geral';
import { validateCPF } from '../../../utils/validate';
import {
  formatCEP,
  formatCPF,
  formatDataDeNascimento,
  formatNumber,
  formatTelefone,
} from '../../../utils/format';
import moment from 'moment';

class FormularioDados extends Component {
  state = {
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
    aviso: null,
    erros: {},
  };

  updateState = (cliente) => {
    this.setState({
      nome: cliente.nome,
      CPF: cliente.cpf,
      telefone: cliente.telefones[0],
      dataDeNascimento: moment(cliente.dataDeNascimento).format('DD/MM/YYYY'),
      local: cliente.endereco.local,
      numero: cliente.endereco.numero,
      complemento: cliente.endereco.complemento || '',
      bairro: cliente.endereco.bairro,
      cidade: cliente.endereco.cidade,
      estado: cliente.endereco.estado,
      CEP: cliente.endereco.CEP,
    });
  };

  componentDidMount() {
    if (this.props.cliente) this.updateState(this.props.cliente);
  }

  componentDidUpdate(prevProps) {
    if (
      (!prevProps.cliente && this.props.cliente) ||
      (prevProps.cliente &&
        this.props.cliente &&
        prevProps.cliente.updateAt !== this.props.cliente.updateAt)
    )
      this.updateState(this.props.cliente);
  }

  validate() {
    const {
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
    return Object.keys(erros) === 0;
  }

  handleSubmit() {
    const { cliente, token } = this.props;
    if (!cliente || !token || !this.validate()) return null;
    this.props.updateCliente(this.state, cliente._id, token, (error) => {
      if (error)
        this.setState({
          aviso: {
            status: false,
            error: message,
          },
        });
      else alert('Dados atualizados com sucesso!');
    });
  }

  onChange = (f, v) => this.setState({ [f]: v }, () => this.validate());

  render() {
    const {
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
      erros,
    } = this.state;
    const { usuario } = this.props;
    return (
      <div className="flex-4 conteudo-area-cliente">
        <h2>MEUS DADOS</h2>
        <br />
        <br />
        <div className="form-dados">
          <div>
            <TextoDados chave="E-mail" valor={usuario ? usuario.email : ''} />
          </div>
          <br />
          <FormSimples
            value={nome}
            name="nome"
            type="text"
            placeholder="Nome"
            erro={erros.nome}
            onChange={() => this.onChange('nome', e.target.value)}
            label="Nome"
          />
          <FormSimples
            value={CPF}
            name="CPF"
            type="text"
            placeholder="CPF"
            erro={erros.nome}
            onChange={() => this.onChange('CPF', formatCPF(e.target.value))}
            label="CPF"
          />
          <div className="flex horizontal">
            <div className="flex-1">
              <FormSimples
                value={telefone}
                name="telefone"
                type="text"
                placeholder="Telefone"
                erro={erros.telefone}
                onChange={() =>
                  this.onChange('telefone', formatTelefone(e.target.value))
                }
                label="Telefone"
              />
            </div>
            <div className="flex-1">
              <FormSimples
                value={dataDeNascimento}
                name="dataDeNascimento"
                type="text"
                placeholder="DD/MM/AAAA"
                erro={erros.dataDeNascimento}
                onChange={() =>
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
                name="local"
                placeholder="Endereço"
                erro={erros.local}
                onChange={() => this.onChange('local', e.target.value)}
                label="Endereço"
              />
            </div>
            <div className="flex-1">
              <FormSimples
                value={numero}
                name="numero"
                placeholder="Número"
                erro={erros.numero}
                onChange={() =>
                  this.onChange('numero', formatNumber(e.target.value))
                }
                label="Número"
              />
            </div>
          </div>
          <div className="flex horizontal">
            <div className="flex-1">
              <FormSimples
                value={bairro}
                name="bairro"
                placeholder="Bairro"
                erro={erros.bairro}
                onChange={() => this.onChange('bairro', e.target.value)}
                label="Bairro"
              />
            </div>
            <div className="flex-1">
              <FormSimples
                value={complemento}
                name="complemento"
                placeholder="Complemento"
                erro={erros.complemento}
                onChange={() => this.onChange('complemento', e.target.value)}
                label="Complemento"
              />
            </div>
          </div>
          <div className="flex horizontal">
            <div className="flex-1">
              <FormSimples
                value={cidade}
                name="cidade"
                placeholder="Cidade"
                erro={erros.cidade}
                onChange={() => this.onChange('cidade', e.target.value)}
                label="Cidade"
              />
            </div>
            <div className="form-input">
              <label>Estado</label>
              <select
                name="estado"
                value={estado}
                onChange={() => this.onChange('estado', e.target.value)}
              >
                <option>Selecione seu estado</option>
                {Object.keys(ESTADOS).map((abbr) => (
                  <option value={abbr} key={abbr}>
                    {ESTADOS[abbr]}
                  </option>
                ))}
              </select>
              {erros.estado && <small className="erro">{erros.estado}</small>}
            </div>
          </div>
          <FormSimples
            value={CEP}
            name="CEP"
            placeholder="12345-789"
            erro={erros.CEP}
            onChange={() => this.onChange('CEP', formatCEP(e.target.value))}
            label="CEP"
          />
        </div>
        <br />
        <AlertGeral aviso={this.state.aviso} />
        <div className="flex flex-start">
          <button
            className="btn btn-primary"
            onClick={() => this.handleSubmit()}
          >
            SALVAR
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  usuario: state.auth.usuario,
  cliente: state.cliente.cliente,
});

export default connect(mapStateToProps, actions)(FormularioDados);
