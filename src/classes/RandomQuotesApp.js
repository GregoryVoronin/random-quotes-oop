import RandomQuote from "./RandomQuote.js";
import Quote from "./Quote.js";

class RandomQuotesApp {
    constructor() {
        this.randomQuoteBtn = document.getElementById("random-quote-btn");
        this.randomQuoteBtnAPI = document.getElementById(
            "random-quote-api-btn",
        );
        this.quoteTextElement = document.getElementById("quote-text");
        this.quoteAuthorElement = document.getElementById("quote-author");
        this.currentQuote = null;

        this.init();
    }

    displayCurrentQuote() {
        this.quoteTextElement.textContent = this.currentQuote.text;
        this.quoteAuthorElement.textContent = this.currentQuote.formatAuthor();
    }

    setCurrentQuote(quote) {
        if (quote instanceof Quote) {
            this.currentQuote = quote;
            this.displayCurrentQuote();
        }
    }
    getRandomQuote() {
        this.setCurrentQuote(RandomQuote.getRandomQuote());
    }

    // getRandomQuoteAPI() {
    //     this.randomQuoteBtnAPI.textContent = "Завантаження...";
    //     RandomQuote.getRandomQuoteAPI().then((quote) => {
    //         this.randomQuoteBtnAPI.textContent = "Генерувати via API";
    //         this.setCurrentQuote(quote);
    //     });
    // }

    async getRandomQuoteAPI() {
        this.randomQuoteBtnAPI.textContent = "Завантаження...";
        const quoteAPI = await RandomQuote.getRandomQuoteAPI();
        this.randomQuoteBtnAPI.textContent = "Генерувати via API";
        this.setCurrentQuote(quoteAPI);
    }

    init() {
        this.randomQuoteBtn.addEventListener("click", () => {
            this.getRandomQuote();
        });
        this.randomQuoteBtnAPI.addEventListener("click", () => {
            this.getRandomQuoteAPI();
        });
    }
}

export default RandomQuotesApp;
