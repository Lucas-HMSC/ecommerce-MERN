module.exports = {
  secret:
    process.env.NODE_ENV === 'production'
      ? process.env.SECRET
      : 'DFNMVC785TY5TYHF7654TYEAJ87RYNQ4W785YR4WE7N7RH3478',
  api:
    process.env.NODE_ENV === 'production'
      ? 'https://api.loja-teste.ampliee.com'
      : 'http://localhost:3000',
  loja:
    process.env.NODE_ENV === 'production'
      ? 'https://loja-teste.ampliee.com'
      : 'http://localhost:8000',
};
