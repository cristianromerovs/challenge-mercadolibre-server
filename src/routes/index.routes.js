const express = require('express')
const router = express.Router();
const controller = require('../controllers/index.controller')
const userController = require('../controllers/user.controller')
const levelController = require('../controllers/level.controller')
const shipmentController = require('../controllers/shipment.controller')
const paymentController = require('../controllers/payment.controller')

router.get('/', controller.index)
router.get('/user/', userController.getUser)
router.get('/user/:id/restrictions', userController.getUserRestrictions)
router.get('/user/:id/purchases', userController.getUserPurchases)
router.get('/level', levelController.getLevel)
router.get('/shipment/:id', shipmentController.getShipment)
router.get('/payment/:id', paymentController.getPayment)

router.get('*', (req, res) => {
    res.status(404).send('Ruta no encontrada');
})

module.exports = router;