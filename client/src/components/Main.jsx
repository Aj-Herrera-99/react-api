import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Card from "./Card";

function Main() {
    const [initialPokedex, setInitialPokedex] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/pokedex").then((res) => {
            console.log(res.data);
            setInitialPokedex(res.data);
        });
    }, []);
    useEffect(() => {
        console.log("useEffect")
        setPokedex(initialPokedex);
    }, [initialPokedex]);
    return (
        <main className="px-6">
            <SearchBar
                initialPokedex={initialPokedex}
                setPokedex={setPokedex}
            />
            <CardsContainer>
                {pokedex.map((pokemon) => (
                    <Card
                        key={pokemon.id}
                        pokemon={pokemon}
                        setInitialPokedex={setInitialPokedex}
                    />
                ))}
            </CardsContainer>
        </main>
    );
}

function CardsContainer({ children }) {
    return (
        <div className="mx-auto my-4 max-w-[900px] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {children}
        </div>
    );
}

function SearchBar({ initialPokedex, setPokedex }) {
    const inputRef = useRef(null);
    const handleInputChange = () => {
        const newPokedex = initialPokedex.filter((pokemon) =>
            pokemon.name.english
                .toLowerCase()
                .startsWith(inputRef.current.value.toLowerCase())
        );
        setPokedex(newPokedex);
    };
    return (
        <input
            className="block p-3 my-4 mx-auto rounded-md bg-slate-200 w-[300px]  text-2xl placeholder:text-slate-600 outline-1 outline"
            placeholder="Search a Pokemon"
            ref={inputRef}
            onChange={handleInputChange}
        />
    );
}

export default Main;
