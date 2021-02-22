import React from 'react';

export default ({ value, name, opcoes, onChange }) => (
  <div className="flex vertical">
    <select value={value} name={name} onChange={onChange}>
      {opcoes.map((opcao, idx) => (
        <option key={opcao.value} value={opcao.value}>
          {opcao.label}
        </option>
      ))}
    </select>
  </div>
);
