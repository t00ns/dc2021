//1. when we click the hamburger menu, run a function
//2. inside the function, add/remove the class of open
//3. make sure link doesn't jump the page to the top

const aboutTag = document.querySelector(".info")
const infoToggle = document.querySelector("header")
const backTag = document.querySelector("#info")

infoToggle.addEventListener("click", function() {
    aboutTag.classList.toggle("open")

})

backTag.addEventListener("click", function() {
    aboutTag.classList.toggle("open")

})
