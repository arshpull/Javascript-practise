// REST and SPREAD Operator

function fun(a,...b){
    console.log(a,b)
    let z=[1,2,3,4,5];
    console.log(z);
    //  [p,...q]=z;
    //  console.log(z); 
    //  let y=[...q,4,5]
    //  console.log(y)

}
fun(3,4,5,6,7,8,9)

function fruits(a,...b){
    console.log(a,b)
}
fruits("mango","apple","pineApple","lichhi","adragon")

let arr1=[1,2],arr2=[3,4]
// let arr3=arr1+arr2
// console.log(arr3)
arr1=[1,2,...arr2]
console.log(arr1)
// array Destucturing
let arr4=[5,6,7]
let [a1,b2,c3]=arr4;
console.log(a1,b2,c3) 
//swap two numbers
function swap(a,b){
    console.log(a,b);
    [b,a]=[a,b];
    console.log(a,b)
}
swap(5,6)

//object destructuring
let obj={
    name:'raj',age:56
}
const{name,age}=obj;
console.log(name)
console.log(age)


export{name,age,fun}//normal export