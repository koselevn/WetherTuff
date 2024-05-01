
const watherKyiv = document.querySelector('#kyiv')

async function loadkyiv(e) {
    watherKyiv.innerHTML = `
    <div class="wether-loading">
        <img class="loading-gif" src="https://usagif.com/wp-content/uploads/loading-63.gif" alt="loading...">
    </div>`

    const server = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=2e7b77cd4e5b7d331f4b394ad1c4a4e8`
    const response = await fetch(server, {
        method: 'GET',
    })
    const responseResult = await response.json()

    if (response.ok) {
        getKyiv(responseResult)
    } else {
        watherKyiv.innerHTML = '<div class="get-error">Помилка! Спробуйте пізніше, або перевірте правильність вводу!</div>'// responseResult.message
    }
}

function getKyiv(data) {
    const location = data.name
    const temp = Math.round(data.main.temp)
    const feelsLike = Math.round(data.main.feels_like)
    const weatherStatus = data.weather[0].main
    const weatherIcone = data.weather[0].icon

    const template = `
    <div class="kyiv-main-info">
        <div class="kyiv-city">${location}</div>
        <img class="kyiv-img" src="https://openweathermap.org/img/w/${weatherIcone}.png" alt="img">
    </div>
    <div class="kyiv-first-div">
        <div class="kyiv-temp">${temp} C°</div>
        <p onclick="moreKyiv()" class="kyiv-more">дета...</p>
    </div>`
    
    watherKyiv.innerHTML = template 
}

if (watherKyiv) {
    loadkyiv()

}

function moreKyiv() {
    cityLocation = 'Kyiv'
    loadWether()
}