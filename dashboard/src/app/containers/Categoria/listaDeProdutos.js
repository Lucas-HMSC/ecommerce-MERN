import React, { Component } from 'react';

import Titulo from '../../components/Texto/Titulo';

import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples.js';

import { connect } from 'react-redux';
import * as actions from '../../actions/categorias';

class ListaDeProdutos extends Component {
  state = {
    atual: 0,
    limit: 5,
  };

  getCategoriaProdutos(props) {
    const { atual, limit } = this.state;
    const { usuario, categoria } = props;

    if (!usuario || !categoria) return null;
    this.props.getCategoriaProdutos(categoria._id, atual, limit, usuario.loja);
  }

  componentDidMount() {
    this.getCategoriaProdutos(this.props);
  }

  componentDidUpdate(prevProps) {
    if (
      (!prevProps.usuario && this.props.usuario) ||
      (!prevProps.categoria && this.props.categoria)
    )
      this.getCategoriaProdutos(this.props);
  }

  changeNumeroAtual = (atual) =>
    this.setState({ atual }, () => this.getCategoriaProdutos(this.props));

  render() {
    const { categoriaProdutos } = this.props;

    const dados = [];
    (categoriaProdutos ? categoriaProdutos.docs : []).forEach((item) => {
      dados.push({
        Produto: item.titulo,
        SKU: item.sku,
        Disponibilidade: item.disponibilidade ? 'Disponível' : 'Indisponível',
        botaoDetalhes: `/produto/${item._id}`,
      });
    });

    return (
      <div className="ListaDeProdutos">
        <br />
        <hr />
        <Titulo tipo="h3" titulo="Produtos da Categoria" />
        <br />
        <Tabela
          cabecalho={['Produto', 'SKU', 'Disponibilidade']}
          dados={dados}
        />
        <Paginacao
          atual={this.state.atual}
          total={
            this.props.categoriaProdutos
              ? this.props.categoriaProdutos.total
              : 0
          }
          limite={this.state.limit}
          onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categoriaProdutos: state.categoria.categoriaProdutos,
  categoria: state.categoria.categoria,
  usuario: state.auth.usuario,
});

export default connect(mapStateToProps, actions)(ListaDeProdutos);
