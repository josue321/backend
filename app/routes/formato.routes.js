

module.exports = app => {
    const formatos = require("../controllers/formato.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", formatos.create);
    // Retrieve all Tutorials
    router.get("/", formatos.findAll);
    // Retrieve all published Tutorials
    router.get("/published", formatos.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", formatos.findOne);
    // Update a Tutorial with id
    router.put("/:id", formatos.update);
    // Delete a Tutorial with id
    router.delete("/:id", formatos.delete);
    // Delete all Tutorials
    router.delete("/", formatos.deleteAll);
    app.use('/api/formatos', router);
  };

  