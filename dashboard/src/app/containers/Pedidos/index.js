import React, { Component } from 'react';
import moment from 'moment';

import Titulo from '../../components/Texto/Titulo';

import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples.js';

class Pedidos extends Component {
  state = {
    pesquisa: '',
    atual: 0,
  };

  onChangePesquisa = (ev) => this.setState({ pesquisa: ev.target.value });

  changeNumeroAtual = (atual) => this.setState({ atual });

  render() {
    const { pesquisa } = this.state;

    // Dados
    const dados = [
      {
        'Cliente': 'Cliente 1',
        'Valor Total': 89.9,
        'Data': moment().toISOString(),
        'Situação': 'Aguardando Pagamento',
        'botaoDetalhes': '/pedidos/9D19DKSAD9AKSD',
      },
      {
        'Cliente': 'Cliente 2',
        'Valor Total': 105.9,
        'Data': moment().toISOString(),
        'Situação': 'Aguardando Pagamento',
        'botaoDetalhes': '/pedidos/9D19DKSAD9AKAE',
      },
      {
        'Cliente': 'Cliente 3',
        'Valor Total': 26.72,
        'Data': moment().toISOString(),
        'Situação': 'Pagamento Concluído',
        'botaoDetalhes': '/pedidos/9D19DKSAD9AKKO',
      },
    ];

    return (
      <div className="Pedidos">
        <div className="Card">
          <Titulo tipo="h1" titulo="Pedidos" />
          <br />
          <Pesquisa
            valor={pesquisa}
            placeholder={'Pesquise aqui pelo nome do cliente...'}
            onChange={(ev) => this.onChangePesquisa(ev)}
            onClick={() => alert('Pesquisar')}
          />
          <br />
          <Tabela
            cabecalho={['Cliente', 'Valor Total', 'Data', 'Situação']}
            dados={dados}
          />
          <Paginacao
            atual={this.state.atual}
            total={120}
            limite={20}
            onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)}
          />
        </div>
      </div>
    );
  }
}

export default Pedidos;
