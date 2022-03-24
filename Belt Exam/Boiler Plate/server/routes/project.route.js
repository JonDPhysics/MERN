const ProjectController = require('../controllers/project.controller')

module.exports = app => {
    app.get("/api/all", ProjectController.all)
    app.get("/api/one/:id", ProjectController.one)
    app.post("/api/create/", ProjectController.create)
    app.put("/api/update/:id", ProjectController.update)
    app.delete("/api/delete/:id", ProjectController.delete)
}