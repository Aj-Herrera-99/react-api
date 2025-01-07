import React from "react";

function Card({ pokemon }) {
    const imgPath =
        pokemon.id < 10
            ? `http://localhost:3000/pokedex/images/00${pokemon.id}.png`
            : pokemon.id < 100
            ? `http://localhost:3000/pokedex/images/0${pokemon.id}.png`
            : `http://localhost:3000/pokedex/images/${pokemon.id}.png`;
    return (
        <div className="flex flex-col items-center bg-blue-300 aspect-square">
            <div className="h-full p-5">
                <img
                    src={imgPath}
                    alt={pokemon.name.english}
                    className="object-contain w-full h-full"
                />
            </div>
            <span className="text-3xl font-semibold">
                {pokemon.name.english}
            </span>
        </div>
    );
}

export default Card;
