// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    setSwipedHtml() {
        if (this.hasBeenSwiped && !this.hasBeenLiked) {
            return `<img src="./images/badge-nope.png" class="badge"/>`
        } else  {
            return `<img src="./images/badge-like.png" class="badge"/>`
        }
    }
    
    getDogHtml() {
        return `
            <div id="dog--avatar-container">
                <img src="./images/${this.avatar}" class="dog--avatar"/>
            </div>

            <div class="dog--text-container">
                <h1 class="dog--title">${this.name}, ${this.age}</h1>
                <div class="dog--description">${this.bio}</div>
            </div>
        `
    }
    
    like() {
        this.hasBeenSwiped = true;
        this.hasBeenLiked = true;
    }
    
    reject() {
        this.hasBeenSwiped = true;
        this.hasBeenLiked = false;
    }
    
}
// ${this.setSwipeIcon}
export default Dog
