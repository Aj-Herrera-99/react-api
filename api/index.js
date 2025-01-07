const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const app = express();

// routers import
const pokedexRouter = require("./routers/pokedexRouter");

// global middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// routes
app.get("/", (req, res) => {
    res.send(`<h1>Ciao da server!</h1>`);
});
app.use("/pokedex", pokedexRouter);

// apertura server
app.listen(PORT, () =>
    console.log(`server aperto sulla porta ${PORT}\nhttp://localhost:${PORT}`)
);
