let allEmployees = [];
let totalAnnualCost = 0;
let totalMonthlyCost = 0;

$(function () {
  console.log("JS and JQ working");

  $("#addEmployee").on("click", addEmployee);

  $(".employeeRow").on("click", "#deleteMe", removeFromArray);
});

function addEmployee() {
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
  allEmployees.push({
    employeeFirstName,
    employeeLastName,
    employeeID,
    jobTitle,
    annualSalary,
  });

  appendDOM();
  updateMonthlyCost();
}

function appendDOM() {
  //clear table on DOM
  $(".employeeRow").empty();

  //using this to track index in for of loop
  let coutingI = 0;

  //loop through global array and add all employees to table on DOM
  for (employee of allEmployees) {
    $(".employeeRow")
      .append(`<tr data-index=${coutingI}><td>${employee.employeeFirstName}</td>
        <td>${employee.employeeLastName}</td><td>${employee.employeeID}</td><td>${employee.jobTitle}</td>
        <td>${employee.annualSalary}</td><td><button id ="deleteMe">Delete</button></td></tr>`);
    coutingI++;
  }
}

function updateMonthlyCost() {
  totalAnnualCost = 0;
  $("#costH2").css({"backgroundColor": "white"});

  //add all employee annual salaries

    
  for (employee of allEmployees) {
    totalAnnualCost += employee.annualSalary;
  }

  //divide total of annual salaries by 12 to get monthly cost
  //learned toFixed() from https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
  totalMonthlyCost = (totalAnnualCost / 12).toFixed(2);

  if (totalMonthlyCost > 20000){
    $("#costH2").css({"backgroundColor": "red"});
 }

  //update the total cost on the DOM
  $(".monthlyCostTotal").text(totalMonthlyCost);
}

function removeFromArray(event) {
  let indexInArray = $(event.target).closest("tr").data("index");
  console.log(indexInArray);

  allEmployees.splice(indexInArray, 1);
  appendDOM();
  updateMonthlyCost();
}
