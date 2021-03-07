import React, { Component } from 'react';

import Titulo from '../../../components/Texto/Titulo';
import ButtonSimples from '../../../components/Button/Simples';
import { TextoDados } from '../../../components/Texto/Dados';
import InputSimples from '../../../components/Inputs/Simples';
import InputSelect from '../../../components/Inputs/Select';

import AlertGeral from '../../../components/Alert/Geral';

import { connect } from 'react-redux';
import * as actions from '../../../actions/variacoes';

class NovaVariacao extends Component {
  renderCabecalho() {
    const { nome } = this.state;
    return (
      <div className="flex horizontal">
        <div className="flex-1">
          <Titulo
            tipo="h3"
            titulo={nome ? 'Variação - ' + nome : 'Nova Variação'}
          />
        </div>
        <div className="flex-1 flex flex-end">
          <ButtonSimples
            type="success"
            onClick={() => this.salvarVariacao()}
            label="Salvar"
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="Nova-Variacao">
        {this.renderCabecalho()}
        <AlertGeral aviso={this.state.aviso} />
        <br />
        <div className="flex horizontal">
          <div className="flex-3 ">{this.renderDadosCadastrais}</div>
          <div className="flex-1"></div>
          <div className="flex-3">{this.renderDadossEnvio()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  produto: state.produto.produto,
  usuario: state.auth.usuario,
});

export default connect(mapStateToProps, actions)(NovaVariacao);
