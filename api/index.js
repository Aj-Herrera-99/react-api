const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const app = express();

// routers import
const pokedexRouter = require("./routers/pokedexRouter");

// global middlewares
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.send(`<h1>Ciao da server!</h1>`);
});

app.get("/foo", (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + "/public/pokedex/images/001.png");
});
app.use("/pokedex", pokedexRouter);

// apertura server
app.listen(PORT, () =>
    console.log(`server aperto sulla porta ${PORT}\nhttp://localhost:${PORT}`)
);
