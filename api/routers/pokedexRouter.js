const express = require("express");
const router = express.Router();
let pokedex = require("../data/pokedex.json");

// index
router.get("/", index);

function index(req, res) {
    if (!pokedex) return res.status(404).json("Not Found");
    pokedex = pokedex.map((pokemon) => {
        const imgPath =
            pokemon.id < 10
                ? `/public/pokedex/images/00${pokemon.id}.png`
                : `/public/pokedex/images/0${pokemon.id}.png`;

        return {
            ...pokemon,
            path: imgPath,
        };
    });
    res.json(pokedex);
}

module.exports = router;
