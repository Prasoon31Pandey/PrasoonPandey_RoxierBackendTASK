const axios = require('axios');

axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json')
  .then(response => {
    console.log('Data fetched:', response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error.response ? error.response.data : error.message);
  });
