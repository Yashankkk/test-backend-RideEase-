const router = require("express").Router();

const register = require("../../controllers/auth/registration");

const login = require('../../controllers/auth/login');

router.post("/registration", register);

router.post('/login', login);


module.exports = router;
