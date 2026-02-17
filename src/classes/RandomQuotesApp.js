import RandomQuote from "./RandomQuote.js";

class RandomQuotesApp {
    constructor() {
        this.randomQuoteBtn = document.getElementById("random-quote-btn");
        this.quoteTextElement = document.getElementById("quote-text");
        this.quoteAuthorElement = document.getElementById("quote-author");
        this.currentQuote = {};

        this.init();
    }

    displayCurrentQuote() {
        const { text, author } = this.currentQuote;
        this.quoteTextElement.textContent = `"${text}"`;
        this.quoteAuthorElement.textContent = author;
    }

    getRandomeQuote() {
        const randomQuote = RandomQuote.getRandomQuote();
        this.currentQuote = randomQuote;
        this.displayCurrentQuote();
    }
    init() {
        this.randomQuoteBtn.addEventListener("click", () => {
            this.getRandomeQuote();
        });
    }
}

export default RandomQuotesApp;
