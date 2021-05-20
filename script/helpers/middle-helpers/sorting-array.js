/** this function will sort the array based on temperature, humidity and precipitation.
 * @param {Array} dataArray - stores the details of each cities.
 */

export function tempSort(dataArray){
    return dataArray.sort((a,b) => (parseInt(b.temperature) - parseInt(a.temperature)));
}

export function precipitationSort(dataArray){
    return dataArray.sort((a,b) => (parseInt(b.precipitation) - parseInt(a.precipitation)));
}

export function humiditySort(dataArray){
    return dataArray.sort((a,b) => (parseInt(b.humidity) - parseInt(a.humidity)));
}

export function contSort(continent,comp){
    return continent.sort((a,b) => {
        if(a > b){
            return comp;
        }
        else{
            return -comp;
        }
    });
}

export function contTempSort(temp, comp){
    return temp.sort((a,b) => {
        if(parseInt(a.temperature) > parseInt(b.temperature)){
            return comp;
        }
        else{
            return -comp;
        }
    });
}