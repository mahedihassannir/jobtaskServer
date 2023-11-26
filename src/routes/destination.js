const { destinationController, PostDestinationController } = require("../controllers/destinationController");

const router = require("express").Router();


router.post("/destinationsend", PostDestinationController)

router.get("/destination", destinationController)


module.exports = router;
