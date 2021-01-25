const form = document.forms['hero'];

const label = form.querySelector('label');
const error = document.createElement('div');

error.classList.add('error');
error.textContent = '! Your name is not allowed to start with an X.';
label.append(error);

function validateInline(){
    const heroName = this.value.toUpperCase();
    if (heroName.startsWith('X')){
        error.style.display = 'block';
    } else{
        error.style.display = 'none';
    }
}

form.addEventListener('submit', makeHero, false);
//event listener invokes the makeHero() function when form is submitted. 
//function will return an object based on the information provided in the form.

/*form.addEventListener('submit',validate,false);

function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X'){
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}*/

function makeHero(event) {
    event.preventDefault();

    const hero ={};

    hero.name = form.heroName.value; // create a name property based on the input field's value

    hero.realName = form.realName.value;
    hero.powers= [];
    for (let i = 0; i< form.powers.length; i++){
        if (form.powers[i].checked){
            hero.powers.push(form.powers[i].value);
        }
    }
    hero.age = form.age.value;

    form.city;
    hero.city = form.city.value
    hero.origin = form.origin.value;

    alert(JSON.stringify(hero)); //convert object to JSON string and display in alert dialog

    return hero;
}




 

