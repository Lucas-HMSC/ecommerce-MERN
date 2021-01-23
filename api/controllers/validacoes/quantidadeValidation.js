const mongoose = require('mongoose');

const Variacao = mongoose.model('Variacao');

const validarQuantidadeDisponivel = async (_carrinho) => {
  let todosTemQuantidadeDisponivel = true;
  try {
    const carrinho = await Promise.all(
      _carrinho.map(async (item) => {
        item.variacao = await Variacao.findById(
          item.variacao._id || item.variacao,
        );
        return item;
      }),
    );

    carrinho.forEach((item) => {
      if (
        !item.variacao.quantidade ||
        item.variacao.quantidade < item.quantidade
      ) {
        todosTemQuantidadeDisponivel = false;
      }
    });

    return todosTemQuantidadeDisponivel;
  } catch (e) {
    console.warn(e);
    return false;
  }
};

module.exports = {
  validarQuantidadeDisponivel,
};
