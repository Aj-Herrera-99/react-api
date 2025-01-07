const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const app = express();

// global middlewares
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req,res) => {
    res.send(`<h1>Ciao da server!</h1>`)
})

// apertura server
app.listen(PORT, () =>
    console.log(`server aperto sulla porta ${PORT}\nhttp://localhost:${PORT}`)
);
