import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function Main() {
    const [pokedex, setPokedex] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/pokedex").then((res) => {
            console.log(res.data), setPokedex(res.data);
        });
    }, []);
    return (
        <main className="px-6">
            <CardsContainer>
                {pokedex.map((pokemon) => (
                    <Card key={pokemon.id} pokemon={pokemon} />
                ))}
            </CardsContainer>
        </main>
    );
}

function CardsContainer({ children }) {
    return (
        <div className="mx-auto bg-green-400 max-w-[900px] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {children}
        </div>
    );
}

export default Main;
