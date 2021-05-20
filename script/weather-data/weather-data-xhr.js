const proxyURL = 'http://cors-anywhere.herokuapp.com/';
let requestURL = 'https://weather-app-soliton-api.glitch.me/api/all-time-zones';
let nextFiveURL = proxyURL + 'https://weather-app-soliton-api.glitch.me/api/hourly-forecast';

/** 
 * To fetch city details
*/
export function gettingData(){
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET',requestURL);
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = (() => {
            resolve(xhr.response);
        });
        xhr.onerror = ((error) => {
            reject(error);
        });
    });
}

/** To get next five hours of a particular city
 * 
 * @param {string} city_Date_Time_Name - consists of date, time and city
*/
export function gettingNextFiveHrs(city_Date_Time_Name){
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open('POST',nextFiveURL);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');
        const data = {
            "city_Date_Time_Name": city_Date_Time_Name,
            "hours": 5
        }
        xhr.send(JSON.stringify(data));
        xhr.onload = (() => {
            resolve(xhr.response);
        });
        xhr.onerror = ((error) => {
            reject(error);
        });
    });
}