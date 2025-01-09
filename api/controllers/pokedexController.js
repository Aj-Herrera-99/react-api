const { sortByQuery, capitalizeStr } = require("../utilities/utilities");
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
    pokedex = pokedex.filter((pokemon) => pokemon.id != req.params.id);
    res.status(200).json(pokedex);
}

function store(req, res) {
    let { name, type, base } = req.body;
    if (name && type && base) {
        name = capitalizeStr(name);
        type = type.map((el) => capitalizeStr(el));
        Object.keys(base).forEach((key) => (base[key] = parseInt(base[key])));
        const newPokemon = {
            id: crypto.randomUUID(),
            name: { english: name },
            type: type.length ? type : ["Normal"],
            base,
        };
        initialPokedex.unshift(newPokemon);
        pokedex.unshift(newPokemon);
        return res.status(201).json(pokedex);
    }
    res.status(400).json(pokedex);
}

module.exports = { index, destroy, store };
