module.exports = app => {
    const { authJwt } = require("../middleware");
    const evaluacion = require("../controllers/evaluacion.controller.js");
  
    var router = require("express").Router();
  
  
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
  
    // Create a new Evaluacion
    router.post("/", evaluacion.create);
  
    // Retrieve all Evaluaciones
    router.get("/",[authJwt.verifyToken],evaluacion.findAll);
  
    // Retrieve all published Evaluaciones
    router.get("/evaluados", evaluacion.findAllEvaluacionesRevisadas);
  
    // Retrieve a single Evaluacion with id
    router.get("/:id",[authJwt.verifyToken], evaluacion.findOne);
  
    // Update a Evaluacion with id
    router.put("/:id",[authJwt.verifyToken], evaluacion.update);
  
    // Delete a Evaluacion with id
    router.delete("/:id",[authJwt.verifyToken], evaluacion.delete);
  


    router.get("/evaluacion/:id",[authJwt.verifyToken], evaluacion.findAllIdPPP);




    // Delete all evaluacion
    router.delete("/", evaluacion.deleteAll);

    
 
  
    app.use('/api/evaluaciones', router);
  };
  