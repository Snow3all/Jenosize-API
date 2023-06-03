const app = require('../config/express')
const { port } = require('../config/var');
const bodyParser = require('body-parser');
require("dotenv").config();

app.use(bodyParser.json());

app.listen(port, () => console.log(`server started on port ${port}`))

module.exports = app