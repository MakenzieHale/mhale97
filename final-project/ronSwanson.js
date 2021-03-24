// url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes"


//get placeholder for quote
var quote = document.querySelector("#quote");
//get the button for fetching new quotes
var button = document.querySelector("#button");
//store the API endpoint
var endpoint = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

//Get JSON data from fetch request

function getJSON (response) {
    return response.ok ? response.json() : Promise.reject(response);
}

function fetchQuote (){
fetch(endpoint)
.then(getJSON)
.then(checkQuote)
.then(showQuote)
.catch(showError);
}
button.addEventListener("click", fetchQuote);

//display the quote
function showQuote (quoteString){
    quote.textContent = quoteString;
}

//if error
function showError(){

    quote.parentNode.outerHTML = (
        "<p>" +
        "<strong>" + "sorry, there was a problem getting your Ron Swanson quote, please try again later "
        + "</strong" + "</p>"
    );
}

//avoid duplicate quotes

var pastQuotes = [];
//check if current quote is valid. If quote was among the last 50, function will recursively call itself until a new quote is found.

function checkQuote (data){
    if (pastQuotes.includes(data[0])){
        return fetch(endpoint).then(getJSON).then(checkQuote);
    }

    if(pastQuotes.length === 50) {
        pastQuotes = [];
    }
    pastQuotes.push(data[0]);

    return data[0];
}