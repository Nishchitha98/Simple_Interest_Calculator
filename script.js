function updateRate(){
    let rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
function compute(){
    let principal=parseFloat(document.getElementById("principal").value);
    let rate=parseFloat(document.getElementById("rate").value);
    let years=parseFloat(document.getElementById("years").value);
    if(principal<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    let interest=principal*years*rate/100;
    let amount=principal+interest;
    let result=document.getElementById("result");

    let year=new Date().getFullYear()+years;

        result.innerHTML=`If you deposit $<mark> ${principal}</mark>,<br> at an interest rate of <mark>${rate}</mark>%.<br> You will receive an amount of $ <mark>${amount}</mark>,<br> in the year <mark> ${year}</mark><br>`;
    
}