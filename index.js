let boxFirstN = document.getElementById("validationCustom01");
let boxLastN = document.getElementById("validationCustom02");
let boxUser = document.getElementById("validationCustomUsername");
let boxCity = document.getElementById("validationCustom03");
let boxState = document.getElementById("validationCustom04")
const Button = document.getElementById("button");



Button.addEventListener("click", () => {

    let first = boxFirstN.value;
    let last = boxLastN.value;
    let user = boxUser.value;
    let city = boxCity.value;
    let state = boxState.value;

    let mistakes = [];
    let appointment;
    let memoryS = JSON.parse(sessionStorage.getItem("dates"))
    if(!memoryS){
        appointment = [];
    } else {
        appointment = memoryS;
    }




    if(!first){
        mistakes.push("First name is obligatory")
        boxFirstN.classList.add("is-invalid")
    } if (!last){
        mistakes.push("Last name is obligatory")
        boxLastN.classList.add("is-invalid")
    } if (!user){
        mistakes.push("User is obligatory")
        boxUser.classList.add("is-invalid")
    } if (!city){
        mistakes.push("City is obligatory")
        boxCity.classList.add("is-invalid")
    } if (!state){
        mistakes.push("State is obligatory")
        boxState.classList.add("is-invalid")
    }

    if(mistakes.length == 0){
        let field = {
            first,last,user,city,state
        }
        appointment.push(field)
        sessionStorage.setItem("dates", JSON.stringify(appointment))
    }
})