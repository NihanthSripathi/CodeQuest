document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    var answer = document.getElementById("round-1").value;
    if ( answer == '') {
        window.location.replace("round3.html")
    }
})