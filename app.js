
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

    // get total cost and income balance 
    const totalCost = foodCost + rentCost + clothesCost;
    const incomeBalance = income - totalCost;

    // set expence value
    const expense = document.getElementById('expense');
    expense.innerText = totalCost;

    //set balance value
    balance.innerText = incomeBalance;

})

const balance = document.getElementById('balance');

document.getElementById('save-button').addEventListener('click', function () {

    // get save field input
    const saveFiled = document.getElementById('save');
    const savingPercentage = parseFloat(saveFiled.value);

    // getting earlier balance
    const totalBalance = parseFloat(balance.innerText);

    // get savings
    const totalSaving = (totalBalance * savingPercentage) / 100;

    // set saving amount
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = totalSaving;

    // get & set raimaining balance
    const remainingBalance = totalBalance - totalSaving;
    document.getElementById('remaining-balance').innerText = remainingBalance;

})