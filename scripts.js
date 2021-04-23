 import './styles.css';
 import {links} from './data.js';


const weather = (() => {

    const cityName = document.querySelector(".city-name");
    const desc = document.querySelector(".description");
    const icon = document.querySelector(".weather-icon");
    const tempOutput = document.querySelector(".temp");
    const locationInput = document.querySelector(".text-input");
    const weatherForm = document.querySelector(".weather-search");
    let weatherData;
    
    //get current weather function
    async function getCurrentWeather(location) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=d55986fd6fc9347243af3c997d2c2ea2`, {mode: 'cors'});
            const dayWeatherData = await response.json();

            let lat = await dayWeatherData.coord.lat;
            let long = await dayWeatherData.coord.lon;
            await console.log(dayWeatherData);
            await setIcon(dayWeatherData);

            await getHourlyWeather(lat, long);
        
            let fahr = parseInt(dayWeatherData.main.temp);

            tempOutput.textContent = fahr + " °F";

            await helpers.chooseImage(dayWeatherData);
        
        } catch(err) {
            console.log(err);
            alert("sorry we could not find that city. please check your spelling");
        }
    }
            getCurrentWeather("seattle");

    //get hourly weather function
    async function getHourlyWeather(lat, long) {
        helpers.deleteHourlyElements();
        helpers.deleteWeeklyElements();

        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely&units=imperial&appid=d55986fd6fc9347243af3c997d2c2ea2`, {mode: 'cors'});
        weatherData = await response.json();
        await console.log(weatherData);
        // await console.log(weatherData.weather[0].main);

        await helpers.createHourlyElement(weatherData);
        await helpers.createWeeklyElement(weatherData);

        await helpers.eightElements(weatherData);

        


    }
    
    //set icon and description and name
    function setIcon(weatherObj) {
        let id = weatherObj.weather[0].icon;
        let description = weatherObj.weather[0].description;
        icon.src = `http://openweathermap.org/img/wn/${id}@2x.png`
        desc.textContent = description;
        cityName.textContent = weatherObj.name;

        

    }

    function getNewWeather(e) {
        e.preventDefault();
        let place = locationInput.value;
        getCurrentWeather(place);
    }

    weatherForm.onsubmit = getNewWeather;

    return {
        weatherData
    }


})()
    

const helpers = (() => {

    const hourContainer = document.querySelector(".hourly-container");
    const weekContainer = document.querySelector(".weekly-container");
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let images = links;

    function kToF(kelvin) {
        let fahr = 9 / 5 * (kelvin - 273) + 32;
        return fahr;
    }

    function getCurrentTime() {
        let d = new Date();
        let hours = d.getHours();
        let day = d.getDay();
        let tomorrow = d++;
        if(tomorrow > 6) {tomorrow = 0;};
        console.log(day);
        console.log(hours);
        //console.log(typeof hours);
        return {
            hours,
            tomorrow
        }
    }
    //getCurrentTime();

    function createHourlyElement(myWeatherData) {
        let hourlyDescription = document.querySelector('.hourly-description');
        let hourlyIcon = document.querySelector('.hourly-icon');
        let theHour = document.querySelector(".hourly-name");
        let hourlyDiv = document.querySelector(".hourly-temp");
        console.log(hourlyDiv);
        //console.log(myWeatherData);
        hourlyDiv.textContent = parseInt(myWeatherData.hourly[0].temp) + " °F";
        theHour.textContent = getCurrentTime().hours;
        hourlyIcon.src = `http://openweathermap.org/img/wn/${myWeatherData.hourly[0].weather[0].icon}@2x.png`;
        hourlyDescription.textContent = myWeatherData.hourly[0].weather[0].description;
    }

    function createWeeklyElement(myWeatherData) {
        let weeklyDescription = document.querySelector('.weekly-description');
        let weeklyIcon = document.querySelector('.weekly-icon');
        let theDay = document.querySelector(".weekly-name");
        let weeklyDiv = document.querySelector(".weekly-temp");
        console.log(weeklyDiv);
        //console.log(myWeatherData);
        weeklyDiv.textContent = parseInt(myWeatherData.daily[1].temp.max) + " °F";
        theDay.textContent = days[getCurrentTime().tomorrow];
        weeklyIcon.src = `http://openweathermap.org/img/wn/${myWeatherData.daily[1].weather[0].icon}@2x.png`;
        weeklyDescription.textContent = myWeatherData.daily[1].weather[0].description;
    }

    function deleteHourlyElements() {
        const existingHourlies = document.querySelectorAll(".hourly");
        if(existingHourlies.length > 1) {
            for(let i = 1; i < existingHourlies.length; i++) {
                existingHourlies[i].remove();
            }
        }
    }

    function deleteWeeklyElements() {
        const existingWeeklies = document.querySelectorAll(".weekly");
        if(existingWeeklies.length > 1) {
            for(let i = 1; i < existingWeeklies.length; i++) {
                existingWeeklies[i].remove();
            }
        }
    }

    function eightElements(myWeatherData) {
        let hourNode = document.querySelector(".hourly");
        let weekNode = document.querySelector(".weekly");
        let now = getCurrentTime().hours;
        let day =getCurrentTime().tomorrow;
        for(let i = 1; i <= 13; i++) {
            let cloned = hourNode.cloneNode(true);
            let time = now + i
            if(time > 24) {time -= 24};
            cloned.childNodes[1].textContent = time;
            cloned.childNodes[3].src = `http://openweathermap.org/img/wn/${myWeatherData.hourly[i - 1].weather[0].icon}@2x.png`
            cloned.childNodes[5].textContent = parseInt(myWeatherData.hourly[i - 1].temp) + " °F";
            cloned.childNodes[7].textContent = myWeatherData.hourly[i-1].weather[0].description;
            hourContainer.appendChild(cloned);
        }
        for(let i = 1; i <= 6; i++) {
            let cloned = weekNode.cloneNode(true);
            let time = day + i;
            if(time > 6) {time -= 6};
            cloned.childNodes[1].textContent = days[time];
            cloned.childNodes[3].src = `http://openweathermap.org/img/wn/${myWeatherData.daily[i + 1].weather[0].icon}@2x.png`
            cloned.childNodes[5].textContent = parseInt(myWeatherData.daily[i + 1].temp.max) + " °F";
            cloned.childNodes[7].textContent = myWeatherData.daily[i  + 1].weather[0].description;
            weekContainer.appendChild(cloned);
        }
    }

    function chooseImage(weatherData) {
        console.log(images);
        let imgBack = document.querySelector(".city-background");
        let descriptor = weatherData.weather[0].description;
        console.log(weatherData);
        console.log(descriptor);
        descriptor = descriptor.toLowerCase();
        if(weatherData.weather[0].icon.includes("n")) {
            imgBack.style.backgroundImage = `url(${images[7].source})`;
        } else if(descriptor == "clear sky") {
            imgBack.style.backgroundImage = `url(${images[0].source})`;
        } else if (descriptor == 'few clouds' || descriptor == 'scattered clouds') {
            imgBack.style.backgroundImage = `url(${images[1].source})`;
        } else if (descriptor == "broken clouds") {
            imgBack.style.backgroundImage = `url(${images[2].source})`;
        } else if (descriptor == 'shower rain' || descriptor == 'rain') {
            imgBack.style.backgroundImage = `url(${images[3].source})`;
        } else if (descriptor == "thunderstorm") {
            imgBack.style.backgroundImage = `url(${images[4].source})`;
        } else if (descriptor == "snow") {
            imgBack.style.backgroundImage = `url(${images[5].source})`;
        } else if (descriptor == "snow") {
            imgBack.style.backgroundImage = `url(${images[6].source})`;
        }
         else {
            imgBack.style.backgroundImage = `url(${images[1].source})`;
        }
    }

    //createHourlyElement();

    return {
        kToF,
        createHourlyElement,
        createWeeklyElement,
        eightElements,
        deleteHourlyElements,
        deleteWeeklyElements,
        chooseImage
    }

})()
    
// getCityImage();
