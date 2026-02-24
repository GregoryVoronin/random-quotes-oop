const quotes = require("./data/quotes.js");
const express = require("express");
const app = express();
const PORT = 3000;

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

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
