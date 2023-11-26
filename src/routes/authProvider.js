const { singUp, login, userProfile } = require("../controllers/auth");
const router = require("express").Router();

const singUpValidator = require("../validator/AuthSingupValidator/AuthSingupValidator")

const loginValidator = require("../validator/AuthLoiginValidator/AuthLoiginValidator");
const { isauthorized } = require("../middleware/isauthorized");

// all requires ends here 



router.post("/login", loginValidator, login);

router.post("/sing_up", singUpValidator, singUp);

// router.get("/userProfile/:id", userProfile);
router.get("/userProfile", isauthorized, userProfile);













module.exports = router;




