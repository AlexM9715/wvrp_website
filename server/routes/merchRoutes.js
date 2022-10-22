const Merch = require("../controllers/merchController")

module.exports = (app) => {
    app.get("/api/merch", Merch.findAll)
    app.post("/api/merch", Merch.create)
    app.get("/api/merch/:id", Merch.findOne)
    app.put("/api/merch/:id", Merch.update)
    app.delete("/api/merch/:id", Merch.delete)
}