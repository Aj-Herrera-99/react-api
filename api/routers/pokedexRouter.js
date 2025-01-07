const express = require("express");
const router = express.Router();
let pokedex = require("../data/pokedex.json");

// index
router.get("/", index);

function index(req, res) {
    if (!pokedex) return res.status(404).json("Not Found");
    res.json(pokedex);
}

module.exports = router;
