// alert("hello!");

// exercise01
let number = prompt("Enter a number!");
var length = number.length;
function dashes(dash){
    var stringArray = dash.split('');
    var numberArray = stringArray.map(Number);
  for(var i = 0; i < numArr.length; i++) {
   if(numberArray[i-1]%2===0 && numberArray[i]%2===0) {
        numberArray.push('-');
    }
  }
 
  console.log(numberArray);
}




// exercise02
 // 2. Create a javascript function that will find all numbers divisable by 7 and 3 in a array from 1 to 100. 
 // 30 mins  -->

var array = [];
for (var i = 1; i <= 100; i++) {       
 if(i / 3 === 0 && i / 7 === 0){
  array = array.push(i);
    
}
 console.log(array);
} 

// exercise03

// 3. Create a Javascript ATM machine.  
 //The ATM should have the following functions: 
 //- make desposit (this function should add money to the users balance) 
 //- make withdrawal (this function should should withdraw money to the users balance) 
 //- get the balance (this function should display the current balance of the user) 
 //- exit (this function should close the window) 
 // create interactive menu using alerts 
 // 90 mins 

 
  function deposit(){
        
        let deposit = prompt("How much money would you like to deposit?");
        let yourBankAccountState = 350;
        console.log("You have " + (yourBankAccountState - deposit) + " dollars on your bank account!");
        
  }

  function withdrawl(){
    let withdraw = prompt("How much money would you like to deposit?");
    let yourBankAccountState = 350;
    let newAccountState = yourBankAccountState - withdraw;
    console.log("You have " + newAccountState + " dollars on your bank account!");
    
  }

  function balance(){

    // let yourBankAccountState = 350;
    console.log("You have " + yourBankAccountState + " dollars on your bank account!");

  }

  function exit(){
      console.log("Have a nice day!");
  }


    