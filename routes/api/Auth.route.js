const router = require("express").Router();

const register = require("../../controllers/auth/registration");
const loginform = require('../../controllers/auth/login');
const contactme= require('../../controllers/auth/contact');
const google = require("../../controllers/auth/google")

router.post("/registration", register);
router.post("/login", loginform);
router.post("/contact", contactme);
router.post("/google", google);

module.exports = router;
