//default medication list
const currentMedicationList = [];
const allMedicationLists = []; 


//add new list event listener
document.getElementById("addNewListBtn").addEventListener('click', function() {
    
    //pull list name

    //append list to allMedicationLists

    //create new list

    console.log("list is added");
};



//remove list
document.getElementById("deleteListBtn").addEventListener('click', function() {
    
    //find the list in array

    //remove all medications on list

    //delete list from array

    console.log("list is removed");
};





//export all lists and current active list
export{currentMedicationList, allMedicationLists};