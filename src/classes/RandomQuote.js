import quotes from "../data/quotes.js";
import MathUtils from "../utils/MathUtils.js";
import Quote from "./Quote.js";

class RandomQuote {
    static getRandomQuote() {
        const randomIndex = MathUtils.getRandomInt(quotes.length);
        const { id, text, author } = quotes[randomIndex];
        return new Quote(id, text, author);
    }

    static getRandomQuoteAPI() {
        // https://quoteslate.vercel.app/api/quotes/random?count=10 щоб отримати масив 10ти цитат
        const url = "https://quoteslate.vercel.app/api/quotes/random";
        const options = {
            headers: { "Content-Type": "application/json; charset=utf-8" },
        };

        // return fetch(url, options)
        //     .then((res) => res.json()) // json() теж Promise, тому викликаєм ще один .then далі
        //     .then(({ id, quote: text, author }) => new Quote(id, text, author))
        //     .catch((err) => console.log(err));

        const getQuote = async (url, options) => {
            const res = await fetch(url, options);
            const json = await res.json();
            const data = await json;
            const { id, quote: text, author } = data;

            return new Quote(id, text, author);
        };
        try {
            return getQuote(url, options);
        } catch (err) {
            throw new Error("Error:", err);
        }
    }
}

export default RandomQuote;
