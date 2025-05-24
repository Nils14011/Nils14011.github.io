let Counter = 0
let firstCounter = 0
let secondCounter = 1
let thirdCounter = 0
let first = 10
let second = 5
let third = 250

function myClicker() {
    Counter = Counter + secondCounter
    document.getElementById("counter").innerHTML = Math.floor(Counter);
    }

function firstUpgrade() {
    if (Counter >= first) {
        firstCounter ++
        Counter = Counter - first
        first = first * 1.4
        document.getElementById("priceCatnip").innerHTML = Math.floor(first)
        setInterval (() => {
            Counter = Counter + 1 * firstCounter
            document.getElementById("counter").innerHTML = Math.floor(Counter)
        }, 1000); 
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

function thirdUpgrade() {
    if (Counter >= third) {
        thirdCounter ++
        Counter = Counter - third
        third = third * 1.4
        document.getElementById("priceWetfood").innerHTML = Math.floor(third)
        setInterval (() => {
            Counter = Counter + 5 * thirdCounter
            document.getElementById("counter").innerHTML = Math.floor(Counter)
        }, 1000); 
    }
}
