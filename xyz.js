function withdrawlMoney(amount){
  var balance = 2000;
  if(amount % 5!= 0){
    alert('Incorrect Withdrawal Amount');
    return false;
  }else if(amount >= balance){
    alert('Insufficient Funds');
    return false;
  }
  balance = balance-amount-0.50;
  alert('Successful Tranascation n Available Balance is: RS' +balance);
}

function enterAmount(){
  var amount = document.getElementById("amount").value;
  withdrawlMoney(amount);
}
document.getElementById("enter").addEventListener("click",enterAmount);
/*

function depositMoney(amount1){
  var balance = 2000;
  if(amount1 == 0 ){
    alert('Incorrect DEposit Amount');
    return false;
  }else if(amount1 >= 50000){
    alert('Limit Exceeded');
    return false;
  }
  var balance1 =Number(amount1)+Number(balance);
  alert('Successful Tranascation n Available Balance is: RS' + balance1);
}

function enterAmount(){
  var amount1 = document.getElementById("amount1").value;
  depositMoney(amount1);
}
document.getElementById("enter1").addEventListener("click",enterAmount);


function sendMoney(amount2){
  var balance = 2000;
  if(amount2 % 5!= 0){
    alert('Incorrect Amount');
    return false;
  }else if(amount2 >= balance){
    alert('Insufficient Funds');
    return false;
  }
  var balance2 = balance-amount2;
  alert('Successful Tranascation n Available Balance is: RS' + balance2);
}

function enterAmount(){
  var amount2 = document.getElementById("amount2").value;
  sendMoney(amount2);
}
document.getElementById("enter2").addEventListener("click",enterAmount);
*/