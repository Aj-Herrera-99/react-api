import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { apiURL } from "../globals/glob";
import PokemonFormBtn from "./PokemonFormBtn";
import OrderPokemons from "./OrderPokemons";
import SearchBar from "./SearchBar";

function Main() {
    const [pokedex, setPokedex] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios
            .get(apiURL)
            .then((res) => setPokedex(res.data))
            .catch((err) => console.error(err.response.data));
    }, []);

    const filteredPokedex = pokedex.filter((pokemon) =>
        pokemon.name.english.toLowerCase().startsWith(filter.toLowerCase())
    );

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    useEffect(() => {
        console.log(pokedex);
    }, [pokedex]);

    return (
        <main className="px-10 [&>*]:max-w-[900px] [&>*]:mx-auto">
            <div className="flex items-center justify-center gap-8">
                <SearchBar filter={filter} onChange={handleFilterChange} />
                <OrderPokemons setPokedex={setPokedex} />
            </div>
            <PokemonFormBtn setPokedex={setPokedex} />
            <CardsContainer>
                {filteredPokedex.map((pokemon) => (
                    <Card
                        key={pokemon.id}
                        pokemon={pokemon}
                        setPokedex={setPokedex}
                    />
                ))}
            </CardsContainer>
        </main>
    );
}

function CardsContainer({ children }) {
    return (
        <div className="grid grid-cols-1 gap-6 my-4 sm:grid-cols-3 lg:grid-cols-4">
            {children}
        </div>
    );
}

export default Main;
