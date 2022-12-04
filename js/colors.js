const myButton = document.querySelector('button');
const myBox = document.querySelector('.box');
const colors = ["black", "cyan", "red", "green", "blue", "yellow", "violet", "pink", "purple", "aqua" ];



myButton.addEventListener('click', changeColor);

function changeColor() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    console.log(randomIndex);
    myBox.style.backgroundColor = colors[randomIndex];
}
