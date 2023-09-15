const count = document.getElementById("counter");
//console.log(count.innerText)
function countUp() {
    count.innerText ++
};
document.addEventListener("DOMContentLoaded", (e) => {
    intervalID = setInterval(countUp, 1000);
});

const minus = document.getElementById("minus");
minus.addEventListener("click", () => {
    count.innerText --
});

const plus = document.getElementById("plus");
plus.addEventListener("click", () => {
    count.innerText ++
});

const heart = document.getElementById("heart");
const comments = document.getElementById("list")
let likes = 0
heart.addEventListener("click", () => {
    likes ++;
    comments.innerText = `You liked ${count.innerText}, ${likes} times`;
    
});

const pause = document.getElementById("pause");
pause.addEventListener("click", () => {
    clearInterval(intervalID);
    buttons.forEach(disable);
    pause.innerText = "resume";
    }
)
pause.addEventListener("dblclick", () => {
    intervalID = setInterval(countUp, 1000);
    buttons.forEach(enable);
    pause.innerText = "pause"
    }
)

const buttons = document.querySelectorAll("button");

function disable(button) {
    if (button.id != "pause") {
        button.setAttribute("disabled", true)
    }
}
function enable(button) {
    button.removeAttribute("disabled")
}

const form = document.querySelector("#comment-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addComment(e.target.comment_input.value)
})
function addComment(comment) {
    let p = document.createElement("p");
    p.textContent = comment;
    form.appendChild(p)
}




