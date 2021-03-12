import React, { Component } from 'react';

import Produtos from '../../../components/Listas/Produtos';

const PRODUTOS = [
  {
    id: 192391231,
    fotos: ['/static/img/mouse-1.png'],
    titulo: 'Mouse Gamer 1',
    preco: 35,
    promocao: 25,
  },
  {
    id: 192391234,
    fotos: ['/static/img/mouse-4.png'],
    titulo: 'Mouse Gamer 2',
    preco: 55,
    promocao: 45,
  },
  {
    id: 192391235,
    fotos: ['/static/img/mouse-5.png'],
    titulo: 'Mouse Gamer 3',
    preco: 105,
    promocao: 95,
  },
  {
    id: 192391232,
    fotos: ['/static/img/mouse-2.png'],
    titulo: 'Mouse Gamer 4',
    preco: 160,
    promocao: 150,
  },
];

class ProdutosPaginaInicial extends Component {
  render() {
    return (
      <div className="container Produtos-Pagina-Inicial flex vertical">
        <h2>Lançamentos</h2>
        <br />
        <Produtos produtos={PRODUTOS} itensPorLinha={4} />
      </div>
    );
  }
}

export default ProdutosPaginaInicial;
