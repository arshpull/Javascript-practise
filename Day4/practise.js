// passing the value of function call in main funtion parameter 
function displayName(name){
    console.log(`My name is ${name}`)
}
displayName("Arshad")
displayName("Roshan")
displayName("Brenden Eich")



//using returns to do the task and return the value to (function_name)
function mul(a,b){
    return a*b
}
let res=mul(5,6)
console.log(res)



//passing parameters in different ways
function price(p){
    console.log(`The price of the t-shirt is ₹${p} 😂`)
} 
price(299)
price(399.99)


// normal function
function simple(){
    console.log("arshad")
}
let z=simple()
console.log(simple,z)
simple()

// function expression 
let z1= function(){
    console.log("Roshan")
}
z1()

// Arrow function
let z2= () => console.log("irshad")
z2()

// Write a function to add two number and print a result
function add(a,b) //Normal Function
{
    console.log(a+b)
}
add(2,3)

let add1= function(a,b){ //Function expression
    console.log(a+b)
}
add1(2,3)

let add3 = (a,b) => console.log(a+b) // Arrow function
add3(2,3)


