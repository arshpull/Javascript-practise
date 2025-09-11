let x=20 ;
if(x>5){
    console.log(x)

}
//ternary operator
let m=100;
let n=12;
m>n?console.log("yes"):console.log("no")
// if & else
let isGood=false;
if(isGood)
{
    isGood= false;
}
else
{
    isGood=true;
}
console.log(isGood)
// WAF to return whether a person is eligible to vote or not.
let person=18;
if(person>=18){
    console.log("Eligible to vote")
}
else{
    console.log("Not eligible to vote")
 }
 //by using function
 //age is parameter
 function age(age){
    if(age>=18){
        console.log("Right To Vote")
    }
    else{
        console.log("No Right To Vote")
    }
 }
 age(18)
 age(17)
 age(16)
