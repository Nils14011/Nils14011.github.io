let Counter = 0
let firstCounter = 1
let secondCounter = 1
let first = 10
let second = 5

function myClicker() {
    Counter = Counter + secondCounter
    document.getElementById("counter").innerHTML = Math.floor(Counter);
    }

function firstUpgrade() {
    if (Counter >= first) {
        firstCounter ++
        Counter = Counter - first
        first = first * 2.2
        document.getElementById("priceCatnip").innerHTML = Math.floor(first)
        setInterval (() => {
            Counter ++
            document.getElementById("counter").innerHTML = Math.floor(Counter)
        }, 1000 / firstCounter); 
    }
}

function secondUpgrade () {
    if (Counter >= second) {
        secondCounter = secondCounter * 2
        Counter = Counter - second
        second = second * 2.2
        document.getElementById("pricePetting").innerHTML = Math.floor(second)
        document.getElementById("counter").innerHTML = Math.floor(Counter)
    }
}
