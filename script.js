const APIkey = "85536f555b0391991722c10d44e5c55d";
const APIUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const SearchBox  = document.querySelector(".search input");
const SearchBtn  = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function CheckWeather(city){
    const response = await fetch(APIUrl + city + `&appid=${APIkey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

}

SearchBtn.addEventListener("click", ()=>{
    CheckWeather(SearchBox.value);
})

