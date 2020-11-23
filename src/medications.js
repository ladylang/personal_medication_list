
const allMedicationList = [
    {name: "first med", dose: "250 mg", frequency: "once daily", type: "BP", notes: "testing"}
];

class medication {
    constructor(name, dose, frequency, type, notes) {
        this.name = name;
        this.dose = dose;
        this.frequency = frequency;
        this.type = type;
        this.notes = notes;
    }

};



export {medication, allMedicationList};