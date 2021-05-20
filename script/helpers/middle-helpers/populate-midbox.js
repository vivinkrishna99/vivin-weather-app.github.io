import { date } from '../top-helpers/date-and-time.js';

/** funtion to fill the content in the city cards
 * @param {Object} cities - having details of the cities 
 * @param {string} weatherIcon - specify the type of icon.
 * */ 
export function midBoxCityContents(cities,weatherIcon,card_box){
    const {cityName,temperature,humidity,precipitation,dateAndTime} = cities;  // destructuring assignments
    let time = dateAndTime.split(", ")[1];
    card_box.innerHTML +=`<div class="cards"><div class="top">
                                <p>${cityName}</p>
                                <p><img src="assets/weather-icons/${weatherIcon}.svg" alt="">${temperature}</p>
                            </div>
                            <ul>
                                <li>${time.slice(0,time.length - 6) + time.slice(time.length-3)}</li>
                                <li>${date(dateAndTime.split(", ")[0])}</li>
                                <li><img src="assets/weather-icons/humidityIcon.svg" alt=""><span style="font-weight: lighter; margin-left: 7px;">${humidity}</span></li>
                                <li><img src="assets/weather-icons/precipitationIcon.svg" alt=""><span style="font-weight: lighter; margin-left: 7px;">${precipitation}</span></li>
                            </ul>
                            <div class="card-city-image">
                                <img src="assets/icons-for-cities/${cityName}.svg" alt="">
                            </div></div>`;
    
}