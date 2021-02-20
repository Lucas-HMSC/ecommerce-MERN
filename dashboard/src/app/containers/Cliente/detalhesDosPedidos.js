import React, { Component } from 'react';
import moment from 'moment';

import Titulo from '../../components/Texto/Titulo';
import Tabela from '../../components/Tabela/Simples';

class DetalhesDosPedidos extends Component {
  render() {
    // Dados
    const dados = [
      {
        'ID': '9D19DKSAD9AKSD',
        'Valor Total': 89.9,
        'Data': moment().toISOString(),
        'Situação': 'Aguardando Pagamento',
        'botaoDetalhes': '/pedido/9D19DKSAD9AKSD',
      },
      {
        'ID': '9D19DKSAD9AKAE',
        'Valor Total': 105.9,
        'Data': moment().toISOString(),
        'Situação': 'Aguardando Pagamento',
        'botaoDetalhes': '/pedido/9D19DKSAD9AKAE',
      },
      {
        'ID': '9D19DKSAD9AKKO',
        'Valor Total': 26.72,
        'Data': moment().toISOString(),
        'Situação': 'Pagamento Concluído',
        'botaoDetalhes': '/pedido/9D19DKSAD9AKKO',
      },
    ];

    return (
      <div className="Detalhes-dos-Pedidos">
        <Titulo tipo="h3" titulo="Pedidos Feitos" />
        <br />
        <Tabela
          cabecalho={['ID', 'Valor Total', 'Data', 'Situação']}
          dados={dados}
        />
      </div>
    );
  }
}

export default DetalhesDosPedidos;
