const restful = require('node-restful')
const mongoose = restful.mongoose
//Carros disponiveis
const creditSchema = new mongoose.Schema({
  //name
  model: { type: String, required: true},
  //valor
  value: {type: Number, min: 0, required: [true, 'Informe o valor do crédito!']}
})
//Carros não disponiveis
const debtSchema = new mongoose.Schema({
  model: {type: String, required: true},
  value: {type: Number, min: 0,required: [true, 'Informe o valor do débito!']},
  status: {type: String, required: false, uppercase: true,
    //PAGO, PENDENTE, AGENDADO
  enum: ['VENDIDO', 'DISPONIVEL', 'AGENDADO']}
})

const billingCycleShema = new mongoose.Schema({
  //name
  brand: { type: String, required: true},
  //modelo
  model: {type: String, required: true},
  //ano
  year: {type: Number, min: 1970, max: 2100, required: true},
  //valor
  value: {type: Number, min: 0, required: true},
  credits: [creditSchema],
  debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleShema)
