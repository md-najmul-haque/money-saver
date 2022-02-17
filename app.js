
// add event handler on calculate button
document.getElementById('calculate-button').addEventListener('click', function () {

    // get income 
    const income = getIncome();

    // get all expenditure
    const foodField = document.getElementById('food');
    const foodCost = parseFloat(foodField.value);

    const rentField = document.getElementById('rent');
    const rentCost = parseFloat(rentField.value);

    const clothesField = document.getElementById('clothes');
    const clothesCost = parseFloat(clothesField.value);

    // control negative input value
    if (income < 0) {
        incomeNegativeError.style.display = 'block';

        incomeTextError.style.display = 'none';
        foodTextError.style.display = 'none';
        rentTextError.style.display = 'none';
        clothesTextError.style.display = 'none';

        incomeExpenditureError.style.display = 'none'
        return;
    } else if (foodCost < 0) {
        foodNegativeError.style.display = 'block';
        incomeNegativeError.style.display = 'none';

        incomeTextError.style.display = 'none';
        foodTextError.style.display = 'none';
        rentTextError.style.display = 'none';
        clothesTextError.style.display = 'none';

        incomeExpenditureError.style.display = 'none'
        return;


    } else if (rentCost < 0) {
        rentNegativeError.style.display = 'block';
        incomeNegativeError.style.display = 'none';
        foodNegativeError.style.display = 'none';

        incomeTextError.style.display = 'none';
        foodTextError.style.display = 'none';
        rentTextError.style.display = 'none';
        clothesTextError.style.display = 'none';

        incomeExpenditureError.style.display = 'none'
        return;

    } else if (clothesCost < 0) {
        chothesNegativeError.style.display = 'block';
        incomeNegativeError.style.display = 'none';
        foodNegativeError.style.display = 'none';
        rentNegativeError.style.display = 'none';

        incomeTextError.style.display = 'none';
        foodTextError.style.display = 'none';
        rentTextError.style.display = 'none';
        clothesTextError.style.display = 'none';

        incomeExpenditureError.style.display = 'none'
        return;
    } else {
        incomeNegativeError.style.display = 'none';
        foodNegativeError.style.display = 'none';
        rentNegativeError.style.display = 'none';
        chothesNegativeError.style.display = 'none';

        incomeTextError.style.display = 'none';
        foodTextError.style.display = 'none';
        rentTextError.style.display = 'none';
        clothesTextError.style.display = 'none';

        incomeExpenditureError.style.display = 'none'
    }

    // control string input
    if (isNaN(income) == true) {
        incomeTextError.style.display = 'block';

        incomeNegativeError.style.display = 'none';
        foodNegativeError.style.display = 'none';
        rentNegativeError.style.display = 'none';
        chothesNegativeError.style.display = 'none';

        incomeExpenditureError.style.display = 'none'
        return;
    } else if (isNaN(foodCost) == true) {

        foodTextError.style.display = 'block';
        incomeTextError.style.display = 'none';

        incomeNegativeError.style.display = 'none';
        foodNegativeError.style.display = 'none';
        rentNegativeError.style.display = 'none';
        chothesNegativeError.style.display = 'none';

        incomeExpenditureError.style.display = 'none'
        return;

    } else if (isNaN(rentCost) == true) {

        rentTextError.style.display = 'block';
        incomeTextError.style.display = 'none';
        foodTextError.style.display = 'none';

        incomeNegativeError.style.display = 'none';
        foodNegativeError.style.display = 'none';
        rentNegativeError.style.display = 'none';
        chothesNegativeError.style.display = 'none';

        incomeExpenditureError.style.display = 'none'
        return;

    } else if (isNaN(clothesCost) == true) {

        clothesTextError.style.display = 'block';
        incomeTextError.style.display = 'none';
        foodTextError.style.display = 'none';
        rentTextError.style.display = 'none';

        incomeNegativeError.style.display = 'none';
        foodNegativeError.style.display = 'none';
        rentNegativeError.style.display = 'none';
        chothesNegativeError.style.display = 'none';

        incomeExpenditureError.style.display = 'none'
        return;
    } else {

        incomeTextError.style.display = 'none';
        foodTextError.style.display = 'none';
        rentTextError.style.display = 'none';
        clothesTextError.style.display = 'none';

        incomeNegativeError.style.display = 'none';
        foodNegativeError.style.display = 'none';
        rentNegativeError.style.display = 'none';
        chothesNegativeError.style.display = 'none';

        incomeExpenditureError.style.display = 'none'

    }

    // get total cost and income balance 
    const totalCost = foodCost + rentCost + clothesCost;

    if (income < totalCost) {
        incomeExpenditureError.style.display = 'block'
        return;
    }

    const incomeBalance = income - totalCost;

    // set expence value
    const expense = document.getElementById('expense');
    expense.innerText = totalCost;

    //set balance value
    balance.innerText = incomeBalance;

})

function getIncome() {
    const incomeField = document.getElementById('income');
    const income = parseFloat(incomeField.value);

    return income;

}




const balance = document.getElementById('balance');

// error handling 
const incomeNegativeError = document.getElementById('income-negative-error')
const foodNegativeError = document.getElementById('food-negative-error')
const rentNegativeError = document.getElementById('rent-negative-error')
const chothesNegativeError = document.getElementById('clothes-negative-error')
incomeNegativeError.style.display = 'none';
foodNegativeError.style.display = 'none';
rentNegativeError.style.display = 'none';
chothesNegativeError.style.display = 'none';

const incomeTextError = document.getElementById('income-text-error')
const foodTextError = document.getElementById('food-text-error')
const rentTextError = document.getElementById('rent-text-error')
const clothesTextError = document.getElementById('clothes-text-error')
incomeTextError.style.display = 'none';
foodTextError.style.display = 'none';
rentTextError.style.display = 'none';
clothesTextError.style.display = 'none';

const incomeExpenditureError = document.getElementById('income-expenditure-error')
incomeExpenditureError.style.display = 'none'

const savingsErrorMessage = document.getElementById('savings-error-message')
savingsErrorMessage.style.display = 'none'

const savingNegativeInput = document.getElementById('saving-negative-input')
savingNegativeInput.style.display = 'none'

const savingStringInput = document.getElementById('saving-string-input')
savingStringInput.style.display = 'none'

// add event handler on save button
document.getElementById('save-button').addEventListener('click', function () {

    // get income 
    const income = getIncome();

    // error control for negative income input
    if (income < 0) {
        incomeNegativeError.style.display = 'block';
        incomeTextError.style.display = 'none';
        return;
    } else {
        incomeNegativeError.style.display = 'none';
        incomeTextError.style.display = 'none';
    }

    // error control for string income input
    if (isNaN(income) == true) {
        incomeTextError.style.display = 'block';
        incomeNegativeError.style.display = 'none';
        return;
    } else {
        incomeNegativeError.style.display = 'none';
        incomeTextError.style.display = 'none';
    }

    // get save field input
    const saveFiled = document.getElementById('save');
    const savingPercentage = parseFloat(saveFiled.value);

    // error control for negative income input
    if (savingPercentage < 0) {
        savingNegativeInput.style.display = 'block';
        savingStringInput.style.display = 'none'
        savingsErrorMessage.style.display = 'none'
        return;
    } else {
        savingNegativeInput.style.display = 'none';
        savingStringInput.style.display = 'none'
    }

    // error control for string income input
    if (isNaN(savingPercentage) == true) {

        savingStringInput.style.display = 'block'
        savingNegativeInput.style.display = 'none';
        savingsErrorMessage.style.display = 'none'
        return;
    } else {
        savingNegativeInput.style.display = 'none';
        savingStringInput.style.display = 'none'
        savingsErrorMessage.style.display = 'none'
    }

    // getting earlier balance
    const totalBalance = parseFloat(balance.innerText);

    // get savings
    const totalSaving = (income * savingPercentage) / 100;


    if (totalBalance < totalSaving) {
        savingsErrorMessage.style.display = 'block'

        return;
    } else {
        savingsErrorMessage.style.display = 'none'
    }

    // set saving amount
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = totalSaving;

    // get & set raimaining balance
    const remainingBalance = totalBalance - totalSaving;
    document.getElementById('remaining-balance').innerText = remainingBalance;

})