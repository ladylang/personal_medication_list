
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

//pull input data from html form to create new medication


//append new medication onto myMedicationList


export {medication, myMedicationList};