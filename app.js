const target = document.getElementById('loan-form');
console.log('asdasd');

target.addEventListener('submit',calculate)

function calculate(e){
  const amount = document.getElementById('amount');
  const interest=document.getElementById('interest');
  const years=document.getElementById('years');
  const monthlypay=document.getElementById('monthly-payment');
  const totalpayment=document.getElementById('total-payment');
  const totalInterest=document.getElementById('total-interest');


  const principal=parseFloat(amount.value);
  console.log(principal);
  const calulatedInterest=parseFloat(interest.value)/100/12;
  const totalpayments=parseFloat(years.value)*12;

  const x=1/Math.pow(1+calulatedInterest,totalpayments);
  const monthly = (principal*calulatedInterest)/(1-x);

  const TOI=principal*calulatedInterest;
  if(isFinite(monthly))
  {
    monthlypay.value=(monthly).toFixed(2);
    totalpayment.value=(monthly*totalpayments).toFixed(2);;
    totalInterest.value=((monthly*totalpayments)-principal).toFixed(2);;

  }
  else{

  }

  console.log(TOI);



  
  e.preventDefault();
}