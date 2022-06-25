
let nameReg = /^[a-zA-Z0-9]+$/,
    emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    ageReg = /^[1-9][0-9]?$|^100$/,
    passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


    // Global variables
let userName = document.getElementById("name"),
    userEmail = document.getElementById("email"),
    userPhone = document.getElementById("phone"),
    userAge = document.getElementById("age"),
    userPassword = document.getElementById("password"),
    userRePassword = document.getElementById("rePassword");



let userNameValid = () => {
    if (nameReg.test(userName.value)) {
        $("#nameAlert").css("display", "none")
    } else
        $("#nameAlert").css("display", "block")
}

let userEmailValid = () => {
    if (emailReg.test(userEmail.value)) {
        $("#emailAlert").css("display", "none")
    } else
        $("#emailAlert").css("display", "block")
}



let userPhoneValid = () => {
    if (phoneReg.test(userPhone.value)) {
        $("#phoneAlert").css("display", "none")
    } else
        $("#phoneAlert").css("display", "block")
}


let userAgeValid = () => {
    if (ageReg.test(userAge.value)) {
        $("#ageAlert").css("display", "none")
    } else
        $("#ageAlert").css("display", "block")
}

let userPasswordValid=()=> {
    if (passwordReg.test(userPassword.value)) {
        $("#pwAlert").css("display", "none")
    } else
        $("#pwAlert").css("display", "block")
}


let userRePasswordValid = () => {
    if (userPassword.value == userRePassword.value) {
        $("#rePasswordAlert").css("display", "none")
    } else
        $("#rePasswordAlert").css("display", "block")
}


    userName.addEventListener("keyup", userNameValid),
    userEmail.addEventListener("keyup", userEmailValid),
    userPhone.addEventListener("keyup", userPhoneValid),
    userAge.addEventListener("keyup", userAgeValid),
    userPassword.addEventListener("keyup", userPasswordValid),
    userRePassword.addEventListener("keyup", userRePasswordValid),


// Contact Word Count
$(function () {
    let maxChar = 100;

    $("textarea").keyup(function () {
        let charLength = $(this).val().length;
        let character = maxChar - charLength;

        if (character <= 0) {
            // Setting Text
            $("#char").text("You have exceeded the limited characters");
        } else {
            // Getting Text
            $("#char").text(character);
        }
    });
});


