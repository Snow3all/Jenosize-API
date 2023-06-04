const middleware = require('../../middleware/middleware');
;const jenosize = require('../jenosize/route');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.json({ message: 'API is connected! LOL' })
  });

  app.use(middleware);

  app.use(jenosize);
}