let display = document.getElementById("display")

function insert(value) {
    display.innerHTML += value
}
function epuals() {
    display.innerHTML = eval(display.innerHTML)
}
function cleaning() {
    display.innerHTML = null
}