const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    event.preventDefault();
    button.classList.add("start-animation");

    setTimeout(() => {
        button.classList.remove("start-animation");
    }, 800);
})