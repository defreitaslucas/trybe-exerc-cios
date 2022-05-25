const name = (req, res, next) => {
  const {productName} = req.body;
  if(!productName) res.status(400).json({error: "O campo productName é obrigatório"})
  if(productName.length <= 4) res.status(400).json({error: "productName deve ter pelo menos 4 caracteres"})
  next();
}

const infos = (req, res, next) => {
  const {infos} = req.body;
  if(!Object.keys(infos).length) res.status(401).json({message: "O campo infos é obrigatório"})
  if(!Object.keys(infos).length === 2) res.status(401).json({message: "O campo infos é obrigatório"})
  //validar data
  if(!infos.saleDate) res.status(400).json({message: "O campo saleDate é obrigatório"})

  if(!infos.warramtyPeriod) res.status(400).json({message: { "message": "O campo warrantyPeriod é obrigatório"}});

  if(infos.warramtyPeriod < 1 || infos.warramtyPeriodty > 3) res.status(400).json({message: {"message": "O campo warrantyPeriod precisa estar entre 1 e 3"}});
  
  res.status(201).json({message: { "message": "Venda cadastrada com sucesso" }});
}

module.exports = {name};
