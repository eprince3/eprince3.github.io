//add character to input text
let focus = 0;
function addChar(num){
    switch(focus)
    {
        case 0:
            document.getElementById("input_1").value = num;
            focus++;
            break;
        case 1:
            document.getElementById("input_2").value = num;
            focus++;
            break;
        case 2:
            document.getElementById("input_3").value = num;
            focus++;
            break;
        default:
            document.getElementById("input_1").value = num;
            focus = 1;
    }
}

//Process answer
function calculate(){
    let op = document.getElementById("input_2").value;
    var num1 = Number(document.getElementById("input_1").value);
    var num2 = Number(document.getElementById("input_3").value);
    var res;

    switch(op){
        case('x'):
            res = num1 * num2;
            break;
        case('/'):
            res = num1 / num2;
            break;
        case('-'):
            res = num1 - num2;
            break;
        case('+'):
            res = num1 + num2;
            break;
        default:
            window.alert("Invalid operator.")
            break;
    }

    document.getElementById("ans").value = res;
}

//clear entries
function clear(){
    window.alert("test");
    /*
    document.getElementById("input_1").value = 0;
    document.getElementById("input_2").value = '';
    document.getElementById("input_3").value = '';    
    document.getElementById("ans").value = '';
    focus = 0;
    */
}