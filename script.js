
const btnE1 = document.getElementById('btn');

btnE1.addEventListener('click', getSum);


function getSum(classname) {
    let inputs = document.querySelectorAll(classname);
    let total = 0;
    for (let num = 0; num < inputs.length; num++) {
        if (parseInt(inputs[num].value)) {
            total += parseInt(inputs[num].value);
        }
    }
    
    return total;

}

const incomes = getSum('.data-inc'); 

const expenses = getSum('.data-exp');

























