import React, { Component } from 'react';

import Titulo from '../../../components/Texto/Titulo';
import ButtonSimples from '../../../components/Button/Simples';
import { TextoDados } from '../../../components/Texto/Dados';
import InputValor from '../../../components/Inputs/InputValor';
import InputSelect from '../../../components/Inputs/Select';

class OpcaoVariacao extends Component {
  state = {
    nome: 'P',
    disponibilidade: 'disponivel',
    preco: 30,
    promocao: 25,
    quantidade: 200,
    peso: 0.75,
    largura: 3,
    altura: 5,
    comprimento: 17,
    imagens: [
      'https://dummyimage.com/100x100/99ff00/000222.jpg',
      'https://dummyimage.com/100x100/99ff00/000222.jpg',
      'https://dummyimage.com/100x100/99ff00/000222.jpg',
      'https://dummyimage.com/100x100/99ff00/000222.jpg',
      'https://dummyimage.com/100x100/99ff00/000222.jpg',
      'https://dummyimage.com/100x100/99ff00/000222.jpg',
    ],
  };

  renderCabecalho() {
    const { nome } = this.state;
    return (
      <div className="flex horizontal">
        <div className="flex-1">
          <Titulo tipo="h3" titulo={'Variação - ' + nome} />
        </div>
        <div className="flex-1 flex flex-end">
          <ButtonSimples
            type="success"
            onClick={() => alert('Salvo!')}
            label={'Salvar'}
          />
        </div>
      </div>
    );
  }

  renderDadosCadastrais() {
    const {
      nome,
      disponibilidade,
      preco,
      promocao,
      quantidade,
      peso,
    } = this.state;
    return (
      <div className="Dados-Produto">
        <TextoDados
          chave="Nome"
          valor={
            <InputValor
              value={nome}
              noStyle
              name="nome"
              onChange={(ev) => this.setState({ nome: ev.target.value })}
            />
          }
        />
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
        <TextoDados
          chave="Preço Padrão"
          valor={
            <InputValor
              value={preco}
              noStyle
              name="preco"
              type="number"
              onChange={(ev) =>
                this.setState({ preco: Number(ev.target.value) })
              }
            />
          }
        />
        <TextoDados
          chave="Preço Promocional"
          valor={
            <InputValor
              value={promocao}
              noStyle
              name="promocao"
              type="number"
              onChange={(ev) =>
                this.setState({ promocao: Number(ev.target.value) })
              }
            />
          }
        />
        <TextoDados
          chave="Quantidade"
          valor={
            <InputValor
              value={quantidade}
              noStyle
              name="quantidade"
              onChange={(ev) => this.setState({ quantidade: ev.target.value })}
            />
          }
        />
      </div>
    );
  }

  renderDadosEnvio() {
    return <div></div>;
  }

  renderImagens() {
    return <div></div>;
  }

  render() {
    return (
      <div className="Opcao-variacao">
        {this.renderCabecalho()}
        <br />
        <div className="flex horizontal">
          <div className="flex-1">{this.renderDadosCadastrais()}</div>
          <div className="flex-1">{this.renderDadosEnvio()}</div>
          <div className="flex-1">{this.renderImagens()}</div>
        </div>
      </div>
    );
  }
}

export default OpcaoVariacao;
