import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/properties', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/properties.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/contact.html'));
});

app.get('/thank-you', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/thank-you.html'));
});

// Handle Contact Form Submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  const timestamp = new Date().toLocaleString();

  console.log(`\n[${timestamp}] New contact form submission:`);
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}\n`);

  // Redirect to Thank You page
  res.redirect('/thank-you');
});


// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running → http://localhost:${PORT}`);
});
