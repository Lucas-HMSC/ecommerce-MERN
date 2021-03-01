import React, { Component } from 'react';

import Titulo from '../../components/Texto/Titulo';

import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples.js';

import { connect } from 'react-redux';
import * as actions from '../../actions/clientes';

class Clientes extends Component {
  state = {
    pesquisa: '',
    atual: 0,
  };

  onChangePesquisa = (ev) => this.setState({ pesquisa: ev.target.value });

  changeNumeroAtual = (atual) => this.setState({ atual });

  render() {
    const { pesquisa } = this.state;
    const { clientes } = this.props;

    const dados = [];
    (clientes ? clientes.docs : []).forEach((item) => {
      dados.push({
        Cliente: item.nome,
        'E-mail': item.usuario ? item.usuario.email : '',
        Telefone: item.telefones[0],
        CPF: item.cpf,
        botaoDetalhes: `/cliente/${item._id}`,
      });
    });

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

const mapStateToProps = (state) => ({
  clientes: state.cliente.clientes,
  usuario: state.auth.usuario,
});

export default connect(mapStateToProps, actions)(Clientes);
