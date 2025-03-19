const router = require("express").Router();

const register = require("../../controllers/auth/registration");
const login = require('../../controllers/auth/login');
const contact= require('../../controllers/auth/contact');

router.post("/registration", register);
router.post("/login", login);
router.post("/contact", contact);
router.get("/google", google);

module.exports = router;
