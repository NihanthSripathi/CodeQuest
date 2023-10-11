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
var question = document.getElementById("round3");
var incorrect = document.getElementById('incorrect');
var max = Object.keys(data).length;
console.log(max)
var questionAnswerId = getRandomInt(max);
question.innerHTML = data[questionAnswerId][0];

var answer = document.getElementById("round-3")
document.getElementById("round-3").addEventListener('keyup', (e) => {
    if (e.target.value.toLowerCase() == data[questionAnswerId][1].toLowerCase() ) {
        console.log(e.target.value)
        document.querySelector('#submit').style.display = 'block';
    }
    else {
        document.querySelector('#submit').style.display = 'none';
    }
})


document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    var answer = document.getElementById("round-3").value;
    if ( answer == data[questionAnswerId][1]) {
        setTimeout(3000, alert("Congratulations, you have completed the first round"))
        window.location.replace("round4.html")
    } else {
        incorrect.innerHTML = 'Incorrect answer';
    }
})
