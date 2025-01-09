const { sortByQuery, capitalizeStr } = require("../utilities/utilities");
const initialPokedex = require("../data/pokedex.json");

let pokedex = [...initialPokedex];

function index(req, res) {
    if (!initialPokedex)
        return res.status(404).json({
            success: false,
            message: "Pokedex non trovato",
        });
    if (req.query.type?.toLowerCase() !== "default" && req.query.order) {
        sortByQuery(pokedex, req.query.order, req.query.type);
    } else {
        pokedex = initialPokedex.filter((pokemon) => pokedex.includes(pokemon));
    }
    res.json(pokedex);
}

function destroy(req, res) {
    const indexTarget = pokedex.findIndex(
        (pokemon) => pokemon.id == req.params.id
    );
    if (indexTarget === -1)
        return res.status(404).json({
            success: false,
            message: "Pokemon non trovato",
        });
    pokedex = pokedex.filter((pokemon, index) => index != indexTarget);
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
    res.status(400).json({
        success: false,
        message: "Operazione fallita",
    });
}

module.exports = { index, destroy, store };
