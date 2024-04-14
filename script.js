const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

let data = [];

// show new quote
function newQuote() {
    // pick a random code
    const quote = data[Math.floor(Math.random() * data.length)];
    // check if Author field is empty and replace with 'unknow'
    if(quote.author == "Anonymous"){
        authorText.innerHTML = 'Unknown';
    }else{
        authorText.innerHTML = quote.author;
    }

    // check Quote length to determine styling
    if(quote.text.length > 120){
        quoteText.classList.add('long-quote')
    }else{
        quoteText.classList.remove('long-quote')
    }
  
    quoteText.innerHTML = quote.text

}

// Get Quotes from API 



async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{
        const response = await fetch(apiUrl);
        data = await response.json();
        newQuote()
    }catch(error){
        // catch error here
        console.log(error)
    }
}
// Tweet Quote
function tweetQuote(){
     const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerHTML} - ${authorText.innerHTML}`;
     window.open(twitterUrl,'_blank');

}
//Event Listener
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
// on Load
getQuotes()