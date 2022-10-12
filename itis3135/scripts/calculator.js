//add character to input text
function addChar(num){
    document.getElementById("calc_input").append(num);
}

//Multipy 2 numbers
function multiply(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let product = n1 * n2;

    document.getElementById("multiplyResponse").innerHTML = product;
}