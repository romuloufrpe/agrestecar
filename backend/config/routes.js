const express = require('express')

module.exports = function(server){

  //API Routes
  const router = express.Router()
  server.use('/api', router)

  // rotas de API
  const billingCycleService = require('../api/billingcycle/billingcycleServer')
  billingCycleService.register(router,'/billingCycles')
}
