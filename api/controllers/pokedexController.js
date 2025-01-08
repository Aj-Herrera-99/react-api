const { sortByQuery } = require("../utilities/utilities");
const initialPokedex = require("../data/pokedex.json");

let pokedex = [...initialPokedex];

function index(req, res) {
    if (!initialPokedex) return res.status(404).json("Not Found");
    if (req.query.type?.toLowerCase() !== "default" && req.query.order) {
        sortByQuery(pokedex, req.query.order, req.query.type);
    } else {
        let defaultOrderPokedex = [];
        initialPokedex.forEach((pkmn) => {
            if (pokedex.includes(pkmn)) {
                defaultOrderPokedex.push(pkmn);
            }
        });
        pokedex = [...defaultOrderPokedex];
    }
    res.json(pokedex);
}

function destroy(req, res) {
    console.log("test");
    pokedex = pokedex.filter((pokemon) => pokemon.id != req.params.id);
    res.status(204).json(pokedex);
}

function store(req, res) {
    const { name, type, base } = req.body;
    for (let key in base) {
        base[key] = parseInt(base[key]);
    }
    if (name && type && base) {
        const newPokemon = {
            id: crypto.randomUUID(),
            name: { english: name },
            type,
            base,
        };
        initialPokedex.unshift(newPokemon);
        pokedex.unshift(newPokemon);
        return res.status(201).json(pokedex);
    }
    res.status(400).json(pokedex);
}

module.exports = { index, destroy, store };
