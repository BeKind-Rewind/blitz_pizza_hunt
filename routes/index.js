const router = require('express').Router();
const htmlRoutes = require('./html/html-routes');

router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Errorrrrr!</h1>');
});

module.exports = router;
