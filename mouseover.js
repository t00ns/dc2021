const boop = document.querySelector("#boop")

boop.addEventListener("mousemove", (e) => {
    boop.style.backgroundPositionX = -e.offsetX + "px"
    boop.style.backgroundPositionY = -e.offsetY + "px"
})