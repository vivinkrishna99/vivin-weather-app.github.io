
/** function to populate the grid
 * @param {Object} contInfo - document object for display top input.
 * @param {string} gridItems - document object reference for grid items.
 */
export function fillingGrid(contInfo,gridItems){
    const {timeZone, temperature, cityName, humidity, dateAndTime} = contInfo;
    let time = dateAndTime.split(", ")[1];
    gridItems.innerHTML += `<div class="last-grid-item">
                        <div class=last-grid-item-child1>${timeZone.split("/")[0]}</div>
                        <div class=last-grid-item-child2>${temperature}</div>
                        <div class=last-grid-item-child3>${cityName}, ${time.slice(0,time.length - 6) + time.slice(time.length-3)}</div>
                        <div class=last-grid-item-child4> <img src="assets/weather-icons/humidityIcon.svg" alt="">${humidity} </div>
                    </div>`;
}