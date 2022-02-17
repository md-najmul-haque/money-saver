
document.getElementById('calculate-button').addEventListener('click', function () {
    // get income =field
    const incomeField = document.getElementById('income');
    const income = parseFloat(incomeField.value);

    // get all expenditure
    const foodField = document.getElementById('food');
    const foodCost = parseFloat(foodField.value);

    const rentField = document.getElementById('rent');
    const rentCost = parseFloat(rentField.value);

    const clothesField = document.getElementById('clothes');
    const clothesCost = parseFloat(clothesField.value);

    const expense = document.getElementById('expense');
    const totalExpense = parseFloat(expense.innerText);

    const balance = document.getElementById('balance');
    const totalBalance = parseFloat(balance.innerText);





})