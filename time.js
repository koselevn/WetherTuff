function updateClock() {
    const timeContainer = document.querySelector('.inf-time')

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;

    timeContainer.innerHTML = `<div>${hours + ":" + minutes}</div>`
}

setInterval(updateClock, 1);


// Дата

const infDate = document.querySelector('.inf-date')

var currentDate = new Date();

var currentDate = new Date();

var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1;
var day = currentDate.getDate();

infDate.innerHTML = `<div>${day}.${month}.${year}</div>`