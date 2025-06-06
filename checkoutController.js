exports.stripeCheckout = async (req, res) => { res.json({id: "stripe_session_id"}); };
exports.paypalCheckout = async (req, res) => { res.json({id: "paypal_session_id"}); };
