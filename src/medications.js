
//default my Medication List 
const myMedicationList = [
    {name: "Multivitamin", dose: "1 tablet", frequency: "once daily", condition: "supplement", notes: "Are you taking one?"}
];



class medication {
    constructor(name, dose, frequency, condition, notes) {
        this.name = name;
        this.dose = dose;
        this.frequency = frequency;
        this.condition = condition;
        this.notes = notes;
    };



};

//when event listener to Add New Medication input button when clicked
document.getElementById("addNewMedBtn").addEventListener('click', function() {

    //pull input data from html form 
    let nextMedName = document.getElementById("medication").value;
    let nextDose = document.getElementById("dose").value;
    let nextFrequency = document.getElementById("frequency").value;
    let nextCondition = document.getElementById("condition").value;
    let nextNotes = document.getElementById("notes").value;

    //create new medication with pull data
    let nextMedication = new medication (nextMedName, nextDose, nextFrequency, nextCondition, nextNotes);

    //reset the form
    document.getElementById("addMedForm").reset(); 


    //append new medication onto myMedicationList
    myMedicationList.push(nextMedication);


    console.log(myMedicationList);
});




export {medication, myMedicationList};