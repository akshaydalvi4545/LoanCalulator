const target = document.getElementById('loan-form');
console.log('asdasd');

target.addEventListener('submit',function(e){

//Show Loader
loadgif();
//Show  Results
setTimeout(calculate,3000);
e.preventDefault();
})

function calculate(){
  
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
    totalInterest.value=((monthly*totalpayments)-principal).toFixed(2);
    hidegif();

  }
  else{
    showError('Please Check the Number');
  }

  setTimeout(reset,5000);
  console.log(TOI); 
  
}


function showError(error)
{
  const errorDiv=document.createElement("div");
  errorDiv.className='errordiv alert alert-danger';
  const card =document.querySelector('.result-card');
  const heading =document.querySelector('.result-heading');
  errorDiv.appendChild(document.createTextNode(error));
  card.insertBefore(errorDiv,heading);
  setTimeout(clearError,3000);

  console.log(heading);
}

function clearError(){
  document.querySelector('.errordiv').remove();
}

function loadgif(){
  const results=document.querySelector('.result-card');
  const loadImg=document.querySelector('.load-gif');
  const image=document.getElementById('loadImg');
  image.src='img/load.gif';

  results.style.display='none';
  loadImg.style.display='block';
  

}


function hidegif()
{
  const results=document.querySelector('.result-card');
  const loadImg=document.querySelector('.load-gif');
  results.style.display='block';
  loadImg.style.display='none';
}


function reset()
{

  const amount = document.getElementById('amount');
  const interest=document.getElementById('interest');
  const years=document.getElementById('years');
  const monthlypay=document.getElementById('monthly-payment');
  const totalpayment=document.getElementById('total-payment');
  const totalInterest=document.getElementById('total-interest');
  const results=document.querySelector('.result-card');
  const loadImg=document.querySelector('.load-gif');
  results.style.display='none';
  loadImg.style.display='none';

  amount.value='';
  interest.value='';
  years.value='';


}