function validateForm() {
    let first = document.forms["form2"]["firstName"].value;
    let last = document.forms["form2"]["lastName"].value;
    let email = document.forms["form2"]["email"].value;
    let message = document.forms["form2"]["message"].value;

    if (first === "") {
        alert("The First Name should not be empty!");
        return false;
    } 
    if (last === "") {
        alert("The Last Name should not be empty!");
        return false;
    }
    if (email === "") {
        alert("The email must be filled out!");
        return false;
    } 
    if (message === "") {
        alert("The Message should not be empty!");
        return false;
    }
}



