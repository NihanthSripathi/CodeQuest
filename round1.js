function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
var question = document.getElementById("round1");
var incorrect = document.getElementById('incorrect');
var max = Object.keys(data).length;
var questionAnswerId = getRandomInt(max);
question.innerHTML = data[0][questionAnswerId][0];

var answer = document.getElementById("round-1")
document.getElementById("round-1").addEventListener('keyup', (e) => {
    if (e.target.value.toLowerCase() == data[0][questionAnswerId][1].toLowerCase() ) {
        document.querySelector('#submit').style.display = 'block';
    }
    else {
        document.querySelector('#submit').style.display = 'none';
    }
})


document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    var answer = document.getElementById("round-1").value;
    if ( answer == data[0][questionAnswerId][1]) {
        setTimeout(3000, alert("Congratulations, you have completed the first round"))
        window.location.replace("round2.html")
    } else {
        incorrect.innerHTML = 'Incorrect answer';
    }
})
