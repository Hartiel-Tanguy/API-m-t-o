//first
let firstweather = document.querySelector('.firstweather')
let section1 = document.querySelector('.section1')
let main1 = document.querySelector('.main1')
let footer = document.querySelector('.footer1')
let header = document.querySelector('.header')
let label = document.querySelector('.label1')



function weather() {
    
    let names = firstweather.value
    
    
    
 fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + names + '&lang=fr&units=metric&cnt=40&appid=c420c98c168e27c506b5bafa5d4d72e1')
        .then(resp => resp.json())
        .then(data => {
            
            let datas = data.list
            let h2 = document.createElement('h2')
            header.appendChild(h2)
            
            h2.innerText = data.city.name
            section1.style.backgroundImage = "url('https://source.unsplash.com/1000x700/?" + firstweather.value + "')"
           
            for (let i = 0; i < datas.length; i++) {
                let meteo = {
                    wind: datas[i].wind.speed,
                    icon: "http://openweathermap.org/img/w/" + datas[i].weather.map(icon => icon.icon).join(' ') + ".png",
                    weather: datas[i].weather.map(icon => icon.description).join(' '),
                    date: datas[i].dt_txt,
                    temp: datas[i].main.temp,
                    humidity: datas[i].main.humidity,

                }
              
                addHtml(meteo)
                firstweather.value = ""
                

            }


        })

}

function addHtml(data) {



    let div = document.createElement('div')

    main1.appendChild(div)
    let img = document.createElement('img')
    div.appendChild(img)
    img.src = data.icon;
    let weather = document.createElement('caption')
    div.appendChild(weather)
    weather.innerText = data.weather;
    let temp = document.createElement('p')
    div.appendChild(temp)
    temp.innerText = data.temp + "°C";
    let humidity = document.createElement('p')
    div.appendChild(humidity)
    humidity.innerText = "humidité: " + data.humidity + "%";
    let wind = document.createElement('p')
    div.appendChild(wind)
    wind.innerText = "vent: " + data.wind;
    let date = document.createElement('p')
    div.appendChild(date)
    date.innerText = data.date

}

firstweather.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        if(firstweather.value===""){
            alert('empty')
        }
        else{
        weather()
         header.innerHTML = ""
          main1.innerHTML = ""
        }
    }
})


let remove = document.createElement('button')
remove.className="remove1"
footer.appendChild(remove)
remove.innerText = "remove"
remove.addEventListener('click', (e) => {
    let b = e.target.parentElement.parentElement.children[1].firstChild
    let c = e.target.parentElement.parentElement.children[2]
    if (b) {
        b.remove();
    }

    
    c.textContent = ""



})
