const apiKey = "e1b7f17ef89938f775df11b343614436";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const search = document.querySelector(".Weather input");
const button = document.querySelector(".Weather button");
const icon = document.querySelector(".images");
const Form = document.querySelector('Form');

async function weather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".HumidityValue").innerHTML = data.main.humidity + "%";
    document.querySelector(".WindSpeedValue").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".mainweather").innerHTML = Math.round(data.main.feels_like) + "°C";
    document.querySelector(".Weather").style.marginTop = "6em";
    document.querySelector(".WeatherLive").style.display = "block";
    if(data.weather[0].main == "Clouds")
    {
        icon.src = "cloudy.png";
    }
    else if(data.weather[0].main == "Clear"){
        icon.src = "sun.png";
    }
    else if(data.weather[0].main == "Rain"){
        icon.src = "raining.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        icon.src = "dizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        icon.src = "Mist.png";
    }
}
Form.addEventListener("submit",(event)=>{
    event.preventDefault();
    weather(search.value);
});
button.addEventListener("click",()=>{weather(search.value)});
