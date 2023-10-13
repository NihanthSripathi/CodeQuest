function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var qst = document.getElementById("round2");
var ans = document.getElementById("round-2")
var incorrect = document.getElementById('incorrect');


async function getDataFromFirestore() {
    const db = firebase.firestore();

      const querySnapshot = await db.collection('data').get();
      const dataArray = querySnapshot.docs.map((doc) => doc.data());
      var questionAnswerId = getRandomInt(dataArray.length)
      qst.innerHTML = dataArray[questionAnswerId]['question']

      document.getElementById("round-2").addEventListener('keyup', (e) => {
        if (e.target.value.toLowerCase() == dataArray[questionAnswerId]['answer'].toLowerCase() ) {
            document.querySelector('#submit').style.display = 'block';
        }
        else {
            document.querySelector('#submit').style.display = 'none';
        }
    })
    document.getElementById('submit').addEventListener('click', (e) => {
        e.preventDefault();
        var answer = document.getElementById("round-2").value;
        if ( answer.toLowerCase() == dataArray[questionAnswerId]['answer'].toLowerCase()) {
            setTimeout(3000, alert("Congratulations, you have completed the second round"))
            window.location.replace("round3.html")
        } else {
            incorrect.innerHTML = 'Incorrect answer';
        }
    })
}
getDataFromFirestore()