// gets validation link from current page
document.getElementById("validation_link_html").setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
document.getElementById("validation_link_css").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);

//Date and time
let today = new Date();
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function displayDate(){
    document.getElementById("current_date").innerHTML = "Today is " + today.getHours() + ":" + today.getMinutes() + " on " + weekdays[today.getDay()] +
        ", " + today.getDate() + " " + month[today.getMonth()] + ", " + today.getFullYear();
}

//Generate response to user
function respond(){
    document.getElementById("response").innerHTML = "Platypus Corp welcomes you, " + document.getElementById("fullname").value + 
        "! We're glad you're doing " + document.getElementById("mood").value + "!";
}

//Check the equivalency of 2 items
function eqCheck(){
    let i1 = document.getElementById("item1").value;
    let i2 = document.getElementById("item2").value;

    if (i1 === i2){
        document.getElementById("eqResponse").innerHTML = "These are equivalent!";
    }
    else{
        document.getElementById("eqResponse").innerHTML = "These are not equivalent!";
    }
}