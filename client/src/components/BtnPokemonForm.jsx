import React, { useState } from "react";
import PokemonForm from "./PokemonForm";

function BtnPokemonForm({ setPokedex }) {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div className="relative max-w-[900px] mx-auto">
            <div
                onClick={() => setIsClicked((curr) => !curr)}
                className="px-6 py-2 text-white bg-blue-500 rounded-full cursor-pointer w-fit hover:bg-blue-700"
            >
                Click here to add your Pokemon!
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

export default BtnPokemonForm;
