import React, { Component } from 'react';
import Link from 'next/link';

class MenuAreaDoCliente extends Component {
  renderCabecalho() {
    return (
      <div>
        <h3>
          Oi, Lucas!
          <br /> Seja bem-vindo à Área do Cliente.
        </h3>
        <p>
          Por aqui você pode acompanhar seus pedidos e também alterar seus dados
          de acesso e senha.
        </p>
      </div>
    );
  }

  renderMenu() {
    return (
      <div className="menu-lateral">
        <Link href="/area-cliente">
          <div className="menu-lateral-item">
            <span>MEUS PEDIDOS</span>
          </div>
        </Link>
        <Link href="/area-cliente/dados">
          <div className="menu-lateral-item">
            <span>MEUS DADOS</span>
          </div>
        </Link>
        <Link href="/area-cliente/alterar-senha">
          <div className="menu-lateral-item">
            <span>ALTERAR SENHA</span>
          </div>
        </Link>
        <div className="menu-lateral-item" onClick={() => alert('Logout!')}>
          <span>SAIR</span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="flex-1 flex vertical">
        {this.renderCabecalho()}
        {this.renderMenu()}
      </div>
    );
  }
}

export default MenuAreaDoCliente;
