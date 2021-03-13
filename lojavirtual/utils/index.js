export const formatMoney = (value =
  'R$ ' + (value || 0).toFized(2).replace('.', ','));
