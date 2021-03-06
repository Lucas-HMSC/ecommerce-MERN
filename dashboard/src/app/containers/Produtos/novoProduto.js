import React, { Component } from 'react';
import Titulo from '../../components/Texto/Titulo';
import Button from '../../components/Button/Simples';
import { TextoDados } from '../../components/Texto/Dados';
import InputSelect from '../../components/Inputs/Select';
import InputSimples from '../../components/Inputs/Simples';
import Voltar from '../../components/Links/Voltar';

import { connect } from 'react-redux';
import * as actionsProdutos from '../../actions/produtos';
import * as actionsCategorias from '../../actions/categorias';
import AlertGeral from '../../components/Alert/Geral';

class NovoProduto extends Component {
  state = {
    nome: '',
    descricao: '',
    categoria: '',
    preco: 0,
    promocao: 0,
    sku: '',
    aviso: null,
    erros: {},
  };

  renderCabecalho() {
    const { nome } = this.state;
    return (
      <div className="flex">
        <div className="flex-1 flex vertical">
          <Titulo tipo="h1" titulo={nome || 'Novo Produto'} />
        </div>
        <div className="flex-1 flex flex-end">
          <Button
            type="success"
            label="Salvar"
            onClick={() => this.salvarProduto()}
          />
        </div>
      </div>
    );
  }

  onChangeInput = (field, value) => this.setState({ [field]: value });

  renderDados() {
    const {
      nome,
      descricao,
      categoria,
      preco,
      promocao,
      sku,
      erros,
    } = this.state;
    const { categorias } = this.props;
    return (
      <div className="Dados-Produto">
        <InputSimples
          name="nome"
          label="Nome:"
          value={nome}
          erro={erros.nome}
          onChange={(ev) => this.onChangeInput('nome', ev.target.value)}
        />
        <br />
        <TextoDados
          chave="Categoria"
          valor={
            <InputSelect
              name="categoria"
              onChange={(ev) =>
                this.onChangeInput('categoria', ev.target.value)
              }
              value={categoria}
              opcoes={[
                { label: 'Selecionar...', value: '' },
                ...(categoria || []).map((item) => ({
                  label: item.nome,
                  value: item._id,
                })),
              ]}
            />
          }
        />
        <br />
        <TextoDados
          chave="descricao"
          valor={
            <textarea
              name={'descricao'}
              onChange={(ev) =>
                this.onChangeInput('descricao', ev.target.value)
              }
              value={descricao}
              rows="10"
              style={{ resize: 'none' }}
            />
          }
        />
        <InputSimples
          name="preco"
          label="Preço:"
          type="number"
          value={preco}
          erro={erros.preco}
          onChange={(ev) => this.onChangeInput('preco', ev.target.value)}
        />
        <InputSimples
          name="promocao"
          label="Valor em Promoção:"
          type="number"
          value={promocao}
          erro={erros.promocao}
          onChange={(ev) => this.onChangeInput('promocao', ev.target.value)}
        />
        <InputSimples
          name="sku"
          label="SKU:"
          value={sku}
          erro={erros.sku}
          onChange={(ev) => this.onChangeInput('sku', ev.target.value)}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="Novo-Produto full-width">
        <div className="Card">
          <Voltar history={this.props.history} />
          {this.renderCabecalho()}
          <AlertGeral aviso={this.state.aviso} />
          <br />
          <div className="flex horizontal">
            <div className="flex-1 flex vertical">{this.renderDados()}</div>
            <div className="flex-1 flex vertical"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  produto: state.produto.produto,
  categorias: state.categoria.categorias,
  usuario: state.auth.usuario,
});

export default connect(mapStateToProps, actions)(NovoProduto);
