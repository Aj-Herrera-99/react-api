const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const app = express();

// imports
const pokedexRouter = require("./routers/pokedexRouter");
const { notFoundHandler } = require("./middlewares/notFoundHandler");
const { errorHandler } = require("./middlewares/errorHandler");

// global middlewares
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

// homepage
app.get("/", (req, res) => {
    res.send(`<h1>Ciao da server!</h1>`);
});
// routes
app.use("/pokedex", pokedexRouter);

// fallback
app.use(notFoundHandler);
app.use(errorHandler);

// apertura server
app.listen(PORT, () =>
    console.log(`server aperto sulla porta ${PORT}\nhttp://localhost:${PORT}`)
);
