import React from "react";

function PokemonForm() {
    return (
        <form className="absolute top-16 z-10 flex flex-col gap-3 p-4 text-white rounded-md bg-blue-950 [&_input]:text-black max-w-[90vw]">
            <div className="flex items-center gap-4">
                <label htmlFor="name" className="text-lg uppercase">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="p-1 rounded-md"
                />
            </div>
            <div className="text-lg uppercase">Type:</div>
            <div className="grid grid-cols-3 gap-y-2 gap-x-8">
                <div>
                    <input
                        type="checkbox"
                        id="normal"
                        name="type"
                        value="normal"
                    />
                    <label for="normal">Normal</label>
                </div>

                <div>
                    <input type="checkbox" id="fire" name="type" value="fire" />
                    <label for="fire">Fire</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="water"
                        name="type"
                        value="water"
                    />
                    <label for="water">Water</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="grass"
                        name="type"
                        value="grass"
                    />
                    <label for="grass">Grass</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="electric"
                        name="type"
                        value="electric"
                    />
                    <label for="electric">Electric</label>
                </div>

                <div>
                    <input type="checkbox" id="ice" name="type" value="ice" />
                    <label for="ice">Ice</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="fighting"
                        name="type"
                        value="fighting"
                    />
                    <label for="fighting">Fighting</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="poison"
                        name="type"
                        value="poison"
                    />
                    <label for="poison">Poison</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="ground"
                        name="type"
                        value="ground"
                    />
                    <label for="ground">Ground</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="flying"
                        name="type"
                        value="flying"
                    />
                    <label for="flying">Flying</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="psychic"
                        name="type"
                        value="psychic"
                    />
                    <label for="psychic">Psychic</label>
                </div>

                <div>
                    <input type="checkbox" id="bug" name="type" value="bug" />
                    <label for="bug">Bug</label>
                </div>

                <div>
                    <input type="checkbox" id="rock" name="type" value="rock" />
                    <label for="rock">Rock</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="ghost"
                        name="type"
                        value="ghost"
                    />
                    <label for="ghost">Ghost</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="dragon"
                        name="type"
                        value="dragon"
                    />
                    <label for="dragon">Dragon</label>
                </div>

                <div>
                    <input type="checkbox" id="dark" name="type" value="dark" />
                    <label for="dark">Dark</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="steel"
                        name="type"
                        value="steel"
                    />
                    <label for="steel">Steel</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="fairy"
                        name="type"
                        value="fairy"
                    />
                    <label for="fairy">Fairy</label>
                </div>
            </div>
            <div className="text-lg uppercase">Base:</div>
            <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                    <label htmlFor="hp">HP:</label>
                    <input
                        type="number"
                        id="hp"
                        name="hp"
                        min={1}
                        max={250}
                        className="p-1 rounded-md w-[50px]"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <label htmlFor="attack">Attack:</label>
                    <input
                        type="number"
                        id="attack"
                        name="attack"
                        min={1}
                        max={250}
                        className="p-1 rounded-md w-[50px]"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <label htmlFor="defense">Defense:</label>
                    <input
                        type="number"
                        id="defense"
                        name="defense"
                        min={1}
                        max={250}
                        className="p-1 rounded-md w-[50px]"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <label htmlFor="speed">Speed:</label>
                    <input
                        type="number"
                        id="speed"
                        name="speed"
                        min={1}
                        max={250}
                        className="p-1 rounded-md w-[50px]"
                    />
                </div>
            </div>
            <button
                type="submit"
                className="px-8 py-3 mx-auto mt-4 rounded-2xl bg-slate-900 w-fit"
            >
                Generate Pokemon
            </button>
        </form>
    );
}

export default PokemonForm;
