function sortByQuery(pokedex, order, type) {
    pokedex.sort((a, b) => {
        let x;
        let y;
        if (type.toLowerCase() === "name") {
            x = a.name.english.toLowerCase();
            y = b.name.english.toLowerCase();
        } else {
            for (let key in a.base) {
                if (key.toLowerCase() === type.toLowerCase()) {
                    x = a.base[key];
                    y = b.base[key];
                    break;
                }
            }
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

function capitalizeStr(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
module.exports = { sortByQuery, capitalizeStr };
