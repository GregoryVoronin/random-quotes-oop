import quotes from "../data/quotes.js";
import MathUtils from "../utils/MathUtils.js";
import Quote from "./Quote.js";

class RandomQuote {
    static getRandomQuote() {
        const randomIndex = MathUtils.getRandomInt(quotes.length);
        const { id, text, author } = quotes[randomIndex];
        return new Quote(id, text, author);
    }

    static async getRandomQuoteAPI() {
        // https://quoteslate.vercel.app/api/quotes/random?count=10 щоб отримати масив 10ти цитат
        const url = "https://quoteslate.vercel.app/api/quotes/random";
        const options = {
            headers: { "Content-Type": "application/json; charset=utf-8" },
        };

        // NOTE: Example #1
        // const myPromise = new Promise((resolve, reject) => {
        //     fetch(url, options)
        //         .then((res) => res.json()) // json() теж Promise, тому викликаєм ще один .then далі
        //         .then((quote) => {
        //             const { id, quote: text, author } = quote;
        //             if (id && quote && author) {
        //                 resolve(new Quote(id, text, author));
        //             } else {
        //                 reject("Quote is undefinded");
        //             }
        //         });
        // });
        // return myPromise.then((res) => res).catch((err) => console.log(err));

        // NOTE: Example #2
        // return fetch(url, options)
        //     .then((res) => res.json()) // json() теж Promise, тому викликаєм ще один .then далі
        //     .then(({ id, quote: text, author }) => new Quote(id, text, author))
        //     .catch((err) => console.log(err));

        try {
            const res = await fetch(url, options);
            const json = await res.json();
            const { id, quote: text, author } = json;
            return new Quote(id, text, author);
        } catch (err) {
            console.error(err);
        }
    }
}

export default RandomQuote;
