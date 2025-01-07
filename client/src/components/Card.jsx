import React from "react";

function Card({ pokemon }) {
    const imgPath =
        pokemon.id < 10
            ? `http://localhost:3000/pokedex/images/00${pokemon.id}.png`
            : `http://localhost:3000/pokedex/images/0${pokemon.id}.png`;
    return (
        <div className="bg-blue-300 aspect-square">
            {pokemon.name.english}
            <div className="h-3/5">
                <img src={imgPath} alt={pokemon.name.english} className="object-contain w-full h-full"/>
            </div>
        </div>
    );
}

export default Card;
