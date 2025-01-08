import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "./Card";
import { apiURL } from "../globals/glob";

function Main() {
    const [pokedex, setPokedex] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get(apiURL).then((res) => setPokedex(res.data));
    }, []);

    const filteredPokedex = pokedex.filter((pokemon) =>
        pokemon.name.english.toLowerCase().startsWith(filter.toLowerCase())
    );

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <main className="px-10">
            <div className="flex items-center justify-center gap-12">
                <OrderCards setPokedex={setPokedex} />
                <SearchBar filter={filter} onChange={handleFilterChange} />
            </div>
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

function OrderCards({ setPokedex }) {
    const selectRef = useRef(null);
    const dropDownRef = useRef(null);

    const handleDropDown = () => {
        dropDownRef.current.classList.toggle("!block");
    };
    const handleOrder = (e) => {
        if (e.target.tagName === "LI") {
            dropDownRef.current.classList.remove("!block");
            const type = e.target.innerHTML;
            axios
                .get(
                    `${apiURL}/?order=${
                        selectRef.current.value
                    }&type=${type.toLocaleLowerCase()}`
                )
                .then((res) => setPokedex(res.data));
        }
    };
    return (
        <div className="relative text-white bg-blue-600 rounded-full ">
            <div
                onClick={handleDropDown}
                className="flex items-center justify-center text-3xl w-[50px] aspect-square font-black cursor-pointer"
            >
                F
            </div>
            <div
                ref={dropDownRef}
                className="absolute z-10 hidden py-4 pl-4 pr-8 text-white rounded-md -left-4 sm:-left-24 top-14 bg-slate-800"
            >
                <span>Order By:</span>
                <select
                    ref={selectRef}
                    className="p-1 ml-2 bg-transparent rounded-md cursor-pointer outline outline-1 outline-white [&>option]:text-black"
                >
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
                <ul
                    onClick={handleOrder}
                    className="mt-2 flex flex-col gap-2 [&>li]:uppercase [&>li]:bg-blue-700 [&>li]:p-1 [&>li]:rounded-md [&>li]:tracking-wide [&>li]:font-semibold [&>li]:cursor-pointer hover:[&>li]:bg-blue-900"
                >
                    <li>Default</li>
                    <li>Name</li>
                    <li>HP</li>
                    <li>Attack</li>
                    <li>Defense</li>
                    <li>Speed</li>
                </ul>
            </div>
        </div>
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
            className=" p-3 my-4  rounded-md bg-slate-200 w-[200px] sm:w-[300px]  text-lg sm:text-3xl placeholder:text-slate-600 outline-1 outline"
            placeholder="Search a Pokemon"
            value={filter}
            onChange={onChange}
        />
    );
}

export default Main;
