const express = require('express');
const router = express.Router();

// Example route: GET /auth/login
router.get('/login', (req, res) => {
  res.send('Login page');
});

module.exports = router;