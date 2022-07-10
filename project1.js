let quoteBtn = document.querySelector('#newQuote');
let personalQuote = document.querySelector('.quote');
let bookAuthor = document.querySelector('.author');

const myQuotes = [
    {
        personalQuote: `"The best man always wins after loosing to the service of another"`,
        bookAuthor: `Poet Penton`,
    },
    {
        personalQuote: `"The best man always wins after loosing to the service of another"`,
        bookAuthor: `tonPoet Penton`,
    },
    {
        personalQuote: `"The best man always wins after loosing to the service of another"`,
        bookAuthor: `entPoet Penton`,
    },
    {
        personalQuote: `"always wins after loosing to the serviThe best man always wins after loosing to the service of another"`,
        bookAuthor: `elt Penton`,
    },
    {
        personalQuote: `"always wins afteThe best man r loosing to the service of another"`,
        bookAuthor: `oql Penton`,
    },
    {
        personalQuote: `"loosing to the service of anotherThe best man always wins after "`,
        bookAuthor: `PenPoet Penton`,
    },
    {
        personalQuote: `"ways wins after loosing to the The best man alservice of another"`,
        bookAuthor: `Poet Penton`,
    },
];

quoteBtn.addEventListener('click', () => {
     let random = Math.floor(Math.random()* myQuotes.length);
     personalQuote.innerText = myQuotes[random].personalQuote;
     bookAuthor.innerText = myQuotes[random].bookAuthor;
   
});
console.log(quoteBtn);