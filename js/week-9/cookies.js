document.cookie = 'name = Batman'

document.cookie = 'city=Gotham'

const cookies = document.cookie.split("; ");
for (crumb of cookies){
    const [key,value] = crumb.split("=");
    console.log(`The value of ${key} is ${value}`);
}

//expiry date

const expiryDate = new Date();
const tomorrow = expiryDate.getTime()+1000 *60 *60 *24;
expiryDate.setTime(tomorrow);

document.cookie = `name=Batman; expires =${expiryDate.toUTCString()}`;

//set Interval

function chant(){
    console.log('Beetlejuice!');
}
const summon = window.setInterval(chant,1000);

