"use strict"
import { toScrollBoxes } from '../helpers/middle-helpers/scroll-mid-boxes.js';
import { cityBoxDisplay } from '../helpers/middle-helpers/midbox-content.js';
import { SUNNY_CITIES,SNOWY_CITIES,RAINY_CITIES } from '../constants/weather-app-constants.js';

//variable selection
const sunnyIcon = document.getElementById("sunny-cities");
const snowyIcon = document.getElementById("snowy-cities");
const rainyIcon = document.getElementById("rainy-cities");
const displayTop = document.getElementById("display-top");
const card_box = document.getElementById('card-box');
const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

//Scroll function
toScrollBoxes(buttonRight,buttonLeft,card_box);

cityBoxDisplay(displayTop,SUNNY_CITIES,card_box);
// function to varry active icon
function varryActiveIcon(currentWeather,remainingWeather1,remainingWeather2){
    currentWeather.className = 'active-icon';
    remainingWeather1.className = '';
    remainingWeather2.className = '';
}

// event listners for all inputs
let userSelectedWeather=SUNNY_CITIES;
sunnyIcon.addEventListener('click',() =>{
    userSelectedWeather=SUNNY_CITIES;
    varryActiveIcon(sunnyIcon,snowyIcon,rainyIcon);
    cityBoxDisplay(displayTop,SUNNY_CITIES,card_box);
});

snowyIcon.addEventListener('click',() =>{
    userSelectedWeather=SNOWY_CITIES;
    varryActiveIcon(snowyIcon,sunnyIcon,rainyIcon);
    cityBoxDisplay(displayTop,SNOWY_CITIES,card_box);
});

rainyIcon.addEventListener('click',() =>{
    userSelectedWeather=RAINY_CITIES;
    varryActiveIcon(rainyIcon,snowyIcon,sunnyIcon);
    cityBoxDisplay(displayTop,RAINY_CITIES,card_box);
});

displayTop.addEventListener('input', (e)=>{
    cityBoxDisplay(e.target,userSelectedWeather,card_box);
});