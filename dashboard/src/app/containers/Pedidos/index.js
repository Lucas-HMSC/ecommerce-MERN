import React, { Component } from 'react';
import moment from 'moment';

import Titulo from '../../components/Texto/Titulo';

import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples'

class Pedidos extends Component {
  state = {
    pesquisa: '',
  };

  onChangePesquisa = (ev) => this.setState({ pesquisa: ev.target.value });

  render() {
    const { pesquisa } = this.state;

    // Dados
    const dados = [
      {
        "Cliente": "Cliente 1",
        "Valor Total": 89.9,
        "Data": moment().toISOString(),
        "Situação": "Aguardando Pagamento",
        "botaoDetalhes": "/pedidos/9D19DKSAD9AKSD"
      },
      {
        "Cliente": "Cliente 2",
        "Valor Total": 105.9,
        "Data": moment().toISOString(),
        "Situação": "Aguardando Pagamento",
        "botaoDetalhes": "/pedidos/9D19DKSAD9AKAE"
      },
      {
        "Cliente": "Cliente 3",
        "Valor Total": 26.72,
        "Data": moment().toISOString(),
        "Situação": "Pagamento Concluído",
        "botaoDetalhes": "/pedidos/9D19DKSAD9AKKO"
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
          />
          <br />
          <Tabela
            cabecalho={['Cliente', 'Valor Total', 'Data', 'Situação']}
            dados={dados}
          />
          <Paginacao />
        </div>
      </div>
    );
  }
}

export default Pedidos;
