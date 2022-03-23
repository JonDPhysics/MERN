// import all dependencies
const express = require('express')
const cors = require('cors')
const app = express()
const dbName = "product_db"
const port = 8000

// config mongoose
require("../server/configs/mongoose.config")(dbName)

app.use(express.json(), express.urlencoded({ extended: true }), cors())

// get all the routes
require("./routes/product.route")(app)

// Listen to the port
app.listen(port, () => console.log(`Listening on port: ${port}`))