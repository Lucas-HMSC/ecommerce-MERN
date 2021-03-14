import React, { Component } from 'react';

import FormRadio from '../../components/Inputs/FormRadio';

class DadosFrete extends Component {
  state = {
    frete_selecionado: 'PAC',
  };
  render() {
    const { frete_selecionado } = this.state;
    return (
      <div className="Dados-Frete">
        <h2>MÉTODOS DE ENTREGA</h2>
        <br />
        <div className="flex horizontal">
          <div className="flex-1">
            <FormRadio
              name="frete_selecionado"
              checked={frete_selecionado === 'PAC'}
              onChange={() => this.setState({ frete_selecionado: 'PAC' })}
              label="PAC (8 dias úteis) - R$ 18,90"
            />
          </div>
          <div className="flex-1">
            <FormRadio
              name="frete_selecionado"
              checked={frete_selecionado === 'SEDEX'}
              onChange={() => this.setState({ frete_selecionado: 'SEDEX' })}
              label="SEDEX (3 dias úteis) - R$ 35,90"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DadosFrete;
