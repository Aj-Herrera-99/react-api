export const apiURL = import.meta.env.VITE_PORT
    ? `http://localhost:${import.meta.env.VITE_PORT}/pokedex`
    : `http://localhost:3000/pokedex`;
