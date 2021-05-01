function getWeather() {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=52.531677&lon=13.381777&exclude=current&appid=b7511ec5e3efb1944ce2e1acc70c367f&units=metric'    )
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        console.log(data);
        parseWeather(data) 
    })
}

function parseWeather(data){
    let emojis = {
        'Clear': '☀️',
        'Clouds': '☁️',
        'Rain': '🌧️',
        'Snow': '🌨️',
        'Tornado': '🌪️'
    }
    let date = ''
    let dates = document.querySelectorAll('label.date')
    for(let i in data.daily){
        date += ((new Date(data.daily[i].dt * 1000)).getDate() + '.' + ((new Date(data.daily[i].dt * 1000)).getMonth() + 1))
        dates[i].insertAdjacentHTML("beforeend", date)
        date = ''
    }

 
    let temps = document.querySelectorAll('label.temperature')
    for(let i in data.daily)
        temps[i].insertAdjacentHTML("beforeend", Math.round(data.daily[i].temp.day) + '°C')

    
    let weather = document.querySelectorAll('label.img')
    for(let i in data.daily)
        weather[i].insertAdjacentHTML("beforeend", emojis[data.daily[i].weather[0].main])
    
    
}




getWeather()

