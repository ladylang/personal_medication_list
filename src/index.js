import {medication, allMedicationList} from "./medications.js";

console.log("hello user!");


function createMainPage() {
    // get body div
    const body = document.getElementById("content");

    // create divs 
    const medListDiv = document.createElement("DIV");

    // append to body div
    body.appendChild(medListDiv);
    let metformin = new medication("metformin", "500mg", "twice daily", "diabetes", "NA");
    allMedicationList.push(metformin);
    console.log(allMedicationList);
}

createMainPage();
