let allEmployees = [];

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
    let annualSalary = $("#annualSalary").val();

    //clearing DOM
    $("#employeeFirstName").val("");
    $("#employeeLastName").val("");
    $("#employeeID").val("");
    $("#jobTitle").val("");
    $("#annualSalary").val("");

    allEmployees.push({employeeFirstName, employeeLastName, employeeID, jobTitle, annualSalary})

    appendDOM();
}


function appendDOM(){
    $(".employeeRow").empty();

    for (employee of allEmployees){
        $(".employeeRow").append(`<tr><td>${employee.employeeFirstName}</td>
        <td>${employee.employeeLastName}</td><td>${employee.employeeID}</td><td>${employee.jobTitle}</td>
        <td>${employee.annualSalary}</td></tr>`);
    
    }}

