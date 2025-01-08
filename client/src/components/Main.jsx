import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function Main() {
  const [pokedex, setPokedex] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/pokedex")
      .then((res) => setPokedex(res.data));
  }, []);

  const filteredPokedex = pokedex.filter((pokemon) =>
    pokemon.name.english.toLowerCase().startsWith(filter.toLowerCase())
  );

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <main className="px-10">
      <SearchBar
        filter={filter}
        onChange={handleFilterChange}
      />
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
    <div className="mx-auto my-4 max-w-[900px] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {children}
    </div>
  );
}

function SearchBar({ filter, onChange }) {
  return (
    <input
      className="block p-3 my-4 mx-auto rounded-md bg-slate-200 w-[300px]  text-2xl placeholder:text-slate-600 outline-1 outline"
      placeholder="Search a Pokemon"
      value={filter}
      onChange={onChange}
    />
  );
}

export default Main;