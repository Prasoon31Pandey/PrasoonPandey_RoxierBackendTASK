const express = require('express');
const router = express.Router();
const {
  initializeDatabase,
  listTransactions,
  getStatistics,
} = require('../controllers/transactionController');

// Define routes
router.get('/initialize-db', initializeDatabase);
router.get('/transactions', listTransactions);
router.get('/statistics/:month', getStatistics);

module.exports = router;
