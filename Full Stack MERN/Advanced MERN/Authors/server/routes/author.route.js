const ProductController = require('../controllers/author.controller')

module.exports = app =>{
    app.get("/api/authors", ProductController.allAuthors)
    app.get("/api/authors/:id", ProductController.oneAuthor)
    app.post("/api/authors", ProductController.createAuthor)
    app.put("/api/authors/:id", ProductController.updateAuthor)
    app.delete("/api/authors/:id", ProductController.deleteAuthor)
}