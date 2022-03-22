const express = require('express')
const app = express()
const port = 8000
const dbName = "product_db"

// config mongoose
require("./configs/mongoose.config")(dbName)

app.use(express.json(), express.urlencoded({ extended: true }))

// routes
// requrie("./routes/product.route")(app)

// Listen to the port
app.listen(port, () => console.log(`Listening on port: ${port}`))