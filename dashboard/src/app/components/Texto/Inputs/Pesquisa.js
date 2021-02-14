import React from 'react';

const Pesquisa = ({ valor, onChange, placeholder }) => (
  <div className="Pesquisa">
    <input value={valor} onChange={onChange} placeholder={placeholder} />
  </div>
);

export default Pesquisa;
