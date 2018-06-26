const restful = require('node-restful')
const mongoose = restful.mongoose

//Clientes cadastrados
const clientSchema = new mongoose.Schema({
  //nome
  name: {type: String, required: true},
  //CPF
  cpf: {type: Number, required: true},
  //cidade
  city: {type: String, required:false},
  //estado
  state: {type: String, required: false},
  //celular
  cellphone: {type: String, required: false}
})

const clientCycleSchema = new mongoose.Schema({
  //nome
  name: {type: String, required: true},
  //cpf
  cpf: {type: Number, required: true},
  //RG
  rg: {type: Number, required: true},
  //endereço
  addres: {type: String, required: false},
  //number
  number: {type: Number, required: false},
  //cidade
  city: {type: String, required: false},
  //estado
  state: {type: String, required:false},
  //telefone
  telephone: {type: Number, required: false},
  //celular
  cellphone: {type: Number, required: false},

  clients: [clientSchema]

})

module.exports = restful.model('ClientCycle', clientCycleSchema)
