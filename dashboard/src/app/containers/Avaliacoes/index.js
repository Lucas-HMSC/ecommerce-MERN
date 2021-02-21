import React, { Component } from 'react';
import moment from 'moment';

import Titulo from '../../components/Texto/Titulo';
import Tabela from '../../components/Tabela/Simples';
import Voltar from '../../components/Links/Voltar';

class Avaliacoes extends Component {
  render() {
    // Dados
    const dados = [
      {
        Cliente: 'Cliente 1',
        Data: moment().format('DD/MM/YYYY'),
        botaoDetalhes: '/avaliacao/F92K392KF3291',
      },
      {
        Cliente: 'Cliente 2',
        Data: moment().format('DD/MM/YYYY'),
        botaoDetalhes: '/avaliacao/F92K392KF3292',
      },
      {
        Cliente: 'Cliente 3',
        Data: moment().format('DD/MM/YYYY'),
        botaoDetalhes: '/avaliacao/F92K392KF3293',
      },
      {
        Cliente: 'Cliente 4',
        Data: moment().format('DD/MM/YYYY'),
        botaoDetalhes: '/avaliacao/F92K392KF3294',
      },
      {
        Cliente: 'Cliente 5',
        Data: moment().format('DD/MM/YYYY'),
        botaoDetalhes: '/avaliacao/F92K392KF3295',
      },
      {
        Cliente: 'Cliente 6',
        Data: moment().format('DD/MM/YYYY'),
        botaoDetalhes: '/avaliacao/F92K392KF3296',
      },
    ];

    return (
      <div className="Avaliacoes full-width">
        <div className="Card">
          <Voltar path="/produto/d92kd9" />
          <Titulo tipo="h1" titulo="Avaliações - Produto 1" />
          <br />
          <Tabela cabecalho={['Cliente', 'Data']} dados={dados} />
        </div>
      </div>
    );
  }
}

export default Avaliacoes;
