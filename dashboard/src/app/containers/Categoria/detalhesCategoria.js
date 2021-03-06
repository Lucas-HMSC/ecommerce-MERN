import React, { Component } from 'react';

import Titulo from '../../components/Texto/Titulo';
import ButtonSimples from '../../components/Button/Simples';
import { TextoDados } from '../../components/Texto/Dados';
import InputValor from '../../components/Inputs/InputValor';
import InputSelect from '../../components/Inputs/Select';
import Voltar from '../../components/Links/Voltar';

import { connect } from 'react-redux';
import AlertGeral from '../../components/Alert/Geral';
import * as actions from '../../actions/categorias';

class DetalhesCategoria extends Component {
  generateStateCategoria = (props) => ({
    nome: props.categoria ? props.categoria.nome : '',
    disponibilidade: props.categoria
      ? props.categoria.disponibilidade ||
        props.categoria.disponibilidade === undefined
        ? 'disponivel'
        : 'indisponivel'
      : '',
    codigo: props.categoria ? props.categoria.codigo : '',
  });

  constructor(props) {
    super();
    this.state = {
      ...this.generateStateCategoria(props),
      erros: {},
      aviso: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (
      (!prevProps.categoria && this.props.categoria) ||
      (prevProps.categoria &&
        this.props.categoria &&
        prevProps.categoria.updatedAt !== this.props.categoria.updatedAt)
    )
      this.setState(this.generateStateCategoria(this.props));
  }

  salvarCategoria() {
    const { usuario, categoria } = this.props;
    if (!usuario || !categoria) return null;

    this.props.updateCategoria(
      this.state,
      categoria._id,
      usuario.loja,
      (error) => {
        this.setState({
          aviso: {
            status: !error,
            msg: error ? error.message : 'Categoria atualizada com sucesso',
          },
        });
      },
    );
  }

  removerCategoria() {
    const { usuario, categoria } = this.props;
    if (!usuario || !categoria) return null;

    if (!window.confirm('Você realmente deseja remover essa categoria?'))
      return;

    this.props.updateCategoria(
      this.state,
      categoria._id,
      usuario.loja,
      (error) => {
        this.setState({
          aviso: {
            status: !error,
            msg: error ? error.message : 'Categoria atualizada com sucesso',
          },
        });
      },
    );
  }

  renderCabecalho() {
    const { nome } = this.state;
    return (
      <div className="flex">
        <div className="flex-1 flex">
          <Titulo tipo="h1" titulo={nome} />
        </div>
        <div className="flex-1 flex flex-end">
          <ButtonSimples
            onClick={() => alert('Salvo!')}
            type="success"
            label="Salvar"
          />
          <ButtonSimples
            onClick={() => alert('Removido!')}
            type="danger"
            label="Remover"
          />
        </div>
      </div>
    );
  }

  renderDados() {
    const { nome, disponibilidade, codigo } = this.state;
    return (
      <div>
        <TextoDados
          chave="Código"
          valor={
            <InputValor
              name="codigo"
              noStyle
              value={codigo}
              handleSubmit={(valor) => this.setState({ codigo: valor })}
            />
          }
        />
        <TextoDados
          chave="Nome"
          valor={
            <InputValor
              name="nome"
              noStyle
              value={nome}
              handleSubmit={(valor) => this.setState({ nome: valor })}
            />
          }
        />
        <br />

        <TextoDados
          chave="Disponibilidade"
          valor={
            <InputSelect
              name="disponibilidade"
              onChange={(ev) =>
                this.setState({ disponibilidade: ev.target.value })
              }
              value={disponibilidade}
              opcoes={[
                { label: 'Disponível', value: 'disponivel' },
                { label: 'Indisponível', value: 'indisponivel' },
              ]}
            />
          }
        />
      </div>
    );
  }

  render() {
    return (
      <div className="Detalhes-Categoria">
        <Voltar history={this.props.history} />
        <AlertGeral aviso={this.state.aviso} />
        {this.renderCabecalho()}
        {this.renderDados()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categoria: state.categoria.categoria,
  usuario: state.auth.usuario,
});

export default connect(mapStateToProps, actions)(DetalhesCategoria);
