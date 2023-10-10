const data = {
    0 : ["Enter your name" , "Ganesh"]
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
var question = document.getElementById("round4");
var answer = document.getElementById("round-4").value;
var questionAnswerId = getRandomInt(6);
question.innerHTML = data[0][0];



document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    
    if ( answer == 'Ganesh') {
        window.location.replace("")
    }
})