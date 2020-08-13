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
