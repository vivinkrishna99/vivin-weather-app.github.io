import { gettingData } from '../../weather-data/weather-data.js';
import { tempSort,precipitationSort,humiditySort } from '../middle-helpers/sorting-array.js';
import { sunFilter,snowFilter,rainFilter } from '../top-helpers/filtering-cities.js';
import { midBoxCityContents } from '../middle-helpers/populate-midbox.js';
import { SUNNY_CITIES,SNOWY_CITIES,RAINY_CITIES } from '../../constants/weather-app-constants.js';

const button = document.querySelectorAll('.mid-buttons');
const weatherInfo = await gettingData();
let cities;
let dataArray = Object.values(weatherInfo);


/** function will display content in the boxes
 * @param {string} displayTop - document object for display top input.
 * @param {string} weatherInput - has a type of weather.
 * @param {string} card_box - document object for card container.
 */
export function cityBoxDisplay(displayTop,weatherInput,card_box){
    const displayBoxCount = displayTop.value;

    card_box.innerHTML ="";
    
    // checking which type of weather to apply
    if(weatherInput===SUNNY_CITIES){
        dataArray = tempSort(dataArray);
        cities = sunFilter(dataArray);
        (cities.length > 10)? displayTop.max = 10:displayTop.max = cities.length;
        cities = cities.filter((city,ind) => (parseInt(ind)+1 <= displayBoxCount));
        for(let i=0;i<cities.length;i++){
            midBoxCityContents(cities[i],"sunnyIcon",card_box);
        }
    }
    else if(weatherInput===SNOWY_CITIES){
        dataArray = precipitationSort(dataArray);
        cities = snowFilter(dataArray);
        (cities.length > 10)? displayTop.max = 10:displayTop.max = cities.length;
        cities = cities.filter((city,ind) => (parseInt(ind)+1 <= displayBoxCount));
        for(let i =0; i<cities.length; i++){
            midBoxCityContents(cities[i],"snowflakeIcon",card_box);
        }
    }
    else if(weatherInput===RAINY_CITIES){
        dataArray = humiditySort(dataArray);
        cities = rainFilter(dataArray);
        (cities.length > 10)? displayTop.max = 10:displayTop.max = cities.length;
        cities = cities.filter((city,ind) => (parseInt(ind)+1 <= displayBoxCount));
        for(let i =0; i<cities.length; i++){
            midBoxCityContents(cities[i],"rainyIcon",card_box);
        }
    }
    else{
        console.log("Invalid Input");
    }
}