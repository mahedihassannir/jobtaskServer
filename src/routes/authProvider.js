const { singUp, login, userProfile } = require("../controllers/auth");

const router = require("express").Router();




router.post("/login", login);

router.post("/sing_up", singUp);

router.get("/userProfile/:id", userProfile);













module.exports = router;




