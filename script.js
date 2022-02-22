function login(element) {
    if(element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}
function message() {
    alert("Ninja was liked!");
}

function hide(el) {
    el.remove();
}
function like(vote){
    document.querySelector(vote).innerText ++;
}