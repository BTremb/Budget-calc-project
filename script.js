
const btnE1 = document.querySelector('.btn');

btnE1.addEventListener('click', income);

const btnE2 = document.querySelector('.btn');

btnE1.addEventListener('click', expenses);

const btnE3 = document.querySelector('.btn');

btnE1.addEventListener('click', calculate);

function income (){
    let firstnumber=document.getElementById("income").value;
    let total=parseInt(firstnumber);
    document.getElementById("totalincome").innerHTML=total;
}


function expenses (){
    let firstnumber=document.getElementById("savings").value;
    let secondnumber=document.getElementById("rent").value;
    let thirdnumber=document.getElementById("light").value;
    let fourthnumber=document.getElementById("utility").value;
    let fifthnumber=document.getElementById("phone").value;
    let sixthnumber=document.getElementById("loan").value;
    let seventhnumber=document.getElementById("vehicle").value;
    let eightnumber=document.getElementById("pet").value;
    let ninthnumber=document.getElementById("food").value;
    let tenthnumber=document.getElementById("misc").value;

    let total=parseInt(firstnumber)+parseInt(secondnumber)+parseInt(thirdnumber)+parseInt(fourthnumber)+parseInt(fifthnumber)+parseInt(sixthnumber)+parseInt(seventhnumber)+parseInt(eightnumber)+parseInt(ninthnumber)+parseInt(tenthnumber);
    document.getElementById("expenses").innerHTML=total;
}

function calculate (){
    let firstnumber=document.getElementById("savings").value;
    let secondnumber=document.getElementById("rent").value;
    let thirdnumber=document.getElementById("light").value;
    let fourthnumber=document.getElementById("utility").value;
    let fifthnumber=document.getElementById("phone").value;
    let sixthnumber=document.getElementById("loan").value;
    let seventhnumber=document.getElementById("vehicle").value;
    let eightnumber=document.getElementById("pet").value;
    let ninthnumber=document.getElementById("food").value;
    let tenthnumber=document.getElementById("misc").value;

    let eleventhnumber=document.getElementById("income").value;

    let twelthnumber=parseInt(firstnumber)+parseInt(secondnumber)+parseInt(thirdnumber)+parseInt(fourthnumber)+parseInt(fifthnumber)+parseInt(sixthnumber)+parseInt(seventhnumber)+parseInt(eightnumber)+parseInt(ninthnumber)+parseInt(tenthnumber);
    let total= parseInt(eleventhnumber)-parseInt(twelthnumber);
    document.getElementById("total").innerHTML=total;
}


