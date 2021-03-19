export const numberPattern = /\d+/g;

export const formatCEP = (value) => {
  const auxCEP = (value || '').match(numberPattern);
  const _cep = (auxCEP || []).join('');
  return _cep.length > 5 ? _cep.slice(0, 5) + '-' + _cep.slice(5, 8) : _cep;
};
