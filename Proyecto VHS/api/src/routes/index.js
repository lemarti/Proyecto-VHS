const { Router } = require('express');
const router = Router();

const { getProducts } = require("../controllers/productControllers")
router.get('/home', getProducts)
module.exports = router;