import React, { Component } from 'react';

import FormCheckbox from '../../components/Inputs/FormCheckbox';

class DadosFrete extends Component {
  render() {
    return (
      <div className="Dados-Frete">
        <h2>MÉTODOS DE ENTREGA</h2>
        <br />
        <div className="flex horizontal">
          <div className="flex-1">
            <FormCheckbox
              name="PAC"
              checked={true}
              label="PAC (8 dias úteis) - R$ 18,90"
            />
          </div>
          <div className="flex-1">
            <FormCheckbox
              name="SEDEX"
              checked={false}
              label="SEDEX (3 dias úteis) - R$ 35,90"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DadosFrete;
