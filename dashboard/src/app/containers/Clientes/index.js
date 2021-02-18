import React, { Component } from 'react';

import Titulo from '../../components/Texto/Titulo';

import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples.js';

class Clientes extends Component {
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
        'E-mail': 'cliente1@hotmail.com',
        'Telefone': '11 1234-5678',
        'CPF': '111.222.333-45',
        'botaoDetalhes': '/cliente/cliente1@hotmail.com',
      },
      {
        'Cliente': 'Cliente 2',
        'E-mail': 'cliente2@hotmail.com',
        'Telefone': '11 1234-5678',
        'CPF': '111.222.333-45',
        'botaoDetalhes': '/cliente/cliente2@hotmail.com',
      },
      {
        'Cliente': 'Cliente 3',
        'E-mail': 'cliente3@hotmail.com',
        'Telefone': '11 1234-5678',
        'CPF': '111.222.333-45',
        'botaoDetalhes': '/cliente/cliente3@hotmail.com',
      },
      {
        'Cliente': 'Cliente 4',
        'E-mail': 'cliente4@hotmail.com',
        'Telefone': '11 1234-5678',
        'CPF': '111.222.333-45',
        'botaoDetalhes': '/cliente/cliente4@hotmail.com',
      },
    ];

    return (
      <div className="Clientes full-width">
        <div className="Card">
          <Titulo tipo="h1" titulo="Clientes" />
          <br />
          <Pesquisa
            valor={pesquisa}
            placeholder={'Pesquise aqui pelo nome do cliente...'}
            onChange={(ev) => this.onChangePesquisa(ev)}
            onClick={() => alert('Pesquisar')}
          />
          <br />
          <Tabela
            cabecalho={['Cliente', 'E-mail', 'Telefone', 'CPF']}
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

export default Clientes;
