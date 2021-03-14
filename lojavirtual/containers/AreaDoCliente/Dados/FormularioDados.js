import React, { Component } from 'react';

import FormSimples from '../../../components/Inputs/FormSimples';
import TextoDados from '../../../components/Texto/Dados';
import ESTADOS from '../../../utils';

class FormularioDados extends Component {
  state = {
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
      <div className="flex-4 conteudo-area-cliente">
        <h2>MEUS DADOS</h2>
        <br />
        <br />
        <div className="form-dados">
          <div>
            <TextoDados chave="E-mail" valor="teste@teste.com" />
          </div>
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
        </div>
        <br />
        <div className="flex flex-start">
          <button className="btn btn-primary">SALVAR</button>
        </div>
      </div>
    );
  }
}

export default FormularioDados;
