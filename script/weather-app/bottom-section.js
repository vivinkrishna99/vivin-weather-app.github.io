"use-strict"
import { gettingData } from '../weather-data/weather-data.js';
import { groupByContinents } from '../helpers/bottom-helpers/groupingContinent.js';
import { contSort,contTempSort } from '../helpers/middle-helpers/sorting-array.js';
import { contArrowIcons,tempArrowIcons } from '../helpers/bottom-helpers/arrow-change.js';
import { fillingGrid } from '../helpers/bottom-helpers/populate-grid.js';

// variable declaration
const weatherInfo = await gettingData();
const continentInput = document.getElementById("continent");
const tempGrid = document.getElementById("temp-grid");
const gridItems = document.getElementById("grid-items");
const cityDetails = Object.values(weatherInfo);
let contComp = 1,tempComp = -1,c=0;

const continentDetails = groupByContinents(cityDetails,(cont) => (cont.timeZone.split("/")[0]));
let itr = continentDetails.keys(),continent = [];
for(let i=0;i<continentDetails.size;i++){
    continent.push(itr.next().value);
}

// Event Listeners for sorting continent
continentInput.addEventListener('click', ()=>{
    gridItems.innerHTML = "";
    (contComp ===1)? contComp =-1:contComp =1;
    contArrowIcons(contComp);
    continent = contSort(continent,contComp);
    c=0;
    for(let i=0;i<continent.length;i++){
        for(let j=0;j<continentDetails.get(continent[i]).length && c<12;j++){
            c++;
            const cityInfo = continentDetails.get(continent[i])[j];
            fillingGrid(cityInfo,gridItems);
        }
    }
});

// Event Listeners for sorting temperature with respect to continents
tempGrid.addEventListener('click', ()=>{
    gridItems.innerHTML = "";
    (tempComp === -1)? tempComp=1: tempComp=-1;
    tempArrowIcons(tempComp);
    c=0;
    for(let i=0;i<continent.length;i++){
        let temp = [];
        for(let j=0;j<continentDetails.get(continent[i]).length && c<12;j++){
            c++;
            temp.push(continentDetails.get(continent[i])[j]);
        }
        temp = contTempSort(temp,tempComp);
        for(let j=0;j<temp.length ;j++){
            fillingGrid(temp[j],gridItems);
        }
    }
});