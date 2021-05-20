"use strict"
import { timer,date } from '../helpers/top-helpers/date-and-time.js';
import { timelineValues } from '../helpers/top-helpers/timeline.js';
import { CityClass,CityProto } from '../weather-classes/weather-classes.js';
import { gettingNextFiveHrs,gettingData } from '../weather-data/weather-data.js';  //-----> fetch method
// import { gettingData,gettingNextFiveHrs } from '../weather-data/weather-data-xhr.js'; // -----> XMLHttpRequest method

//variables declaration
const cities = document.getElementById('cities'); 
const citySelection = document.getElementById('city');
const city_img = document.getElementById("city-img");
const temp_C = document.getElementById('tempC');
const humidity = document.getElementById('hum');
const tempF = document.getElementById('tempF');
const precipitation = document.getElementById('preci');
const meridian = document.getElementById("imgAmPm");
const nextFiveHrs = document.getElementById("next-five-hrs");
const tempLine = document.getElementById("temp-line");
const iconsLine = document.getElementById("icons-timeline");
const verticalLine = document.getElementById("vertical-line");
const weatherInfo = await gettingData();

//top section
if(cities)
for(let i=0; i<weatherInfo.length; i++){
    cities.innerHTML += `<option value="${weatherInfo[i].cityName}">${weatherInfo[i].cityName}</option>`;
}

citySelection.addEventListener('change', async (event) => {
    event.preventDefault();
    const cityValue = event.target.value;
    const ind = weatherInfo.findIndex((city) => (city.cityName == cityValue));
    const citynames = weatherInfo[ind];

    // Class
    const city = new CityClass(citynames);   
    // function protoype
    const cityProto = new CityProto(citynames.cityName,citynames.dateAndTime,citynames.timeZone,citynames.temperature,citynames.humidity,citynames.precipitation,citynames.nextFiveHrs);  

    if(ind in weatherInfo){
        //meridian icon
        const amPm = ((city.dateAndTime).split(", ")[1]).slice(-2).toLowerCase();
        meridian.src = `assets/general-images-icons/${amPm}State.svg`;

        //Changing the city image
        city_img.src = `assets/icons-for-cities/${cityValue.toLowerCase()}.svg`;

        //Changing the grid values
        const tempInF = cityProto.toFahrenheit();
        temp_C.innerHTML = `${city.temperature}`;
        humidity.innerHTML = `${city.humidity}`;
        tempF.innerHTML = `${tempInF} F`;
        precipitation.innerHTML = `${city.precipitation}`;

        //Time and date
        const dateTime = (city.dateAndTime);
        timer(dateTime);
        date(dateTime);

        //Changing Timeline values
        const temp = city.temperature;
        const nextFive = await gettingNextFiveHrs(`${city.dateAndTime}, ${city.cityName}`);
        const nextFiveTemp = nextFive.temperature;
        timelineValues(dateTime,temp,nextFiveTemp,nextFiveHrs,tempLine,iconsLine,verticalLine);
    }
    else{
        console.log("cities not found");
        city.title = "Please enter a valid city name";
    }
});

