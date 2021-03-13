import React, { Component } from 'react';

const PHOTOS = [
  '/static/img/mouse-1.png',
  '/static/img/mouse-4.png',
  '/static/img/mouse-5.png',
];

export default class Hero extends Component {
  state = {
    foto: PHOTOS[0],
  };

  renderPhotos() {
    return (
      <div className="fotos flex-2 flex vertical">
        <div className="foto-principal flex-6 flex flex-center">
          <img src={this.state.foto} width="95%" alt="" />
        </div>
        <div className="mini-fotos flex-1 flex">
          {PHOTOS.map((foto, index) => (
            <div
              className={index}
              className="mini-foto flex-1 flex flex-center"
              onClick={() => this.setState({ foto })}
            >
              <img src={foto} width="90%" alt="" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  renderVariacoes() {
    return (
      <div>
        <div>
          <label>Selecione uma opção:</label>
        </div>
        <div className="variacoes flex wrap">
          <div className="variacao flex-1 flex flex-center wrap-4">
            <span className="variacao-item">P</span>
          </div>
          <div className="variacao flex-1 flex flex-center wrap-4">
            <span className="variacao-item">M</span>
          </div>
          <div className="variacao flex-1 flex flex-center wrap-4">
            <span className="variacao-item">G</span>
          </div>
        </div>
      </div>
    );
  }

  addCart() {
    alert('Adicionado ao carrinho');
  }

  renderDetalhes() {
    return (
      <div className="flex-2 produto-detalhes">
        <div className="titulo">
          <h2>Mouse Gamer 2</h2>
        </div>
        <div className="categoria">
          <p>Categoria:&nbsp;Mouse Gamer</p>
        </div>
        <br />
        <div className="precos">
          <h2 className="preco-original preco-por">R$ 55,00</h2>
          <h2 className="preco-promocao preco-por">R$ 45,00</h2>
          <h4 className="preco-parcelado preco-por">
            ou em 6x de R$ 7,50 sem juros
          </h4>
        </div>
        <br />
        {this.renderVariacoes()}
        <div className="opcoes">
          <div className="opcao">
            <label className="opcao-tab">Quantidade</label>
            <input
              className="opcao-input"
              type="nuber"
              name="quantidade"
              defaultValue={1}
            />
          </div>
        </div>
        <div className="comprar">
          <button
            className="btn btn-success btn-cta"
            onClick={() => this.addCart()}
          >
            COMPRAR
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="flex horizontal">
        {this.renderPhotos()}
        {this.renderDetalhes()}
      </div>
    );
  }
}
