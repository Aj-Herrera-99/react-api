import React from "react";

function Card({ pokemon }) {
    return <div className="bg-blue-300 aspect-square">{pokemon.name.english}</div>;
}

export default Card;
