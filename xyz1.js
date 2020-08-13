

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


