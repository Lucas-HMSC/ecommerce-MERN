import React from 'react';
import ButtonSimples from '../../components/Button/Simples';
import Titulo from '../../components/Texto/Titulo';
import InputValor from '../../components/Inputs/InputValor';
import { TextoDados } from '../../components/Texto/Dados';
import Voltar from '../../components/Links/Voltar';

class DetalhesDoCliente extends React.Component {
  state = {
    nome: 'Cliente 1',
    CPF: '111.222.333-45',
    telefone: '12 1234-5678',
    dataDeNascimento: '10/01/1995',
    email: 'cliente1@hotmail.com',

    endereco: 'Rua Logo Ali, 123',
    bairro: 'Centro',
    cidade: 'Bauru',
    estado: 'SP',
    cep: '14325-198',
  };

  handleSubmit = (field, value) => {
    this.setState({ [field]: value });
  };

  renderCabecalho() {
    const { nome } = this.state;
    <div className="flex">
      <div className="flex-1 flex">
        <Titulo tipo="h1" titulo={nome} />
      </div>
      <div className="flex-1 flex flex-end">
        <ButtonSimples
          onClick={() => alert('Salvo!')}
          label="Salvar"
          type="success"
        />
        <ButtonSimples
          onClick={() => alert('Removido!')}
          label="Remover"
          type="danger"
        />
      </div>
    </div>;
  }

  renderDetalhesCadastro() {
    const { nome, CPF, email, telefone, dataDeNascimento } = this.state;
    return (
      <div className="Detalhes-do-Cadastro">
        <TextoDados
          chave="Nome"
          valor={
            <InputValor
              name="nome"
              noStyle
              handleSubmit={(valor) => this.handleSubmit('nome', valor)}
              value={nome}
            />
          }
        />
        <TextoDados
          chave="CPF"
          valor={
            <InputValor
              name="cpf"
              noStyle
              handleSubmit={(valor) => this.handleSubmit('CPF', valor)}
              value={CPF}
            />
          }
        />
        <TextoDados
          chave="Telefone"
          valor={
            <InputValor
              name="telefone"
              noStyle
              handleSubmit={(valor) => this.handleSubmit('telefone', valor)}
              value={telefone}
            />
          }
        />
        <TextoDados
          chave="E-mail"
          valor={
            <InputValor
              name="email"
              noStyle
              handleSubmit={(valor) => this.handleSubmit('email', valor)}
              value={email}
            />
          }
        />
        <TextoDados
          chave="Data de Nascimento"
          valor={
            <InputValor
              name="dataDeNascimento"
              noStyle
              handleSubmit={(valor) =>
                this.handleSubmit('dataDeNascimento', valor)
              }
              value={dataDeNascimento}
            />
          }
        />
      </div>
    );
  }

  renderDetalhesEntrega() {
    const { endereco, bairro, cidade, estado, cep } = this.state;
    return (
      <div className="Detalhes-da-Entrega">
        <TextoDados
          chave="Endereco"
          valor={
            <InputValor
              name="endereco"
              noStyle
              handleSubmit={(valor) => this.handleSubmit('endereco', valor)}
              value={endereco}
            />
          }
        />
        <TextoDados
          chave="Bairro"
          valor={
            <InputValor
              name="bairro"
              noStyle
              handleSubmit={(valor) => this.handleSubmit('bairro', valor)}
              value={bairro}
            />
          }
        />
        <TextoDados
          chave="Cidade"
          valor={
            <InputValor
              name="cidade"
              noStyle
              handleSubmit={(valor) => this.handleSubmit('cidade', valor)}
              value={cidade}
            />
          }
        />
        <TextoDados
          chave="Estado"
          valor={
            <InputValor
              name="estado"
              noStyle
              handleSubmit={(valor) => this.handleSubmit('estado', valor)}
              value={estado}
            />
          }
        />
        <TextoDados
          chave="CEP"
          valor={
            <InputValor
              name="cep"
              noStyle
              handleSubmit={(valor) => this.handleSubmit('cep', valor)}
              value={cep}
            />
          }
        />
      </div>
    );
  }

  render() {
    return (
      <div className="DetalhesDoCliente">
        <Voltar path="/clientes" />
        {this.renderCabecalho()}
        <div className="DetalhesDoCliente">
          <div className="flex-1 flex vertical">
            {this.renderDetalhesCadastro()}
          </div>
          <div className="flex-1 flex vertical">
            {this.renderDetalhesEntrega()}
          </div>
        </div>
      </div>
    );
  }
}

export default DetalhesDoCliente;
