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

function renderAfterAction(action) {
    document.getElementById("dog--avatar-container").innerHTML += currentDog.setSwipedHtml()
    isWaiting = true
    setTimeout(()=> {     
        if(dogsNumberArray.length > 0) {
            currentDog = getNextDog()
            render()
            action == "like" ? document.getElementById("button--like").classList.remove('button--like') : document.getElementById("button--reject").classList.remove('button--reject');
            isWaiting = false
        } else { 
            endTinder()
        }
    }, 1000)
}

function like() {
    if(!isWaiting){
        document.getElementById("button--like").classList.add('button--like')
        currentDog.like()
        renderAfterAction("like")
    }
}

function reject() {
    if(!isWaiting){
        document.getElementById("button--reject").classList.add('button--reject');
        currentDog.reject()
        renderAfterAction("reject")
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
document.getElementById("button--like").addEventListener("click", like)
