const router = require("express").Router();

const register = require("../../controllers/auth/registration");
const loginform = require('../../controllers/auth/login');
const contactme= require('../../controllers/auth/contact');

router.post("/registration", register);
router.post("/login", loginform);
router.post("/contact", contactme);
router.get("/google", google);

module.exports = router;
