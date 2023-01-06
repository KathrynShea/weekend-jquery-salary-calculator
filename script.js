let allEmployees = [];
let totalAnnualCost = 0;
let totalMonthlyCost = 0;

$(function(){
 console.log("JS and JQ working")

 $("#addEmployee").on("click", addEmployee);
});

function addEmployee(){

    //saving input from DOM
    let employeeFirstName = $("#employeeFirstName").val();
    let employeeLastName = $("#employeeLastName").val();
    let employeeID = $("#employeeID").val();
    let jobTitle = $("#jobTitle").val();
    let annualSalary = Number($("#annualSalary").val());

    //clearing DOM
    $("#employeeFirstName").val("");
    $("#employeeLastName").val("");
    $("#employeeID").val("");
    $("#jobTitle").val("");
    $("#annualSalary").val("");

    //add new employee to global array
    allEmployees.push({employeeFirstName, employeeLastName, employeeID, jobTitle, annualSalary})

    appendDOM();
    updateMonthlyCost();
}

function appendDOM(){
    //clear table on DOM
    $(".employeeRow").empty();

    //loop through global array and add all employees to table on DOM
    for (employee of allEmployees){
        $(".employeeRow").append(`<tr><td>${employee.employeeFirstName}</td>
        <td>${employee.employeeLastName}</td><td>${employee.employeeID}</td><td>${employee.jobTitle}</td>
        <td>${employee.annualSalary}</td><td><button id ="somthing special">Delete</button></td></tr>`);
    }
}

function updateMonthlyCost(){
    totalAnnualCost = 0
    
    //add all employee annual salaries
    //let rowClass = "normal-budget";

   /* if (totalMonthlyCost > 20,000){
        .warning
    }
    */

    for (employee of allEmployees){
        totalAnnualCost += employee.annualSalary;
        
    }

    //divide total of annual salaries by 12 to get monthly cost
    // learned toFixed() from https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
    totalMonthlyCost = (totalAnnualCost / 12).toFixed(2);

    //update the total cost on the DOM
    $(".monthlyCostTotal").text(totalMonthlyCost);
}

