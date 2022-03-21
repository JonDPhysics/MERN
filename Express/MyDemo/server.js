const express = require("express") 
const app = express()
const port = 8000

const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

// for posting data
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() )
app.use( express.urlencoded({ extended: true }) )

// ROUTES + controller
// getAll
app.get("/api/users", (req, res)=>{
    res.json(users)
})

// getOne
app.get("/api/users/:id", (req, res)=>{
    const id = req.params.id
    res.json(users[id])
})

// createUser - post
app.post("/api/users", (req, res) =>{
    const newUser = req.body
    users.push(newUser)
    res.json({status:"ok"})
})

// update - getOne + post
app.put("/api/users/:id", (req, res)=>{
    const id = req.params.id
    users[id] = req.body
    res.json(users[id])
})

// delete
app.delete("/api/users/:id", (req, res)=>{
    const id = req.params.id
    users.splice(id, 1)
    res.json({status:"ok"})
})

app.get("/api", (req, res)=>{
    res.json("Hello World")
})



app.listen(port, () => console.log("Listening on port: 8000 "))