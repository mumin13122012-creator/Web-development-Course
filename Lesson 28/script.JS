let income = 0;
let expense = 0;

function addTransaction() {

    let description = document.getElementById("description").value;
    let amount = Number(document.getElementById("amount").value);
    let type = document.getElementById("type").value;

    if (description === "" || amount <= 0) {
        alert("Please enter valid information.");
        return;
    }

    let list = document.getElementById("list");
    let item = document.createElement("li");

    if (type === "income") {
        income += amount;
        item.textContent = description + " +£" + amount;
    } else {
        expense += amount;
        item.textContent = description + " -£" + amount;
    }

    list.appendChild(item);

    document.getElementById("income").textContent = income;
    document.getElementById("expense").textContent = expense;
    document.getElementById("balance").textContent = income - expense;

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
}