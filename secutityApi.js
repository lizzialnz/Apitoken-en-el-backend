/**Aqui se crea la peticion donde se manda el api token desde el back
el api token es dinámico cambiara cada cierto tiempo y esta guardada en una variable de entorno .env*/
const express = require('express');
let router = express.Router();

router.get('/security', async (req, res) => {
    console.log(process.env.APP_API_KEY);
  return res.status(200).json(process.env.APP_API_KEY);
});


module.exports = router;
