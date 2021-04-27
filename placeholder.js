console.clear()
// only change code below this line

document.getElementById("getText").addEventListener("click", getText);

var temps = [];

function getText() {
    // fetch('tx.txt')
    // .then(function(res) {
    //     return res.text();
    // })
    // .then(function(data) {
    //     document.body.innerHTML += data;
    // })

    let count = document.getElementById("count").value;

     if (eval(count) >= 1 && count.trim() != "") {
        fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then((res) => res.json())
        .then((data) => temps.push(`<h1>${data.title}</h1>
        <p>By User ${data.userId}</p>`))
    } else {
        console.log('hmm');
    }

    console.log(temps)

}
