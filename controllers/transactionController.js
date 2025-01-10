const axios = require('axios');
const Transaction = require('../models/transaction');

// Function to initialize the database
const initializeDatabase = async (req, res) => {
  try {
    const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    const transactions = response.data;

    // Insert data into MongoDB
    await Transaction.insertMany(transactions);
    res.status(200).json({ message: 'Database initialized successfully' });
  } catch (error) {
    console.error('Error initializing database:', error.message);
    res.status(500).json({ error: 'Error initializing database' });
  }
};

// Other functions like listTransactions, getStatistics, etc.
const listTransactions = async (req, res) => {
  // Implementation for listing transactions
};

const getStatistics = async (req, res) => {
  // Implementation for getting statistics
};

// Exporting the functions
module.exports = { initializeDatabase, listTransactions, getStatistics };
