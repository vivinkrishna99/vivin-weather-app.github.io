const contImg = document.getElementById("cont-img");
const tempImg = document.getElementById("temp-img");

/** this function used to change the image icon based on the sorting order.
 * @param {integer} cComp - has the comparision value whether up or down.
 */
export function contArrowIcons(cComp){
    if(cComp == 1){
        contImg.src = "assets/general-images-icons/arrowUp.svg";
    }
    else{
        contImg.src = "assets/general-images-icons/arrowDown.svg";
    }
    
}
export function tempArrowIcons(tComp){
    if(tComp == 1){
        tempImg.src = "assets/general-images-icons/arrowDown.svg";
    }
    else{
        tempImg.src = "assets/general-images-icons/arrowUp.svg";
    }
}