const express = require('express');
const router = express.Router();

// Example route: GET /user/profile
router.get('/profile', (req, res) => {
  res.send('User profile page');
});

module.exports = router;