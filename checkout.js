const express = require('express');
const router = express.Router();
const { stripeCheckout, paypalCheckout } = require('../controllers/checkoutController');

router.post('/stripe', stripeCheckout);
router.post('/paypal', paypalCheckout);

module.exports = router;
