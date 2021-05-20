/** this function will filter out the conditions for sunny cities
 * @param {Array} dataArray - stores the details of each cities.
 */
export function sunFilter(dataArray){
    return dataArray.filter((city) => (parseInt(city.temperature)>=29 &&
                            parseInt(city.humidity)<50 && 
                            parseInt(city.precipitation)>=50));
}

/** this function will filter out the conditions for snowy cities
 * @param {Array} dataArray - stores the details of each cities.
 */
export function snowFilter(dataArray){
    return dataArray.filter((city) => (parseInt(city.temperature)>=20 && 
                            (parseInt(city.temperature)<29) && 
                            (parseInt(city.humidity) >= 50) && 
                            (parseInt(city.precipitation) <= 50)));
}

/** this function will filter out the conditions for rainy cities
 * @param {Array} dataArray - stores the details of each cities.
 */
export function rainFilter(dataArray){
    return dataArray.filter((city) => (parseInt(city.temperature)<20 && 
                                      parseInt(city.humidity)>=50));
}