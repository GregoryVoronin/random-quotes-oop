const quotes = require("./data/quotes.js");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

app.use(
    cors({
        origin: "*",
        methods: ["GET"],
    }),
);

app.get("/quotes", (req, res) => {
    res.json(quotes);
});

app.get("/quotes/random-quote", (req, res) => {
    const randomQuote = getRandomQuote();
    res.json(randomQuote);
});

app.listen(PORT, () => {
    console.log(`Quotes API service running on port ${PORT}`);
});
