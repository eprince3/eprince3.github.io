let person = ['Iris Jackson', 'Khalil Roberts', 'Thomas Berry'];
let salary = [43000, 67000, 48000];

function selectEmp(empName){
    document.getElementById("selector").innerHTML = empName;
}

function addSalary(){
    let newPerson = window.prompt("What is the name of the employee you would like to add?", "Iris Jackson");

    if (newPerson == ""){
        alert("Do not leave field blank.");
        return;
    }
    
    let newSalary = window.prompt("What is the salary of this employee?", "34000");

    if (isNaN(newSalary) || newSalary < 0 || newSalary > 1000000 || newSalary == ""){
        alert("Invalid entry.");
        return;
    }

    person.push(newPerson);
    salary.push(parseInt(newSalary));
}

function displayResults(){
    var average = 0;
    var highest = 0;

    for (var i = 0; i < salary.length; i++){
        average += salary[i];

        if (salary[i] > salary[highest]){
            highest = i;
        }
    }

    average = average / salary.length;

    document.getElementById("average").innerHTML = '$' + average.toFixed(2);
    document.getElementById("highest").innerHTML = person[highest] + ", " + salary[highest];
}

function displaySalary(){
    var table = document.getElementById('results_table');
    var rowCount = table.rows.length;

    //clear table
    for (i = 0; i < rowCount; i++){
        document.getElementById('results_table').deleteRow(0);
    }

    var headRow = table.insertRow(0);
    var headCell1 = headRow.insertCell(0);
    var headCell2 = headRow.insertCell(1);
    headCell1.innerHTML = "Employee";
    headCell2.innerHTML = "Salary";

    for (i = 0; i < person.length; i++){
        var newRow = table.insertRow(i + 1);
        var tempCell1 = newRow.insertCell(0);
        var tempCell2 = newRow.insertCell(1);
        tempCell1.innerHTML = person[i];
        tempCell2.innerHTML = salary[i];
    }
}