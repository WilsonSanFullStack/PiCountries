const { Router } = require("express");

const routerCountry = require('./routerCountry')
const router = Router();

router.use('/', routerCountry )


module.exports = router;
