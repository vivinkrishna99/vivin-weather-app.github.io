/** used to find type of weather
 * @param {integer} tem - temperature in celsius.
 */

export function typeOfWeather(tem){
    tem = parseInt(tem);
    if(tem >= 29)
        return `sunnyIcon`;
    else if(tem >= 23 && tem < 29)
        return `cloudyIcon`;
    else if(tem >= 18 && tem <= 22)
        return `windyIcon`;
    else if(tem >= 6 && tem < 18)
        return `rainyIcon`;
    else
        return `snowflakeIcon`;
}