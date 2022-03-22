// import all dependencies
const express = require('express')
const app = express()
const dbName = "jokes_db"
const port = 8000

// config mongoose
require("./configs/mongoose.config")(dbName)

// express config for post
app.use(express.json(), express.urlencoded({ extended: true }))

// get the routes
require("./routes/jokes.routes")(app)

// listen to the port
app.listen(port, () => console.log(`Listening on port ${port} for request and response.`))