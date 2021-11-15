const express = require("express");

const coffeeController = require("../controllers/coffee_controller");
const teaController = require("../controllers/tea_controller");

const router = new express.Router();

router.get("/coffee", coffeeController.getCoffee);
router.get("/tea", teaController.getTea);

module.exports = router;
