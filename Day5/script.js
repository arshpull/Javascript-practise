//Revision for function
function division_fun(a,b){     //Nomal Function
    console.log(a/b)
}
division_fun(20,10)
let division_fun2 = function(a,b) // Function Expression
{
    console.log(a/b)
}
division_fun2(20,10)

let division_fun3=(a,b) => console.log(a/b) //Arrow Function
division_fun3(20,10);

//IIFE(Imediate Invoke Function Expression)
(function(){
    console.log("Hi!")
})();

(function(){
  let generatedUid=Math.floor(Math.random()*100000)  
  console.log(`Your UID is ${generatedUid}`)
})();
(function(){
  let generatedUid=Math.floor(Math.random()*100000)  
  console.log(`Your UID is ${generatedUid}`)
})();
(function(){
  let generatedUid=Math.floor(Math.random()*100000)  
  console.log(`Your UID is ${generatedUid}`)
})();

//Callback Function 
function mad(){
    console.log("I'm mad")
}
function bad(){
    console.log("I'm bad")
}
function fun(a,b){
    a()
    b() 
}
fun(mad,bad)

// Callback function 2
function incr(a)
{
    return a++;
}
function decr(a)
{
    return --a;
}
let r =incr(7)
console.log(r)
function logic(a,b)
{
    let x= a(6)+ b(5)
    console.log(x)
}
logic(decr,incr)

//problem of closur explained
function outer(){
    var x=25;
    return x;
} 
// let yww=outer()
console.log(outer())

 