import RandomQuote from "./RandomQuote.js";
import Quote from "./Quote.js";

class RandomQuotesApp {
    constructor() {
        this.randomQuoteBtn = document.getElementById("random-quote-btn");
        this.randomQuoteBtnPublicAPI = document.getElementById(
            "random-quote-public-api-btn",
        );
        this.randomQuoteBtnOwnAPI = document.getElementById(
            "random-quote-own-api-btn",
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
    getRandomQuoteHandler() {
        this.setCurrentQuote(RandomQuote.getRandomQuote());
    }

    // getRandomQuoteAPIHandler() {
    //     this.randomQuoteBtnAPI.textContent = "Завантаження...";
    //     RandomQuote.getRandomQuoteAPI().then((quote) => {
    //         this.randomQuoteBtnAPI.textContent = "Генерувати via API";
    //         this.setCurrentQuote(quote);
    //     });
    // }

    async handleRandomQuoteAPI(el, isOwnAPI = false) {
        const btn = el.currentTarget;
        const defaultText = btn.innerHTML;
        btn.textContent = "Завантаження...";
        let quoteAPI = null;
        if (isOwnAPI) {
            quoteAPI = await RandomQuote.getRandomQuoteOwnAPI();
        } else {
            quoteAPI = await RandomQuote.getRandomQuoteAPI();
        }
        btn.innerHTML = defaultText;
        this.setCurrentQuote(quoteAPI);
    }

    init() {
        this.randomQuoteBtn.addEventListener("click", () => {
            this.getRandomQuoteHandler();
        });
        this.randomQuoteBtnPublicAPI.addEventListener("click", (el) => {
            this.handleRandomQuoteAPI(el);
        });
        this.randomQuoteBtnOwnAPI.addEventListener("click", (el) => {
            this.handleRandomQuoteAPI(el, true);
        });
    }
}

export default RandomQuotesApp;
