const _ = require('lodash')
const ClientCycle = require('./clientcycle')

ClientCycle.methods(['get', 'post','put', 'delete'])
ClientCycle.updateOptions({new: true, runValidators:true})

ClientCycle.after('post', sendErrorOrNext).after('put', sendErrorOrNext)

function sendErrorOrNext(req, res, next) {
  const bundle = res.locals.bundle

  if(bundle.errors) {
    var errors = parserErrors(bundle.errors)
    res.status(500).json({errors})
  } else {
    next()
  }
}

function parserErrors(nodeRestfulErrors){
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}
ClientCycle.route('count', function(req, res, next) {
  ClientCycle.count(function(error, value){
    if(error){
      res.status(500).json({errors: [error]})
    }else {
      res.json({value})
    }
  })
})

module.exports = ClientCycle
