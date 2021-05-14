import {medication, myMedicationList} from "./medications.js";

console.log("hello user!");


class inputBox {
    constructor(id) {
        this.inputField = document.createElement("INPUT");
        this.inputField.setAttribute("id", id);
        this.inputField.setAttribute("type", "text");
        this.inputField.setAttribute("name", id);

    }
}


function createMainPage() {
    // get body div
    const body = document.getElementById("content");

    // create divs 
    const medListDiv = document.createElement("DIV");

    // append to body div
    body.appendChild(medListDiv);
    

    // append medForm to body

    // let getMedDose = inputBox;
    // let getMedFrequency = inputBox;
    // let getMedType = inputBox;
    // let getMedNotes = inputBox;

    const medFormDiv = document.createElement("DIV");
    let getMedName = new inputBox("getMedName");

    medFormDiv.appendChild(getMedName);
    body.appendChild(medFormDiv);


    let metformin = new medication("metformin", "500mg", "twice daily", "diabetes", "");
    allMedicationList.push(metformin);
    console.log(allMedicationList);

}




createMainPage();