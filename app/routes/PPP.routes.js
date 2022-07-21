module.exports = app => {
    const { authJwt } = require("../middleware");
    const ppps = require("../controllers/PPP.controller.js");
  
    var router = require("express").Router();
  
  
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
  
    // Create a new PPP
    router.post("/", ppps.create);
  
    // Retrieve all PPPs
    router.get("/",[authJwt.verifyToken],ppps.findAll);
  
    // Retrieve all published PPPs
    router.get("/published", ppps.findAllPublished);
  
    // Retrieve a single PPP with id
    router.get("/:id",[authJwt.verifyToken], ppps.findOne);
  
    // Update a PPP with id
    router.put("/:id",[authJwt.verifyToken], ppps.update);
  
    // Delete a PPP with id
    router.delete("/:id",[authJwt.verifyToken], ppps.delete);
  


    router.get("/idTutor/:id",[authJwt.verifyToken], ppps.findAllIdTutor);




    // Delete all PPPs
    router.delete("/", ppps.deleteAll);

    
 
  
    app.use('/api/ppps', router);
  };
  