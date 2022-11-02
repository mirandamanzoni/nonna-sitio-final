var router = express.Router();
var novedadesModel = require('../models/novedadesModel');
/* GET home page. */
router.get('/',async function(req, res, next) {
var novedades = await novedadesModel.getNovedades()
  res.render('index',{
novedades});
});

module.exports = router;

