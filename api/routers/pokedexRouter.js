const express = require("express");
const router = express.Router();
const initialPokedex = require("../data/pokedex.json");

let pokedex = [...initialPokedex];

// index
router.get("/", index);

// destroy
router.delete("/:id", destroy);

function index(req, res) {
    if (!initialPokedex) return res.status(404).json("Not Found");
    if (
        req.query.type &&
        req.query.type.toLowerCase() !== "default" &&
        req.query.order
    ) {
        sortByQuery(pokedex, req.query.order, req.query.type);
        return res.json(pokedex);
    }
    let defaultOrderPokedex = [];
    initialPokedex.forEach((pkmn) => {
        if (pokedex.includes(pkmn)) {
            defaultOrderPokedex.push(pkmn);
        }
    });
    pokedex = [...defaultOrderPokedex];
    return res.json(pokedex);
}

function destroy(req, res) {
    pokedex = pokedex.filter((pokemon) => pokemon.id != req.params.id);
    res.json(pokedex);
}

// ***********************************
function sortByQuery(pokedex, order, type) {
    pokedex.sort((a, b) => {
        let x;
        let y;
        if (type.toLowerCase() === "name") {
            x = a.name.english.toLowerCase();
            y = b.name.english.toLowerCase();
        } else {
            Object.keys(a.base).forEach((key) => {
                if (key.toLowerCase() === type.toLowerCase()) {
                    x = a.base[key];
                    y = b.base[key];
                }
            });
        }
        if (x < y) {
            return order === "ascending" ? -1 : 1;
        }
        if (x > y) {
            return order === "ascending" ? 1 : -1;
        }
        return 0;
    });
}

module.exports = router;
