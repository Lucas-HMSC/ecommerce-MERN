import React from 'react';
import { Link } from 'react-router-dom';

const BarraTopo = ({ handleLogout }) => (
  <div className="Barra-Topo flex horizontal full-width">
    <div className="flex-1 flex flex-start">
      <a href="/">Ver Loja</a>
    </div>
    <div className="flex-1 flex flex-end">
      <a href="#" onClick={() => handleLogout()}>
        Sair
      </a>
    </div>
  </div>
);

export default BarraTopo;
