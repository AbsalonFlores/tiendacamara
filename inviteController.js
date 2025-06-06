const { sendInvitationEmail } = require('../utils/sendgrid');
exports.sendInvitation = async (req, res) => {
  const { email, producto } = req.body;
  await sendInvitationEmail(email, producto);
  res.json({ ok: true });
};
