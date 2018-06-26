const express = require('express')

module.exports = function(server){

  //API Routes
  const router = express.Router()
  server.use('/api', router)

  // rotas de API carros
  const billingCycleService = require('../api/billingcycle/billingcycleServer')
  billingCycleService.register(router,'/billingCycles')
  // rotas de API de clientes
  const clientCycleService = require('../api/clientcycle/clientcycleServer')
  billingCycleService.register(router,'/clientCycles')
// Error persiste aqui !!!
  const billingSummaryService = require('../api/billingSummary/billingSummaryService')
  router.route('/billingSummary').get(billingSummaryService.getSummary)
}
