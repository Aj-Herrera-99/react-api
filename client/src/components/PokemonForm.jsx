import axios from "axios";
import React, { useState } from "react";
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

// messi qui per semplicità, (da spostare in backend come db)
const type = [
    "normal",
    "fire",
    "water",
    "grass",
    "electric",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
];

const base = ["HP", "Attack", "Defense", "Speed"];

function PokemonForm({ setPokedex, setIsClicked }) {
    const [newPokemon, setNewPokemon] = useState(pokemonData);

    const handleInputChange = (e) => {
        const { name, type, value, checked } = e.target;
        const KEY = name;
        const VAL = value;
        switch (type) {
            case "text":
                setNewPokemon({
                    ...newPokemon,
                    [KEY]: VAL,
                });
                break;
            case "checkbox":
                const setTypes = new Set([...newPokemon.type]);
                checked ? setTypes.add(VAL) : setTypes.delete(VAL);
                setNewPokemon({ ...newPokemon, [KEY]: Array.from(setTypes) });
                break;
            case "number":
                setNewPokemon({
                    ...newPokemon,
                    base: { ...newPokemon.base, [KEY]: VAL },
                });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(apiURL, newPokemon).then((res) => {
            console.log("Nuovo pokemon aggiunto");
            setPokedex(res.data);
            setIsClicked(false);
        });
    };

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
                    value={newPokemon.name}
                    onChange={handleInputChange}
                    required={true}
                />
            </div>
            <label className="text-lg uppercase">Type:</label>
            <div className="grid grid-cols-3 gap-y-2 gap-x-8">
                {type.map((type, index) => (
                    <TypeInput
                        key={index}
                        type={type}
                        onChange={handleInputChange}
                    />
                ))}
            </div>
            <label className="text-lg uppercase">Base:</label>
            <div className="flex flex-wrap gap-6">
                {base.map((base, index) => (
                    <BaseInput
                        key={index}
                        el={base}
                        onChange={handleInputChange}
                    />
                ))}
            </div>
            <SubmitBtn>Generate Pokemon</SubmitBtn>
        </form>
    );
}

function TypeInput({ type, onChange }) {
    return (
        <div className="flex gap-1">
            <input
                type="checkbox"
                id={type}
                name="type"
                value={type}
                onChange={onChange}
            />
            <label htmlFor={type} className="capitalize">
                {type}
            </label>
        </div>
    );
}

function BaseInput({ el: base, onChange }) {
    return (
        <div className="flex items-center gap-2">
            <label htmlFor={base}>{base}:</label>
            <input
                type="number"
                id={base}
                name={base}
                min={1}
                max={250}
                className="p-1 rounded-md w-[50px]"
                onChange={onChange}
                required={true}
            />
        </div>
    );
}

function SubmitBtn({ children }) {
    return (
        <button
            type="submit"
            className="px-8 py-3 mx-auto mt-4 rounded-2xl bg-slate-900 w-fit"
        >
            {children}
        </button>
    );
}

export default PokemonForm;
