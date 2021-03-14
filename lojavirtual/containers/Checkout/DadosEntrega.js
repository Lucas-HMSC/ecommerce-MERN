import React, { Component } from 'react';
import FormSimples from '../../components/Inputs/FormSimples';

import { ESTADOS } from '../../utils';

export default class DadosClienteContainer extends Component {
  state = {
    dadosEntregaIgualDadosCobranca: true,
    local: '',
    numero: '',
    bairro: '',
    complemento: '',
    cidade: '',
    estado: '',
    CEP: '',
    dadosCobranca: {
      local: '',
      numero: '',
      bairro: '',
      complemento: '',
      cidade: '',
      estado: '',
      CEP: '',
    },
  };

  onChange = (field, e) => this.setState({ [field]: e.target.value });
  onChangeCobranca = (field, e) => {
    const { state } = this;
    state.dadosCobranca[field] = e.target.value;
    this.setState(state);
  };

  renderDadosDeEntrega() {
    const {
      dadosEntregaIgualDadosCobranca,
      local,
      numero,
      bairro,
      complemento,
      cidade,
      estado,
      CEP,
    } = this.state;
    return (
      <div className="flex-1 flex horizontal">
        <div>
          <h2>DADOS DE ENTREGA</h2>
        </div>
        <div className="flex-1">
          <FormSimples
            value={CEP}
            name="CEP"
            placeholder="12345-789"
            label="CEP"
            onChange={(e) => this.onChange('CEP', e)}
          />
        </div>
        <div className="flex-1 flex horizontal">
          <div className="flex-1">
            <FormSimples
              value={local}
              name="local"
              placeholder="Rua, Avenida, ..."
              label="Endereço (Rua, Avenida, ...)"
              onChange={(e) => this.onChange('local', e)}
            />
          </div>
          <div className="flex-1">
            <FormSimples
              value={numero}
              name="numero"
              placeholder="9999"
              label="Número"
              onChange={(e) => this.onChange('numero', e)}
            />
          </div>
        </div>
        <div className="flex-1 flex horizontal">
          <div className="flex-1">
            <FormSimples
              value={bairro}
              name="bairro"
              placeholder="Bairro"
              label="Bairro"
              onChange={(e) => this.onChange('bairro', e)}
            />
          </div>
          <div className="flex-1">
            <FormSimples
              value={complemento}
              name="complemento"
              placeholder="complemento"
              label="Complemento"
              onChange={(e) => this.onChange('complemento', e)}
            />
          </div>
        </div>
        <div className="flex-1 flex horizontal">
          <div className="flex-1">
            <FormSimples
              value={cidade}
              name="cidade"
              placeholder="Cidade"
              label="Cidade"
              onChange={(e) => this.onChange('cidade', e)}
            />
          </div>
          <div className="flex-1">
            <select value={estado} onChange={(e) => this.onChange('estado', e)}>
              <option>Selecione...</option>
              {Object.keys(ESTADOS).map((abbr) => (
                <option key={abbr} value={abbr}>
                  {ESTADOS[abbr]}
                </option>
              ))}
            </select>
          </div>
        </div>
        <br />
        <div>
          <input
            checked={dadosEntregaIgualDadosCobranca}
            type="checkbox"
            onChange={() =>
              this.setState({
                dadosEntregaIgualDadosCobranca: !dadosEntregaIgualDadosCobranca,
              })
            }
          />
          <label>
            &nbsp;Os dados de entrega são iguais aos dados de cobrança
          </label>
        </div>
      </div>
    );
  }

  renderDadosDeCobranca() {
    const {
      local,
      numero,
      bairro,
      complemento,
      cidade,
      estado,
      CEP,
    } = this.state.dadosCobranca;
    return (
      <div className="flex-1 flex horizontal">
        <div>
          <h2>DADOS DE COBRANÇA</h2>
        </div>
        <div className="flex-1">
          <FormSimples
            value={CEP}
            name="CEP"
            placeholder="12345-789"
            label="CEP"
            onChange={(e) => this.onChangeCobranca('CEP', e)}
          />
        </div>
        <div className="flex-1 flex horizontal">
          <div className="flex-1">
            <FormSimples
              value={local}
              name="local"
              placeholder="Rua, Avenida, ..."
              label="Endereço (Rua, Avenida, ...)"
              onChange={(e) => this.onChangeCobranca('local', e)}
            />
          </div>
          <div className="flex-1">
            <FormSimples
              value={numero}
              name="numero"
              placeholder="9999"
              label="Número"
              onChange={(e) => this.onChangeCobranca('numero', e)}
            />
          </div>
        </div>
        <div className="flex-1 flex horizontal">
          <div className="flex-1">
            <FormSimples
              value={bairro}
              name="bairro"
              placeholder="Bairro"
              label="Bairro"
              onChange={(e) => this.onChangeCobranca('bairro', e)}
            />
          </div>
          <div className="flex-1">
            <FormSimples
              value={complemento}
              name="complemento"
              placeholder="complemento"
              label="Complemento"
              onChange={(e) => this.onChangeCobranca('complemento', e)}
            />
          </div>
        </div>
        <div className="flex-1 flex horizontal">
          <div className="flex-1">
            <FormSimples
              value={cidade}
              name="cidade"
              placeholder="Cidade"
              label="Cidade"
              onChange={(e) => this.onChangeCobranca('cidade', e)}
            />
          </div>
          <div className="flex-1">
            <select
              value={estado}
              onChange={(e) => this.onChangeCobranca('estado', e)}
            >
              <option>Selecione...</option>
              {Object.keys(ESTADOS).map((abbr) => (
                <option key={abbr} value={abbr}>
                  {ESTADOS[abbr]}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { dadosEntregaIgualDadosCobranca } = this.state;
    return (
      <div className="flex-1">
        {this.renderDadosDeEntrega()}
        {!dadosEntregaIgualDadosCobranca && this.renderDadosDeCobranca()}
      </div>
    );
  }
}
