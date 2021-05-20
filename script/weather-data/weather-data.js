// const proxyURL = 'http://cors-anywhere.herokuapp.com/';
let requestURL = 'https://weather-app-soliton-api.glitch.me/api/all-time-zones';
let nextFiveURL = 'https://weather-app-soliton-api.glitch.me/api/hourly-forecast';

/** 
 * To fetch city details
*/
export async function gettingData(){
    try{
        const response = await fetch(requestURL,{method: 'GET'});
        const weatherInfo = await response.json();
        return weatherInfo;
    }catch{
        console.log('error occured');
        console.error(error);
    }
}

/** To get next five hours of a particular city
 * 
 * @param {string} city_Date_Time_Name - consists of date, time and city
*/
export async function gettingNextFiveHrs(city_Date_Time_Name) {
    try{
        const response = await fetch(nextFiveURL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "city_Date_Time_Name": city_Date_Time_Name,
                "hours": 5
           })
           
        });
        const nextFive = await response.json();
        return nextFive;
    }catch(error){
        console.log('error occured');
        console.error(error);
    }    
}
