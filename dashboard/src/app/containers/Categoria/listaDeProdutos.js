import React, { Component } from 'react';

import Titulo from '../../components/Texto/Titulo';

import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples.js';

class ListaDeProdutos extends Component {
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
        'Produto': 'Mouse 1',
        'Estoque': 20,
        'Disponibilidade': 'sim',
        'botaoDetalhes': '/produto/9F2J39FKEW91'
      },
      {
        'Produto': 'Mouse 2',
        'Estoque': 20,
        'Disponibilidade': 'não',
        'botaoDetalhes': '/produto/9F2J39FKEW92'
      },
      {
        'Produto': 'Mouse 3',
        'Estoque': 20,
        'Disponibilidade': 'não',
        'botaoDetalhes': '/produto/9F2J39FKEW93'
      },
      {
        'Produto': 'Mouse 4',
        'Estoque': 20,
        'Disponibilidade': 'sim',
        'botaoDetalhes': '/produto/9F2J39FKEW94'
      },
      {
        'Produto': 'Mouse 5',
        'Estoque': 20,
        'Disponibilidade': 'sim',
        'botaoDetalhes': '/produto/9F2J39FKEW95'
      },
    ];

    return (
      <div className="ListaDeProdutos">
        <br/>
        <hr/>
        <Titulo tipo="h3" titulo="Produtos da Categoria" />
        <br />
        <Pesquisa
          valor={pesquisa}
          placeholder={'Pesquise aqui pelo nome do produto ou descrição...'}
          onChange={(ev) => this.onChangePesquisa(ev)}
          onClick={() => alert('Pesquisar')}
        />
        <br />
        <Tabela
          cabecalho={['Produto', 'Estoque', 'Disponibilidade']}
          dados={dados}
        />
        <Paginacao
          atual={this.state.atual}
          total={120}
          limite={20}
          onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)}
        />
      </div>
    );
  }
}

export default ListaDeProdutos;
