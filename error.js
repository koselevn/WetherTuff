let screenWidth = window.innerWidth;

console.log(screenWidth)

if (screenWidth > 900) {
    let body = document.querySelector('.body')

    body.innerHTML = `
        <h2 style="color: #000">This site works on phones and tablets with a resolution of at least 900 pixels</h2>
        <p style="color: #000">Your device resolution is greater than 900 pixels</p>
    `
}