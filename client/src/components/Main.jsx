import React, { useEffect, useState } from "react";
import Card from "./Card";

function Main() {
    const [pokedex, setPokedex] = useState([]);
    useEffect(()=>{},[])
    return (
        <main className="px-6">
            <CardsContainer>
                <Card />
                <Card />
                <Card />
                <Card />
            </CardsContainer>
        </main>
    );
}

function CardsContainer({ children }) {
    return (
        <div className="mx-auto bg-green-400 max-w-[900px] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {children}
        </div>
    );
}

export default Main;
