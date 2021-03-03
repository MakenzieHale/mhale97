/* Animation

const squareElement = document.getElementById('square');
let angle = 0;

setInterval( () => {
    angle = (angle + 2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`

}, 5000/60);
*/


/*request animation frame*/

const squareElement = document.getElementById('square');
let angle = 0;

function rotate() {
    angle = (angle +2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}
const id = requestAnimationFrame(rotate);