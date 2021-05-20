const time_top = document.getElementById('timeTopper');
const date_top = document.getElementById('dateTopper');
let cancel;

/** function will display live timer
 * @param {string} dateTime - storing the date and time of the city.
 */
export function timer(dateTime){
    let sec,min,hrs;
    let time_at_top = (dateTime.split(", ")[1]).split(" ")[0];
    sec = parseInt(time_at_top.split(":")[2]);
    min = parseInt(time_at_top.split(":")[1]);  
    hrs = parseInt(time_at_top.split(":")[0]); 
    function liveTimer(){
        sec += 1;
        if(sec>=60){
            sec =0;
            min+=1;
            if(min>=60){
                min=0;
                hrs+=1;
            }
        }
        if(sec<10){
            time_top.innerHTML = `${hrs}:${min}:0${sec}`;
        }
        else{
            time_top.innerHTML = `${hrs}:${min}:${sec}`;
        }
    }
    setTimeout(liveTimer,0);
    if(cancel){
        clearInterval(cancel);
    }
    cancel = setInterval(liveTimer, 1000);    
}

/** function will convert short date to long date.
 * @param {string} dateTime - storing the date and time of the city.
 */
export function date(dateTime){
    const parts = (dateTime.split(", ")[0]).split("/"), 
        date = new Date(+parts[2], +parts[0]-1, +parts[1]), 
        datePart = date.toString().split(" "); 
    date_top.innerHTML = `${datePart[2]}-${datePart[1].toUpperCase()}-${datePart[3]}`;
    return `${datePart[2]}-${datePart[1].toUpperCase()}-${datePart[3]}`;
}