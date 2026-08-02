function calculate(){

let bill = parseFloat(document.getElementById("billAmount").value);
let tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
let people = parseInt(document.getElementById("numberOfPeople").value);

if (isNaN(bill) || bill<0) {
    alert("Please enter a valid bill amount.");
    return;
}

if (isNaN(tipPercentage) || tipPercentage<0) {
    alert("Please enter a valid tip percentage.");
    return;
}

let tipAmount= bill * (tipPercentage / 100);
let totalBill = bill + tipAmount;
let each = totalBill / people;

document.getElementById("tipAmount").innerText = tipAmount.toFixed(2);
document.getElementById("totalBill").innerText = totalBill.toFixed(2);
document.getElementById("amountPerPerson").innerText = each.toFixed(2);
}

function resetFields() {
    document.getElementById("billAmount").value = "";
    document.getElementById("numberOfPeople").value = "";
    document.getElementById("tipPercentage").value = "";
   
    document.getElementById("tipAmount").innerText = "0.00";
    document.getElementById("totalBill").innerText = "0.00";
    document.getElementById("amountPerPerson").innerText = "0.00";
}