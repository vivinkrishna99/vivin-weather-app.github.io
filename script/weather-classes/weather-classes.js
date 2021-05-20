/** class declaration - top section
 * 
 * @class CityClass
 */

export class CityClass{
    constructor(data){
        this.cityName = data.cityName;
        this.dateAndTime = data.dateAndTime;
        this.temperature = data.temperature;
        this.humidity = data.humidity;
        this.precipitation = data.precipitation;
        this.nextFiveHrs = data.nextFiveHrs;
    }


    /** convert from celcius to fahrenheit.
     * 
     * @param {integer} temp - temperature in celsius.
    */
    toFahrenheit(temp){
        return (temp * 9 / 5 + 32).toFixed(0);        
    }
}


/** class declaration - top section
 * 
 * @function CityProto
 */
export function CityProto(cityName,dateAndTime,timeZone,temperature,humidity,precipitation,nextFiveHrs){
    this.cityName = cityName;
    this.dateAndTime = dateAndTime;
    this.timeZone = timeZone;
    this.temperature = temperature;
    this.humidity = humidity;
    this.precipitation = precipitation;
    this.nextFiveHrs = nextFiveHrs;      
}


/** convert from celcius to fahrenheit.
 * 
 * @param {integer} temp - temperature in celsius.
*/
CityProto.prototype.toFahrenheit = function(){
    return (parseInt(this.temperature) * 9 / 5 + 32).toFixed(0);
}

