import React, { Component } from 'react';
import FormSimples from '../../components/Inputs/FormSimples';

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
              value={CEP}
              name="CEP"
              placeholder="12345-789"
              label="CEP"
              onChange={(e) => this.onChange('CEP', e)}
            />
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="flex-1">
        <div>
          <h2>DADOS DE ENTREGA</h2>
        </div>
        {this.renderDadosDeEntrega()}
        {this.renderDadosDeCobranca()}
      </div>
    );
  }
}
