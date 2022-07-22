import dogs from './data.js'
import Dog from './Dog.js'

const badge = document.getElementById("badge")
const likeBtn = document.getElementById("button-like")
const dislikeBtn = document.getElementById("button-dislike")
const dataLength = dogs.length
let dogDisplayed = 0
let dogToRender

likeBtn.addEventListener("click", () => {
    dogToRender.hasBeenLiked = true
    afterClick()
})

dislikeBtn.addEventListener("click", () => {
    dogToRender.hasBeenLiked = false
    afterClick()
})

function afterClick() {
    badge.style.display = "block"
    dogToRender.hasBeenSwiped = true
    dogToRender.renderBadge()
    setTimeout(() => {
        badge.style.display = "none"
        dogDisplayed += 1
        renderApp(dogDisplayed, dataLength)
    }, 1500)
}

function renderApp(dogNum, dogListLength) {
    if (dogNum < dogListLength) {
        dogToRender = new Dog(dogs[dogNum])
        dogToRender.setDogProfile()
    } else if (dogNum >= dogListLength) {
        dogDisplayed = 0
        renderApp(dogDisplayed, dataLength)
    }
    
}

renderApp(dogDisplayed, dataLength) //initially renders 1st dog's profile