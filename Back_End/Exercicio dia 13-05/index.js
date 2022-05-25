const express = require('express');
const cors = require('cors');
const app = express();
const middlewares = require('./middlewares/index');

app.use(cors());

app.use(express.json());

const sales = require('./routes/sales');
app.use('/sales', middlewares.validate.name, sales)

app.listen(3001, () => {
  console.log('rodando');
});