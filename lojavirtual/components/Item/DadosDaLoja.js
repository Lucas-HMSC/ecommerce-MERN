import React from 'react';

const DadosDaLoja = () => (
  <div className="flex-1 dados-da-loja">
    <div>
      <h2>Entre em Contato</h2>
      <br />
    </div>
    <p className="loja-nome">Nome: Loja TI</p>
    <p className="loja-cnpj">CNPJ: 12.345.678/0001-05</p>
    <p className="loja-email">
      E-mail:{' '}
      <a href="mailto:lucashms.carvalho@gmail.com">
        lucashms.carvalho@gmail.com
      </a>
    </p>
    <p className="loja-telefones">Telefones:</p>
    <p className="loja-telefone">
      &nbsp;&nbsp;<a href="phone:(12) 1234-5678">(12) 1234-5678</a>
    </p>
    <p className="loja-telefone">
      &nbsp;&nbsp;<a href="phone:(12) 1234-5678">(12) 1234-5678</a>
    </p>
    <p className="loja-telefone">
      &nbsp;&nbsp;<a href="phone:(12) 1234-5678">(12) 1234-5678</a>
    </p>
    <p className="loja-endereco">Rua Teste, 123 - Bairro Centro</p>
    <p className="loja-cidade">São Paulo/SP - 12123-456</p>
  </div>
);

export default DadosDaLoja;
