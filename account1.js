function depositMoney(amount1){
  var balance = 2000;
  if(amount1 % 5!= 0){
    alert('Incorrect Withdrawal Amount');
    return false;
  }else if(amount1 >= balance){
    alert('Insufficient Funds');
    return false;
  }
  balance = balance+amount1-0.50;
  alert('Successful Tranascation n Available Balance is: RS' +balance);
}

function enterAmount(){
  var amount1 = document.getElementById("amount1").value;
  depositMoney(amount1);
}
document.getElementById("enter1").addEventListener("click",enterAmount);

