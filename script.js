
const btnE1 = document.getElementById('btn');

btnE1.addEventListener('click', onClick);


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

function onClick () {
    const income = getSum(".data-inc");
    document.getElementById("totalincome").innerHTML = income;

    const expense = getSum(".data-exp");
    document.getElementById("expenses").innerHTML = expense;

    const total = income - expense;
    document.getElementById("total").innerHTML = total;

    console.log("calculation is", total);
    console.log("hello world");
}

























