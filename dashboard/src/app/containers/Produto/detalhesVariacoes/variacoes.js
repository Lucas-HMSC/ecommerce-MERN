import React, { Component } from 'react';
import Titulo from '../../../components/Texto/Titulo';

class Variacoes extends Component {
  state = {
    variacoes: [
      {
        nome: 'Com Fio',
        id: 'C8J283J38CF',
      },
      {
        nome: 'Wireless',
        id: 'C8J283J38SF',
      },
    ],
  };
  render() {
    const { variacoes } = this.state;
    return (
      <div className="Variacoes flex vertical flex-center">
        <Titulo tipo="h2" titulo="Variações" />
        {variacoes.map((item, idx) => (
          <div className="variacao-item">
            <span>{item.nome}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Variacoes;
