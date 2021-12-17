const quotes = [
    {
        quote: "Formal education will make you a living, Self education will make you a fortune",
        author: "Jim Rohn",
    },
    {
        quote:"Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author:"Winston Churchill",
    },
    {
        quote:"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author:"Albert Schweitzer",
    },
    {
        quote:"Success is the sum of small efforts - repeated day in and day out.",
        author:"Robert Collier",
    },
    {
        quote:"Motivation is what gets you started. Habit is what keeps you going.",
        author:"Jim Ryun",
    },
    {
        quote:"Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
        author:"St. Jerome",
    },
    {
        quote:"It always seems impossible until it's done.",
        author:"Nelson Mandela",
    },
    {
        quote:"When something is important enough, you do it even if the odds are not in your favor.",
        author:"Elon Musk",
    },
    {
        quote:"If you can dream it, you can do it.",
        author:"Walt Disney",
    },
    {
        quote:"Don't watch the clock; do what it does. Keep going.",
        author:"Sam Levenson",
    },
    {
        quote:"Start where you are. Use what you have. Do what you can.",
        author:"Arthur Ashe",
    },
];

const qoute = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

qoute.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;