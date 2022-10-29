var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

input.addEventListener('keyup',myResult);
inputType.addEventListener('change',myResult);
resultType.addEventListener('change',myResult);


inputTypeValue = inputType.value;
resultTypeValue = resultType.value;
function myResult(){

  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;
  



  if(inputTypeValue === "meter" && resultTypeValue === "feet"){
    result.value = Number(input.value) * 3.28084;
  } else if(inputTypeValue === "meter" && resultTypeValue === "meter"){
    result.value = input.value;
  }

  if(inputTypeValue === "feet" && resultTypeValue === "meter"){
    result.value = Number(input.value) / 3.281;
  } else if(inputTypeValue === "feet" && resultTypeValue === "meter"){
    result.value = input.value;
  }

  if(inputTypeValue === "celsius" && resultTypeValue === "fahrenheit"){
    result.value = Number(input.value) * 1.8 + 32;
  } else if(inputTypeValue === "celsius" && resultTypeValue === "celsius"){
    result.value = input.value;
  }

  if(inputTypeValue === "fahrenheit" && resultTypeValue === "celsius"){
    result.value = Number(input.value - 32) * 5/9;
  } else if(inputTypeValue === "fahrenheit" && resultTypeValue === "fahrenheit"){
    result.value = input.value;
  }

}


function calcIncome() {
    income = document.getElementById("income-input").value*1;
    let taxableIncome;
    
    if (income > 8000000) {
      taxableIncome = (document.getElementById("income-input").value-8000000)*(35/100)+2410000;
   } else if (income > 2000000){
    taxableIncome = (document.getElementById("income-input").value-2000000)*(32/100)+490000;
   } else if (income > 800000) {
    taxableIncome = (document.getElementById("income-input").value-800000)*(30/100)+130000;
   } else if (income > 400000) {  
    taxableIncome = (document.getElementById("income-input").value-400000)*(25/100)+30000;
   } else if (income > 250000) {
    taxableIncome = (document.getElementById("income-input").value-250000)*(20/100);
   } else  {
    taxableIncome = document.getElementById("income-input").value*0;
   }      
    
    

  document.getElementById("result-income").value = taxableIncome;
}


function factorial() {
    var x, y, z;    
    x = 1;
    y = 1;
    z = document.getElementById("input-number").value;
    
    while(y <= z) {
      x = x * y;
      y++;
    }
  
  document.getElementById("result-number").value = x;
  }
  
  function sum() {
  var x, y, z;
  x = "";
  y = document.getElementById("input-number").value;
  z = document.getElementById("input-number").value;
  
  do {
    ++y
    x = (y*z)/2;
  
  }
  while(z > y)
  
  document.getElementById("result-number").value = x;
  }
  
  function average() {
    var x, y, z, aver;
  x = 0
  y = document.getElementById("input-number").value;
  z = 1
  
  for (let i = 1; i <= y; i++){
    x += i;
  }
  
  document.getElementById("result-number").value = x/y;
  }


let valueName = document.getElementById('employee-name');
let valueDays = document.getElementById('days-worked');
let valueDaily = document.getElementById('dailyrate');
let valueDeduc = document.getElementById('deduc');
let valueIndex = document.getElementById('index');
let outputValue = document.getElementById('output-value');
let btnAdd = document.getElementById('addBtn');
let btnDel = document.getElementById('delBtn');

let tablesList = [];

function addToList() {
    let list = {
        name: valueName.value,
        days: valueDays.value,
        daily: valueDaily.value,
        deduction: valueDeduc.value,
    }
    tablesList.push(list)
}

function tablesListItems() {
    let tableBody = '<tbody>'
    tablesList.forEach((value, index) => {
        tableBody += `<tr>
        <td>${index}</td>
        <td>${value.name}</td>
        <td>${value.days}</td>
        <td>${value.daily}</td>
        <td>${parseInt(value.daily) * parseInt(value.days)}</td>
        <td>${value.deduction}</td>
        <td>${parseInt(value.days) * parseInt(value.daily) - parseInt(value.deduction)}</td>
    </tr>`
    })
    return tableBody + '</tbody>'

}

btnAdd.addEventListener('click', () => {
    addToList()
    outputValue.innerHTML = tablesListItem()
  })
  
  btnDel.addEventListener('click', () => {
    if (confirm('Are you sure? Data cannot be retrieved')) {
      tablesList.splice(parseInt(valueIndex.value), 1)
      outputValue.innerHTML = tablesListItem()
    }
  })