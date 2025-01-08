const express = require("express");
const router = express.Router();
const { index, destroy, store } = require("../controllers/pokedexController");

// index
router.get("/", index);
// destroy
router.delete("/:id", destroy);
// store
router.post("/", store);

module.exports = router;
