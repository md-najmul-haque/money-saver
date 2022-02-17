
const incomeNegativeError = document.getElementById('income-error-text')
incomeNegativeError.style.display = 'none';
const foodNegativeError = document.getElementById('food-error-text')
foodNegativeError.style.display = 'none';
const rentNegativeError = document.getElementById('rent-error-text')
rentNegativeError.style.display = 'none';
const chothesNegativeError = document.getElementById('clothes-error-text')
chothesNegativeError.style.display = 'none';

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

    // control negative input value
    if (income < 0) {
        incomeNegativeError.style.display = 'block';
        return;
    } else if (foodCost < 0) {
        foodNegativeError.style.display = 'block';
        incomeNegativeError.style.display = 'none';
        return;


    } else if (rentCost < 0) {
        rentNegativeError.style.display = 'block';
        incomeNegativeError.style.display = 'none';
        foodNegativeError.style.display = 'none';
        return;

    } else if (clothesCost < 0) {
        chothesNegativeError.style.display = 'block';
        incomeNegativeError.style.display = 'none';
        foodNegativeError.style.display = 'none';
        rentNegativeError.style.display = 'none';
        return;
    } else {
        incomeNegativeError.style.display = 'none';
        foodNegativeError.style.display = 'none';
        rentNegativeError.style.display = 'none';
        chothesNegativeError.style.display = 'none';
    }

    /*     if (income > 0 && foodCost >= 0 && rentCost >= 0 && clothesCost >= 0) {
    
            const totalCost = foodCost + rentCost + clothesCost;
    
        } else {
    
            console.log("please input positive number")
        }
    
        
    
        if (income > totalCost) {
            const incomeBalance = income - totalCost;
        } else {
            console.log("total cost will not exceed total income")
        }
     */

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