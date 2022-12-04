const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["pilt1.jpeg", "pilt2.jpeg", "pilt3.jpeg", "pilt4.jpg"];


myButton.addEventListener('click', changeImage);

function changeImage() {

    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    

    image.src = "images/" + images[randomIndex];
}