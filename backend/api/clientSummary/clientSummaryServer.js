const _ = require('lodash')
const ClientCycle = require ('../clientcycle/clientcycle')

function getSummary(req, res){
  ClientCycle.aggregate({
    $project: {}
  })
}
