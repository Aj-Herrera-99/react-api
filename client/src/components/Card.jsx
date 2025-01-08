import axios from "axios";
import React from "react";
import { apiURL } from "../globals/glob";

function Card({ pokemon, setPokedex }) {
    const imgPath =
        pokemon.id < 10
            ? `${apiURL}/images/00${pokemon.id}.png`
            : pokemon.id < 100
            ? `${apiURL}/images/0${pokemon.id}.png`
            : `${apiURL}/images/${pokemon.id}.png`;

    // al click, chiamata api per rimuovere la card
    const removeCard = () => {
        axios.delete(`${apiURL}/${pokemon.id}`).then((res) => {
            setPokedex(res.data);
        });
    };

    return (
        <div className="relative flex flex-col items-center p-3 bg-blue-100 rounded-lg aspect-square hover:bg-blue-200">
            <div className="h-full p-4">
                <img
                    src={imgPath}
                    alt={pokemon.name.english}
                    className="object-contain w-full h-full"
                />
            </div>
            <span className="text-xl font-light tracking-wider uppercase">
                {pokemon.name.english}
            </span>
            <div
                onClick={removeCard}
                className="absolute top-0 p-2 text-3xl font-semibold text-red-600 transition-all scale-75 cursor-pointer right-2 hover:scale-110"
            >
                x
            </div>
        </div>
    );
}

export default Card;
