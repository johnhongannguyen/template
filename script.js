let data = [];

// show new quote
function newQuote() {
    // pick a random code
    const quote = data[Math.floor(Math.random() * data.length)];
    console.log(quote)
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

// on Load
getQuotes()