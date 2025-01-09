import React, { useState } from "react";
import PokemonForm from "./PokemonForm";

function PokemonFormBtn({ setPokedex }) {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div className="relative">
            <div
                onClick={() => setIsClicked((curr) => !curr)}
                className="px-6 py-2 text-2xl font-light tracking-wider text-white bg-blue-500 rounded-full cursor-pointer w-fit hover:bg-blue-700"
            >
                Add Your Pokemon!
            </div>
            {isClicked && (
                <PokemonForm
                    setPokedex={setPokedex}
                    setIsClicked={setIsClicked}
                />
            )}
        </div>
    );
}

export default PokemonFormBtn;
