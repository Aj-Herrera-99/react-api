const express = require("express");
const router = express.Router();
let pokedex = require("../data/pokedex.json");

// index
router.get("/", index);

// destroy
router.delete("/:id", destroy);

function index(req, res) {
    if (!pokedex) return res.status(404).json("Not Found");
    res.json(pokedex);
}

function destroy(req, res) {
    pokedex = pokedex.filter((pokemon) => pokemon.id != req.params.id);
    res.json(pokedex);
}

module.exports = router;
