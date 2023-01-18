// Remember to import the data and Dog class!
import dogsArray from "./data.js"
import Dog from "./Dog.js"

const dogsNumberArray = dogsArray.map((dog, indx) => indx)
let isWaiting = false

function getNextDog() {
    const nextDog = dogsNumberArray.shift()
    return nextDog == undefined ? {} : new Dog(dogsArray[nextDog]) 
}

function render() {
    document.getElementById("section--dog").innerHTML = currentDog.getDogHtml()
}

function renderAfterAction() {
    document.getElementById("dog--avatar-container").innerHTML += currentDog.setSwipedHtml()
    isWaiting = true
    setTimeout(()=> {     
        if(dogsNumberArray.length > 0) {
            currentDog = getNextDog()
            render()
            isWaiting = false
        } else { 
            endTinder()
        }
    }, 1000)
}

function like() {
    if(!isWaiting){
        currentDog.like()
        renderAfterAction()
    }
}

function reject() {
    console.log("clicked")
    if(!isWaiting){
        currentDog.reject()
        renderAfterAction()
    }
}

function endTinder() {
    document.getElementById("main").innerHTML = `
        <div class="end--screen">
            <h2>You have seen </br> all our mega stars</h2> 
            <p class="end--emoji">🐶</p>
            <h1>Come back tomorrow </br>for more!</h1>
        </div>` 
}

let currentDog = getNextDog()

render()

document.getElementById("button--reject").addEventListener("click", reject)
document.getElementById("button--accept").addEventListener("click", like)

// console.log(dog1.name)

// console.log(getNextDog(dogsNumber))
