import React from 'react';
import Link from 'next/link';

const LogoCabecalho = () => (
  <div className="flex-2 flex-center">
    <Link href="/">
      <img src="/static/logo.png" alt="Logo" className="logo" width="90%" />
    </Link>
  </div>
);

export default LogoCabecalho;
