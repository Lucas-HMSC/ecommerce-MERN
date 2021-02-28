import React from 'react';

const AlertGeral = ({ aviso }) => {
  if (!aviso) return null;
  const { status, msg } = aviso;
  return (
    <div className={`alert alert-${status ? 'succss' : 'danger'}`}>
      <span>{msg}</span>
    </div>
  );
};

export default AlertGeral;
