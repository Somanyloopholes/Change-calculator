const billAmount = document.querySelector("#billAmount");
const amountRecieved = document.querySelector("#amountRecieved");
const nextButton = document.querySelector("#next");
const changeButton = document.querySelector("#change");
const tableElements = document.querySelectorAll(".noOfNotes");
const showDiff = document.querySelector("#diff");
const showError = document.querySelector("#errorMessage");
const firstReveal = document.querySelector(".blockOne");
const secondReveal = document.querySelector(".blockTwo");

const denominations = [2000,500,100,50,20,10,5,2,1];

firstReveal.style.visibility = "hidden";
secondReveal.style.visibility = "hidden";

changeButton.addEventListener('click', ()=>{
    
    if(billAmount.value > 0){

       if(amountRecieved.value >= billAmount.value){
            const changeRemaining = amountRecieved.value - billAmount.value;
            displayDiff(changeRemaining);
            calculateChange(changeRemaining);
            showError.style.visibility = 'hidden';
            secondReveal.style.visibility = "visible";
       }
       else{
        errormessage("Amount paid must be larger than bill ,dumbass");
        showError.style.visibility = 'visible';
        secondReveal.style.visibility = "hidden";
       }

    }
    else{
        errormessage(" Bill amount must be bigger than zero ,smartarse");
        showError.style.visibility = 'visible';
    }
    
})

nextButton.addEventListener('click', ()=>{
    if(billAmount.value > 0){
        firstReveal.style.visibility = 'visible';
        showError.style.visibility = 'hidden';
    }
    else{
        errormessage("Bruh, Bill amount must be bigger than zero ");
        showError.style.visibility = 'visible'; 
    }
})

function calculateChange (amt){
    for(i=0; i<denominations.length; ++i){
        tableElements[i].innerText = Math.trunc(amt/denominations[i]);
        amt %= denominations[i];
    }
}

function errormessage(msg){
    showError.innerText = `${msg}`;
}

function displayDiff(diff){
    showDiff.innerText = `The diff is :${diff}`;
}