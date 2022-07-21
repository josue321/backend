module.exports = app => {
    const formatos_subidos = require("../controllers/formato_subido.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", formatos_subidos.create);
    // Retrieve all Tutorials
    router.get("/", formatos_subidos.findAll);
    // Retrieve all published Tutorials
    router.get("/published", formatos_subidos.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", formatos_subidos.findOne);
    // Update a Tutorial with id
    router.put("/:id", formatos_subidos.update);
    // Delete a Tutorial with id
    router.delete("/:id", formatos_subidos.delete);
    // Delete all Tutorials
    router.delete("/", formatos_subidos.deleteAll);
    app.use('/api/formatos_subido', router);


  };