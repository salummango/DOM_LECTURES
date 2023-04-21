function capitalizeParagraphs() {
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((p) => {
        p.textContent = p.textContent.toUpperCase();
    });
}
console.log(capitalizeParagraphs());