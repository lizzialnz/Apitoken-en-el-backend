/**este archivo se llamará en las rutas que necesiten ser autorizadas con apitoken para poder funcionar conseguridad
este archivo va en el back*/
const authorizer = (req, res, next)=>{
  const clientApiKey = req.headers.apikey || '';
  const appApiKey = (process.env.APP_API_KEY).split('|');
  if (appApiKey.includes(clientApiKey)) {
    return next();
  }
  console.error("authorizer: Invalid 'API TOKEN'", req.headers);
  res.status(401).json({"error":"Client request not authorized."});
}

module.exports.authorizer = authorizer;


/**esta lina de codigo va en otro archivo de rutas en el back-end lo usare solo para demostrar como se emplearia el archivo authorizer.js de arriba*/
const express = require('express');
const router = express.Router();

const { authorizer } = require('./middlewares/authorizer'); 

const securityRoutes = require('./security'); /**en este archivo se encuentra el login*/
router.use('/auth', authorizer, securityRoutes);

module.exports = router;
