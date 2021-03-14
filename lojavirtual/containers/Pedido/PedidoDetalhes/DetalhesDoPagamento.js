import React, { Component } from 'react';

import ListaStatus from '../../../components/Listas/Status';

const REGISTROS = [
  {
    data: '08/07/2019',
    situacao: 'Pagamento em Processamento',
  },
  {
    data: '08/07/2019',
    situacao: 'Pagamento Aprovado',
  },
  {
    data: '09/07/2019',
    situacao: 'Pagamento Recebido',
  },
];

class DetalhesDoPagamento extends Component {
  render() {
    return (
      <div className="flex-1">
        <div className="Detalhes-Da-Entreha">
          <h4>Sobre o Pagamento</h4>
          <br />
          <ListaStatus registros={REGISTROS} />
        </div>
      </div>
    );
  }
}

export default DetalhesDoPagamento;
