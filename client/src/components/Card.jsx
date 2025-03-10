import axios from "axios";
import React from "react";
import { apiURL } from "../globals/glob";
import EscBtn from "./EscBtn";

function Card({ pokemon, setPokedex }) {
    let imgPath;
    if (isNaN(pokemon.id)) {
        imgPath = `${apiURL}/images/placeholder.png`;
    } else {
        imgPath =
            pokemon.id < 10
                ? `${apiURL}/images/00${pokemon.id}.png`
                : pokemon.id < 100
                ? `${apiURL}/images/0${pokemon.id}.png`
                : `${apiURL}/images/${pokemon.id}.png`;
    }

    // al click, chiamata api per rimuovere la card
    const removeCard = () => {
        axios
            .delete(`${apiURL}/${pokemon.id}`)
            .then((res) => {
                setPokedex(res.data);
            })
            .catch((err) => console.error(err.response.data));
    };

    return (
        <div className="relative flex flex-col items-center p-3 bg-blue-100 rounded-lg select-none aspect-square hover:bg-blue-200">
            <div className="h-full p-4">
                <img
                    src={imgPath}
                    alt={pokemon.name.english}
                    className="object-contain w-full h-full"
                />
            </div>
            <span className="text-xl font-light tracking-wider uppercase select-text">
                {pokemon.name.english}
            </span>
            <EscBtn onClick={removeCard} />
        </div>
    );
}

export default Card;
