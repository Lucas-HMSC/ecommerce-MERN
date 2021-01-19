const mongoose = require('mongoose'),
  mongoosePaginate = require('mongoose-paginate'),
  Schema = mongoose.Schema;

const PagamentoSchema = Schema(
  {
    valor: {
      type: Number,
      required: true,
    },
    forma: {
      type: String,
      required: true,
    },
    parcelado: {
      type: Object,
    },
    status: {
      type: String,
      required: true,
    },
    pedido: {
      type: Schema.Types.ObjectId,
      ref: 'Pedido',
      required: true,
    },
    loja: {
      type: Schema.Types.ObjectId,
      ref: 'Loja',
      required: true,
    },
    payload: {
      type: Object,
    },
  },
  { timestamps: true },
);

PagamentoSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Pagamento', PagamentoSchema);
