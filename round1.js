const data = {
    0 : ["Enter your name" , "ganesh"],
    1 : ["Enter your gender?", "male"],
    2 : ["Age?" , "48"],
    3 : ["Class","vbit"],
    4 : ["something","everything"]
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
var question = document.getElementById("round1");
var incorrect = document.getElementById('incorrect');
var max = Object.keys(data).length;
console.log(max)
var questionAnswerId = getRandomInt(max);
question.innerHTML = data[questionAnswerId][0];



document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    var answer = document.getElementById("round-1").value;
    if ( answer == data[questionAnswerId][1]) {
        setTimeout(3000, alert("Congratulations, you have completed the first round"))
        window.location.replace("")
    } else {
        incorrect.innerHTML = 'Incorrect answer';
    }
})