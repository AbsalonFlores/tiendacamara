const express = require('express');
const router = express.Router();
const { sendInvitation } = require('../controllers/inviteController');
router.post('/', sendInvitation);
module.exports = router;
