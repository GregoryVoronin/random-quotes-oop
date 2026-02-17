import quotes from "../data/quotes.js";
import MathUtils from "../utils/MathUtils.js";
import Quote from "./Quote.js";

class RandomQuote {
    static getRandomQuote() {
        const randomIndex = MathUtils.getRandomInt(quotes.length);
        const { id, text, author } = quotes[randomIndex];
        return new Quote(id, text, author);
    }
    // https://quoteslate.vercel.app/api/quotes/random?count=10
    static getRandomQuoteAPI() {
        const url = "https://quoteslate.vercel.app/api/quotes/random";
        return fetch(url)
            .then((res) => res.json()) // json() теж Promise, тому викликаєм ще один .then далі
            .then(({ id, quote: text, author }) => new Quote(id, text, author))
            .catch((err) => console.log(err));
    }
}

export default RandomQuote;
