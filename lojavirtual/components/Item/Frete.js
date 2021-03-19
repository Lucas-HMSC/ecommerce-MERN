import React, { Component } from 'react';

import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { getCart } from '../../utils/cart';
import { formatMoney, codigosCorreios } from '../../utils';
import { formatCEP } from '../../utils/format';

class Frete extends Component {
  constructor(props) {
    super();
    this.state = {
      cep: this.props.cep || '',
    };
  }

  componentDidUpdate(prevProps) {
    if (
      !prevProps.fretes &&
      this.props.fretes &&
      !this.props.freteSelecionado
    ) {
      this.props.selecionarFrete(this.props.fretes[0]);
    }
  }

  renderOpcoesFrete() {
    return (
      <div>
        <select defaultValue="PAC">
          <option value="PAC">PAC (15 dias úteis) - R$ 18,90</option>
          <option value="SEDEX">SEDEX (3 dias úteis) - R$ 38,90</option>
        </select>
      </div>
    );
  }

  renderOpcaoSelecionada() {
    return (
      <div className="flex vertical flex-center">
        <h4 className="valor-frete">R$ 19,80</h4>
        <span className="limpar-CEP">Limpar CEP</span>
      </div>
    );
  }

  calcularFrete() {
    const { cep } = this.state;
    if (!cep || cep.length !== 9) return alert('Digite o CEP corretamente.');
    this.props.calcularFrete(cep, getCart());
  }

  onChangeCEP = (e) => {
    this.setState({
      cep: formatCEP(e.target.value),
    });
  };

  renderFormularioCEP() {
    return (
      <div className="flex-1 flex">
        <div className="flex-3">
          <input
            className="campo-frete"
            value={this.state.cep}
            name="CEP"
            onChange={this.onChangeCEP}
          />
        </div>
        <div className="flex-1">
          <button
            className="btn btn-primary btn-small"
            onClick={() => this.calcularFrete()}
          >
            CALCULAR
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="dados-do-carrinho-item flex">
        <div className="flex-1 flex vertical">
          <p className="headline">Frete</p>
          {this.props.freteSelecionado && this.renderOpcoesFrete()}
        </div>
        <div className="flex-1 flex flex-center">
          {this.props.freteSelecionado
            ? this.renderOpcaoSelecionada()
            : this.renderFormularioCEP()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  carrinho: state.carrinho.carrinho,
  freteSelecionado: state.carrinho.freteSelecionado,
  fretes: state.carrinho.fretes,
  cep: state.carrinhi.cep,
});

export default connect(mapStateToProps, actions)(Frete);
