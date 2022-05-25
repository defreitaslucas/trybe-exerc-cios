const express = require('express');
const routes = express.Router();

routes.post('/', (req, res) => {
  res.status(201).json({message: "Dados inseridos com sucesso!"});
}) 

module.exports = routes;