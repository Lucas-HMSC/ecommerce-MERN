import React, { Component } from 'react';

import Titulo from '../../components/Texto/Titulo';

import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples.js';

class Categorias extends Component {
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
        'Categoria': 'Acessórios',
        'Qtd. de Produtos': 15,
        'botaoDetalhes': '/categoria/acessorios'
      },
      {
        'Categoria': 'Computadores',
        'Qtd. de Produtos': 5,
        'botaoDetalhes': '/categoria/computadores'
      },
      {
        'Categoria': 'Fones de Ouvido',
        'Qtd. de Produtos': 7,
        'botaoDetalhes': '/categoria/fones'
      },
      {
        'Categoria': 'Gabinetes',
        'Qtd. de Produtos': 3,
        'botaoDetalhes': '/categoria/gabinetes'
      },
      {
        'Categoria': 'Processadores',
        'Qtd. de Produtos': 8,
        'botaoDetalhes': '/categoria/processadores'
      },
    ];

    return (
      <div className="Categorias full-width">
        <div className="Card">
          <Titulo tipo="h1" titulo="Categorias" />
          <br />
          <Pesquisa
            valor={pesquisa}
            placeholder={'Pesquise aqui pelo nome da categoria...'}
            onChange={(ev) => this.onChangePesquisa(ev)}
            onClick={() => alert('Pesquisar')}
          />
          <br />
          <Tabela
            cabecalho={['Categoria', 'Qtd. de Produtos']}
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

export default Categorias;
