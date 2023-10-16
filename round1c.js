function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  var qst = document.getElementById("round1");
  var ans = document.getElementById("round-1");
  var incorrect = document.getElementById("incorrect");
  
  async function getDataFromFirestore() {
    const db = firebase.firestore();
    const user = await db.collection("user");
    const userRef = user.doc(localStorage.getItem('userId'));
    const userSnapshot = await userRef.get();
    const userData = userSnapshot.data();
  
    if (userData.round == 1) {
  
      const querySnapshot = await db.collection("data1c").get();
      const dataArray = querySnapshot.docs.map((doc) => doc.data());
      const questionAnswerId = getRandomInt(dataArray.length);
  
      user.doc(localStorage.getItem('userId')).set({
        r1q3 : dataArray[questionAnswerId]["question"],
        r1a3 : dataArray[questionAnswerId]["answer"]
      }, {merge : true})
      qst.innerHTML = dataArray[questionAnswerId]["question"];
  
      document.getElementById("round-1").addEventListener("keyup", (e) => {
        if (
          e.target.value.toLowerCase() ==
          dataArray[questionAnswerId]["answer"].toLowerCase()
        ) {
          document.querySelector("#submit").style.display = "block";
        } else {
          document.querySelector("#submit").style.display = "none";
        }
      });
      document.getElementById("submit").addEventListener("click", (e) => {
        e.preventDefault();
        var answer = document.getElementById("round-1").value;
        if (
          answer.toLowerCase() ==
          dataArray[questionAnswerId]["answer"].toLowerCase()
        ) {
          setTimeout(
            3000,
            alert("Congratulations, you have completed the first round")
          );
          window.location.replace("round2.html");
        } else {
          incorrect.innerHTML = "Incorrect answer";
        }
      });
    } else {
  
      const userRef = user.doc(localStorage.getItem('userId'));
      const userSnapshot = await userRef.get();
      const userData = userSnapshot.data();
      
      if (userData.round == 2) {
          window.location.href = "round2.html"
      } else if (userData.round == 3) {
          window.location.href = "round3.html"
      } else if (userData.round == 4) {
          window.location.href = "round4.html"
      }
      
      qst.innerHTML = userData.r1q3;
  
      document.getElementById("round-1").addEventListener("keyup", (e) => {
        if (
          e.target.value.toLowerCase() ==
          userData.r1a3.toLowerCase()
        ) {
          document.querySelector("#submit").style.display = "block";
        } else {
          document.querySelector("#submit").style.display = "none";
        }
      });
      document.getElementById("submit").addEventListener("click", (e) => {
        e.preventDefault();
        var answer = document.getElementById("round-1").value;
        if (
          answer.toLowerCase() ==
          userData.r1a3.toLowerCase()
        ) {
          setTimeout(
            3000,
            alert("Congratulations, you have completed the first round")
          );
          window.location.replace("round2.html");
        } else {
          incorrect.innerHTML = "Incorrect answer";
        }
      });
    }
  }
  getDataFromFirestore();
  