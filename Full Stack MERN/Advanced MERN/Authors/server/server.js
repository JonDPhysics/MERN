const express = require('express')
const cors = require('cors')
const app = express()
const dbName = "authors_db"
const port = 8000

// config
require("../server/config/mongoose.config")(dbName)

app.use(express.json(), express.urlencoded({ extended: true }), cors())

// get all the routes
require("./routes/author.route")(app)

app.listen(port, () => console.log(`Listening on port: ${port}`))