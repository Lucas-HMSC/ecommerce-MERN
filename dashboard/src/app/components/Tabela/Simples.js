import React from 'react';

const TabelaSimples = ({ cabecalho, dados }) => (
  <div className="TabelaSimples">
    <table className="simples">
      <thead>
        <tr>
          {cabecalho.map((item, idx) => (
            <th key={idx}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dados.map((linha, idx) => (
          <tr key={idx}>
            {Object.keys(cabecalho).map((item, index) => (
              <td key={index}>{linha[item] || ''}</td>
            ))}
            {linha['botaoDetalhes'] && (
              <td>
                <Link to={linha['botaoDetalhes']}>
                  <button>DETALHES</button>
                </Link>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TabelaSimples;
