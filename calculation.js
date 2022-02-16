function errorChecking(parentDiv){
        const parent = document.getElementById(parentDiv); 
        const createingParagrah = document.createElement('p'); 
        createingParagrah.innerText = 'String or negative number is not allowed'; 
        parent.appendChild(createingParagrah); 
    }

function calculation(){
    const totalIncome = document.getElementById('total-income'); 
    const totalIncomeValue = parseInt(totalIncome.value);
    if(totalIncomeValue < 0 || isNaN(totalIncomeValue) == true){
        errorChecking('income-error'); 
    }

    const food = document.getElementById('food'); 
    const foodValue = parseInt(food.value); 
    if(foodValue < 0 || isNaN(foodValue) == true){
        errorChecking('food-error'); 
    }

    const rent = document.getElementById('rent'); 
    rentValue = parseInt(rent.value); 
    if(rentValue < 0 || isNaN(rentValue) == true){
        errorChecking('rent-error'); 
    }
    const clothes = document.getElementById('clothes'); 
    const clothesValue = parseInt(clothes.value); 
    if(clothesValue < 0 ||  isNaN(clothesValue) == true){
        errorChecking('clothes-error'); 
    }


    const totalExpenses = foodValue + rentValue + clothesValue; 
    const balance =  totalIncomeValue - totalExpenses; 

    const saving = document.getElementById('saving-parcent'); 
    const savingPercent = parseInt(saving.value); 
    const saved = totalIncomeValue * (savingPercent/100); 


    const remainingBalance = balance - saved; 

    return [totalExpenses, balance, totalIncomeValue, foodValue, rentValue, clothesValue, saved, remainingBalance]; 
}




document.getElementById('calculate-button').addEventListener('click', function(){
    const gettingValue = calculation();
    const cost = gettingValue[0];
    const balance = gettingValue[1];

    console.log('button is clicked'); 
    if(gettingValue[2] > 0 && isNaN(gettingValue[2]) == false && gettingValue[3] > 0 && isNaN(gettingValue[3]) == false && gettingValue[4] > 0 && isNaN(gettingValue[4]) == false && gettingValue[5] > 0 && isNaN(gettingValue[5]) == false){
        document.getElementById('total-expenses').innerText = cost; 
        document.getElementById('balance').innerText = balance; 
        console.log(gettingValue[0], gettingValue[1], gettingValue[2], gettingValue[3], gettingValue[4], gettingValue[5])
    }
}); 

document.getElementById('save-button').addEventListener('click', function(){
    const gettingSavedValue = calculation();
    console.log(gettingSavedValue[6], gettingSavedValue[1], gettingSavedValue[6], gettingSavedValue[7]); 
    if(gettingSavedValue[6]<gettingSavedValue[1]){
        document.getElementById('saving-amount').innerText = gettingSavedValue[6]; 
        document.getElementById('remaining-balance').innerText = gettingSavedValue[7]; 
    }
    else{
        document.getElementById('saving-amount').innerText = 'Insufficient Balance to save'; 
        document.getElementById('remaining-balance').innerText = gettingSavedValue[1]; 
    }
    
});