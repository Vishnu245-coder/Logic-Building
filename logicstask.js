function avgThree() {
    
    let num1=parseInt(document.getElementById("Num1").value);
    let num2=parseInt(document.getElementById("Num2").value);
    let num3=parseInt(document.getElementById("Num3").value);

    let Avg=(num1+num2+num3)/3

    document.getElementById("res1").value=Avg.toFixed(1);
}
function avgthree() {
    let n1=parseInt(document.getElementById("n1").value);
    let n2=parseInt(document.getElementById("n2").value);
    let n3=parseInt(document.getElementById("n3").value);

    let average = (n1 + n2 + n3) / 3;
    document.getElementById("res2").value=average;

    console.log(average);
}

function n_sum(){
    let n4 = parseInt(document.getElementById("a1").value);
    let sum=n4*(n4+1)/2
    
    document.getElementById("SumNnatural").value = sum;
}
function navg(){
    let n5 = parseInt(document.getElementById("a2").value);
    let N_Avg=(n5+1)/2
    
    document.getElementById("res4").value = N_Avg;
}
function Profit_per() {
    let n6=parseInt(document.getElementById("cp").value);
    let n7=parseInt(document.getElementById("sp").value);
    let profit=n7-n6
    document.getElementById("profit").value=profit;
    let pp=(profit/n6)*100
    document.getElementById("pp").value=pp.toFixed(1)+"%";
}
function simple_intrest() {
    let n8=parseInt(document.getElementById("Principle").value);
    let n9=parseInt(document.getElementById("Rate").value);
    let n10=parseInt(document.getElementById("time").value);
    let SI=(n8*n9*n10)/100
    document.getElementById("si").value=SI;
}
function miss_angle(){
    let n11=parseInt(document.getElementById("angle1").value);
    let n12=parseInt(document.getElementById("angle2").value);
    let angle3=180-(n11+n12)
    document.getElementById("Angle3").value=angle3;
}
function lastdigit(){
    let n13=parseInt(document.getElementById("num").value);
    let last_digit=n13%10
    document.getElementById("last").value=last_digit;
}
function rem_lastdigit(){
    let n14=parseInt(document.getElementById("a3").value);
    let remove=parseInt(n14/10)
    document.getElementById("rem_last").value=remove;
}
function firstdigit(){
    let n15=parseInt(document.getElementById("a4").value);
    let first=parseInt(n15/100)
    document.getElementById("first").value=first;
}
function first_digit(){
    let n16=parseInt(document.getElementById("a5").value);
    let digit5=parseInt(n16/10000)
    document.getElementById("first_digit5").value=digit5;
}
function fahrento_Celsius() {
    let n17=parseInt(document.getElementById("a7").value);
    let celsius=((n17-32)*5/9)
    document.getElementById("Celsius").value=celsius.toFixed(1);
}
function Celsius_fahrento() {
    let n18=parseInt(document.getElementById("a8").value);
    let fahrenheit=(n18*(9/5)+32)
    document.getElementById("Fahrenheit").value=fahrenheit.toFixed(1);
}
function gross(){
    let basic_sal=parseInt(document.getElementById("salary").value);
    let hra=parseInt(document.getElementById("hra").value);
    let da=parseInt(document.getElementById("da").value);
    let hra_amount=basic_sal*(hra/100)
    let da_amount=basic_sal*(da/100)
    let gross_sal=basic_sal+hra_amount+da_amount
    document.getElementById("Gross").value=gross_sal;
}
function swap_twovar(){
    let a=parseInt(document.getElementById("var1").value);
    let b=parseInt(document.getElementById("var2").value);
    let c=a+b
    a=c-a
    b=c-b
    document.getElementById("swap").value=a;
    document.getElementById("swap2").value=b;
}
function swap(){
    let a1=parseInt(document.getElementById("var11").value);
    let b1=parseInt(document.getElementById("var22").value);
    [a1,b1]=[b1,a1]
    document.getElementById("swap1").value=a1;
    document.getElementById("swap12").value=b1;   
}
