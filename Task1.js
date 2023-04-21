function setImagesSrc() {
    const images = document.querySelectorAll("img"); // Select all images using CSS selector
    images.forEach((img) => { // Loop through all images and set their src attribute
        img.src = "https://media.giphy.com/media/jaqvaWqpKfImQ/giphy.gif";
    });
}
console.log(setImagesSrc());