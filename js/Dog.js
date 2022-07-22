
class Dog {
    constructor(dogs) {
        Object.assign(this, dogs)
    }

    renderBadge() {
        const {hasBeenSwiped, hasBeenLiked} = this
        const reactionBadge = document.getElementById("badge")
        if(hasBeenSwiped && hasBeenLiked) {
            return reactionBadge.src = "./images/badge-like.png" 
        } else if (hasBeenSwiped && !hasBeenLiked) {
            return reactionBadge.src = "./images/badge-nope.png"
        }
    }

    setDogPic() {
        const {avatar} = this
        return document.getElementById("main-content").style.backgroundImage = `url("./${avatar}")`
    }

    setDogProfile() {
        const {name, age, bio} = this
        this.setDogPic()
        return document.getElementById("dog-info").innerHTML = `
                <h2 id="dog-name-age">${name}, ${age}</h2>
                <p id="dog-bio">${bio}</p>
        `
    }
}

export default Dog