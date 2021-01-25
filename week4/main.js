//Week 4 example chapter 8 readings.

const form =document.forms[0];

/*
The above is equivalent to const form = document.getElementsByTagname('form')[0];

can also use const form = document.forms.search;
*/
//focus event
const input = form.elements.searchInput;

//input.addEventListener('focus', () => alert ('focused'),false);


//blur event

//input.addEventListener('blur',() => alert('blurred'), false);

//change event - only occurs if value within input is changed

//input.addEventListener('change', () => alert('changed'), false);

// submitting form

const submit = document.forms['search'];
form.addEventListener('submit', search, false);

/*function search(){
    alert('Form Submitted');
    event.preventDefault();
}
*/
// above code edited to alert user what was searched for

function search(event) {
    alert(`You searched for: ${input.value}`);
    event.preventDefault();
}

//set value for input using JS

input.value = 'Search Here';

//get rid of value when user clicks in input field

input.addEventListener('focus', function(){
    if (input.value === 'Search Here'){
        input.value == ' ';
    }
}, false);

input.addEventListener('blur', function(){
    if ( input.value === ' '){
        input.value = 'Search Here';
    }},false);

