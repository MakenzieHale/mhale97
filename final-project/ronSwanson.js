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
.then(showQuote)
.catch(showError);
}
button.addEventListener("click", fetchQuote);

//display the quote
function showQuote (quotes){
    quote.textContent = quotes[0];
}

//if error
function showError(){

    quote.parentNode.outerHTML = (
        "<p>" +
        "<strong>" + "sorry, there was a problem getting your Ron Swanson quote, please try again later "
        + "</strong" + "</p>"
    );
}