const restaurantRoutes = require('../restaurant/route');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.json({ message: 'API is connected! LOL' })
  })
  app.use(restaurantRoutes)
}