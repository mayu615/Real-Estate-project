import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  console.log("New contact form submission:");
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
  res.redirect('/thank-you.html');
});

export default router;
