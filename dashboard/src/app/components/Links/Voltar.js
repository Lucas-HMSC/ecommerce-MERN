import React from 'react';
import { Link } from 'react-router-dom';

const Voltar = ({ path }) => (
  <Link className="Link-Voltar" to={path}>
    {'< Voltar'}
  </Link>
);

export default Voltar;
