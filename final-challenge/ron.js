const spinner = document.querySelector('#js-spinner');
const newQuoteButton = document.querySelector('#new-quote');
const twitterButton = document.querySelector('#tweet');

newQuoteButton.addEventListener('click', getQuote);


// url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes"

const URL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

async function getQuote(){
    //remove classlist to allow the spinner to become visible
    spinner.classList.remove('hidden');

    newQuoteButton.disabled = true;

    try{
        const response = await fetch(URL)
        if(!response.ok){
            throw Error(response.statusText)
        }

        const json = await response.json();
        checkQuote(json);
        displayQuote(json);
        setTweetButton(json);

    } 
     finally {
        newQuoteButton.disabled = false;
        //add class of hidden back in
        spinner.classList.add('hidden');
    }
}
function displayQuote(quoteString){
    const quoteText = document.querySelector('#text-quote');
    quoteText.textContent = quoteString;
}

//allow user to tweet quote

function setTweetButton(quote) {
    twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote} - Ron Swanson`);
}

//avoid duplicate quotes

var pastQuotes =[];

function checkQuote (data) {
    if(pastQuotes.includes(data[0])) {
        return fetch(URL).then(getJSON).then(checkQuote);
    }

    if (pastQuotes.length === 50){
        pastQuotes = [];
    }
    pastQuotes.push(data[0]);

    return data[0];
}
getQuote();




