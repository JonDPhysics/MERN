const BovineController = require('../controllers/product.controller')

module.exports = app => {
    app.get("/api/bovine", BovineController.allBovine)
    app.get("/api/bovine/:id", BovineController.oneBovine)
    app.post("/api/bovine", BovineController.createBovine)
    app.put("/api/bovine/:id", BovineController.updateBovine)
    app.delete("/api/bovine/:id", BovineController.deleteBovine)
}