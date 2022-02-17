
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

    // control string 
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



    // control negative input value



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