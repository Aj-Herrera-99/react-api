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
module.exports = { sortByQuery };
