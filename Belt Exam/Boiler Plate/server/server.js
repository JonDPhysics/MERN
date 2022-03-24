const express = require('express')
const cors = require('cors')
const app = express()
const dbName = "project_db" // Change 'project'
const port = 8000

// config mongoose
require("../server/config/mongoose.config")(dbName)

app.use(express.json(), express.urlencoded({ extended: true }), cors())

// get all the routes

require("./routes/project.route") // Change 'project'

// Listen to the port
app.listen(port, () => console.log(`Listening on port: ${port}`))