
const btnE1 = document.getElementById('btn');

btnE1.addEventListener('click', getIncome);

btnE1.addEventListener('click', expenses);

btnE1.addEventListener('click', calculation);


function getIncome(){
    let incomes = document.querySelectorAll('.data-inc');
    let total = 0
     for (let num=0; num <incomes.length; num++) {
        if(parseInt(incomes[num].value)) {
            total += parseInt(incomes[num].value);
        }
     }
    document.getElementById('totalincome').innerHTML=total;
}


function expenses(){
    let expenses = document.querySelectorAll('.data-exp');
    let total = 0;
    for (let num = 0; num < expenses.length; num++) {
        if(parseInt(expenses[num].value)) {
            total += parseInt(expenses[num].value);
        }
    }
    
    document.getElementById('expenses').innerHTML=total;
}

function calculation() {
    let incomes = document.querySelectorAll('.data-inc');
     for (let num=0; num <incomes.length; num++) {
        if(parseInt(incomes[num].value)) {
            total += parseInt(incomes[num].value);
        }
     }

     let expenses = document.querySelectorAll('.data-exp');
     for (let num = 0; num < expenses.length; num++) {
         if(parseInt(expenses[num].value)) {
             total += parseInt(expenses[num].value);
         }
     }

    let total=(incomes)-(expenses);
     document.getElementById('total').innerHTML.total;

}






