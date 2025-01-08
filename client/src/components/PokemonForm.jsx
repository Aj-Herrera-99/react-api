import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiURL } from "../globals/glob";

const pokemonData = {
    name: "",
    type: [],
    base: {
        HP: 0,
        Attack: 0,
        Defense: 0,
        Speed: 0,
    },
};

function PokemonForm({ setPokedex }) {
    const [formData, setFormData] = useState(pokemonData);
    const handleInputChange = (e) => {
        const { name, type, value, checked } = e.target;
        const KEY = name;
        const VAL = value;
        if (type === "text") {
            setFormData({ ...formData, [KEY]: VAL });
        } else if (type === "checkbox") {
            const types = new Set([...formData.type, VAL]);
            if (!checked) {
                types.delete(VAL);
            }
            setFormData({ ...formData, [KEY]: Array.from(types) });
        } else if (type === "number") {
            setFormData({
                ...formData,
                base: { ...formData.base, [KEY]: VAL },
            });
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(apiURL, formData).then((res) => {
            console.log("Nuovo pokemon aggiunto");
            setPokedex(res.data);
        });
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);
    return (
        <form
            onSubmit={handleSubmit}
            className="absolute top-16 z-10 flex flex-col gap-3 p-4 text-white rounded-md bg-blue-950 [&_input]:text-black max-w-[90vw]"
        >
            <div className="flex items-center gap-4">
                <label htmlFor="name" className="text-lg uppercase">
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="p-1 rounded-md"
                    value={formData.name}
                    onChange={handleInputChange}
                    required={true}
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
                        onChange={handleInputChange}
                    />
                    <label htmlFor="normal">Normal</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="fire"
                        name="type"
                        value="fire"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="fire">Fire</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="water"
                        name="type"
                        value="water"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="water">Water</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="grass"
                        name="type"
                        value="grass"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="grass">Grass</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="electric"
                        name="type"
                        value="electric"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="electric">Electric</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="ice"
                        name="type"
                        value="ice"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="ice">Ice</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="fighting"
                        name="type"
                        value="fighting"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="fighting">Fighting</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="poison"
                        name="type"
                        value="poison"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="poison">Poison</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="ground"
                        name="type"
                        value="ground"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="ground">Ground</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="flying"
                        name="type"
                        value="flying"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="flying">Flying</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="psychic"
                        name="type"
                        value="psychic"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="psychic">Psychic</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="bug"
                        name="type"
                        value="bug"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="bug">Bug</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="rock"
                        name="type"
                        value="rock"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="rock">Rock</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="ghost"
                        name="type"
                        value="ghost"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="ghost">Ghost</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="dragon"
                        name="type"
                        value="dragon"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="dragon">Dragon</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="dark"
                        name="type"
                        value="dark"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="dark">Dark</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="steel"
                        name="type"
                        value="steel"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="steel">Steel</label>
                </div>

                <div>
                    <input
                        type="checkbox"
                        id="fairy"
                        name="type"
                        value="fairy"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="fairy">Fairy</label>
                </div>
            </div>
            <div className="text-lg uppercase">Base:</div>
            <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                    <label htmlFor="hp">HP:</label>
                    <input
                        type="number"
                        id="hp"
                        name="HP"
                        min={1}
                        max={250}
                        className="p-1 rounded-md w-[50px]"
                        onChange={handleInputChange}
                        required={true}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <label htmlFor="attack">Attack:</label>
                    <input
                        type="number"
                        id="attack"
                        name="Attack"
                        min={1}
                        max={250}
                        className="p-1 rounded-md w-[50px]"
                        onChange={handleInputChange}
                        required={true}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <label htmlFor="defense">Defense:</label>
                    <input
                        type="number"
                        id="defense"
                        name="Defense"
                        min={1}
                        max={250}
                        className="p-1 rounded-md w-[50px]"
                        onChange={handleInputChange}
                        required={true}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <label htmlFor="speed">Speed:</label>
                    <input
                        type="number"
                        id="speed"
                        name="Speed"
                        min={1}
                        max={250}
                        className="p-1 rounded-md w-[50px]"
                        onChange={handleInputChange}
                        required={true}
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
