const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById('loader');


// get quote from API

async function getQuote() {
    const proxyUrl = 'https://serene-journey-81874-8580300e1f17.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=xml&lang=en&format=json';
    try{
        showLoadingSpinner()
        const response = await fetch(proxyUrl+apiUrl);
        const data = await response.json();
        // if author is blank - add 'Unknown
       
        if(data.quoteAuthor === ''){
            authorText.innerHTML = 'Unknown'
        }else{
            authorText.innerHTML = data.quoteAuthor;

        }
        // Reduce font size for long quote
        if(data.quoteText.length > 50){
            quoteText.classList.add('long-quote');
        }else{
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerHTML = data.quoteText
        removeLoadingSpinner()

    }catch(err){
        // getQuote()
        console.log('no quote',err);
    }
}
function tweetQuote(){
    const quote = quoteText.innerHTML;
    const author = authorText.innerHTML;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl,'_blank');

}

//event listener
newQuoteBtn.addEventListener('click',getQuote);
twitterBtn.addEventListener('click',tweetQuote);


const showLoadingSpinner = () =>{
    loader.hidden = false;
    quoteContainer.hidden = true;
}

const removeLoadingSpinner= () =>{
    if(!loader.hidden){
    loader.hidden = true;
    quoteContainer.hidden =false;
    }
    
}
// on load
getQuote();