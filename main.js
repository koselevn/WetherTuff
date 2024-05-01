// main cart

let cityLocation = 'Kharkiv'

function share() {
    let cityIn = document.querySelector('.header-input').value

    cityLocation = cityIn

    if (cityLocation) {
        loadWether()
        
        document.querySelector('.header-input').value = ''
    }
    
}

const watherBlock = document.querySelector('#main-cart')
const moreBlock = document.querySelector('#more-section')

async function loadWether(e) {
    watherBlock.innerHTML = `
    <div class="wether-loading">
        <img class="loading-gif" src="https://usagif.com/wp-content/uploads/loading-63.gif" alt="loading...">
    </div>`
    moreBlock.innerHTML = `
    <div class="wether-loading">
        <img class="loading-gif" src="https://usagif.com/wp-content/uploads/loading-63.gif" alt="loading...">
    </div>`

    const server = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityLocation}&appid=2e7b77cd4e5b7d331f4b394ad1c4a4e8`
    const response = await fetch(server, {
        method: 'GET',
    })
    const responseResult = await response.json()

    if (response.ok) {
        getWether(responseResult)
    } else {
        watherBlock.innerHTML = '<div class="get-error">Помилка! Спробуйте пізніше, або перевірте правильність вводу!</div>'// responseResult.message
        moreBlock.innerHTML = '<div class="get-error">Помилка! Спробуйте пізніше, або перевірте правильність вводу!</div>'// responseResult.message
    }
}

function getWether(data) {
    const location = data.name
    const temp = Math.round(data.main.temp)
    const feelsLike = Math.round(data.main.feels_like)
    const weatherStatus = data.weather[0].main
    const weatherIcone = data.weather[0].icon

    const windSpeed = data.wind.speed
    const humidity = data.main.humidity
    const sunriseTimestamp = data.sys.sunrise * 1000;
    const sunsetTimestamp = data.sys.sunset * 1000;

    // Создаем объекты даты для восхода и заката
    const sunriseDate = new Date(sunriseTimestamp);
    const sunsetDate = new Date(sunsetTimestamp);

    // Получаем строки с временем восхода и заката
    const sunriseTime = sunriseDate.toLocaleTimeString();
    const sunsetTime = sunsetDate.toLocaleTimeString();


    const template = `
    <div class="main-main-inf">
        <div class="main-city">${location}</div>
        <div class="main-status-div">
            <div class="main-status">${weatherStatus}</div>
            <img class="main-img" src="https://openweathermap.org/img/w/${weatherIcone}.png" alt="img">
        </div>
        </div>
        <div class="main-temp">${temp} C°</div>
        <div class="main-feels-abs-div">
            <div class="main-feels">Відчувається: ${feelsLike} C°</div>
            <div class="main-feels-div"></div>
            <img class="main-live-img live" src="img/live.png" alt="live">
        </div>
        </div>`
    
    watherBlock.innerHTML = template 

    const moreInf = `
            <!--viter-->
            <div class="more-div">
                <div class="more-text">Сила вітру: ${windSpeed} м/с</div>
                <img class="more-img" src="img/vitrak.png" alt="vit">
            </div>
            <!--vlaga-->
            <div class="more-div">
                <div class="more-text">Влажність: ${humidity}%</div>
                <img class="more-img" src="img/vlaga.png" alt="vit">
            </div>
            <!--vshid-->
            <div class="more-div">
                <div class="more-text">Всхід: ${sunriseTime.slice(0, 5)}</div>
                <img class="more-img" src="img/vshod.png" alt="vit">
            </div>
            <!--zakat-->
            <div class="more-div">
                <div class="more-text">Зхід: ${sunsetTime.slice(0, 5)}</div>
                <img class="more-img" src="img/zakat.png" alt="vit">
            </div>`
    
    moreBlock.innerHTML = moreInf
}

if (watherBlock) {
    loadWether()
}