import { typeOfWeather } from './type-of-weather.js';

/** this function will display timeline values.
 *
 */

export function timelineValues(dateTime,temp,nextFive,nextFiveHrs,tempLine,iconsLine,verticalLine){
    let timeList, tempeLine, verticalLines, time, iconLine,amPm;
    amPm = (dateTime.split(", ")[1]).slice(-2);
    timeList = `<span>NOW</span>`;
    tempeLine = `<p>${temp}</p>`;
    verticalLines = `<span>I</span>`;
    time = parseInt((dateTime.split(", ")[1]).slice(0,2),10);

    
    iconLine = `<img src="assets/weather-icons/${typeOfWeather(temp.split("°")[0])}.svg" alt="">`;

    for(let i=1;i<6;i++){
        time +=1;
        if(time > 12){
            time = 1;
            timeList += `<span>${time} ${amPm}</span>`;
        }
        else{
            if(time==12){
                (amPm == "AM") ? amPm ="PM" : amPm = "AM";
            }
            timeList += `<span>${time} ${amPm}</span>`;
        }
        tempeLine += `<p>${nextFive[i-1]}</p>`;
        iconLine += `<img src="assets/weather-icons/${typeOfWeather(nextFive[i-1])}.svg" alt="weather">`;
        
        verticalLines += `<span>I</span><span>I</span>`;
    }

    nextFiveHrs.innerHTML= timeList;
    tempLine.innerHTML= tempeLine;
    iconsLine.innerHTML= iconLine;
    verticalLine.innerHTML= verticalLines;
}