let boop = document.getElementById('boop')

document.addEventListener('mousemove', function(e) {
    var x = e.clientX
    var y = e.clientY
    boop.style.left = x + "px"
    boop.style.top = y + "px"
})