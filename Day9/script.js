// //DOM :- Doucument Object Model

// // DOM selection
// console.log(document)
// console.log(document.getElementById("heading").textContent="hello arshad")
// let x= document.getElementById("number").textContent
// x++;
// console.log(document.getElementById("number").textContent=x)// 
// console.log(document.getElementsByTagName('h1')[0])
// console.log(document.getElementsByClassName('heading'))
// console.log(document.querySelector('#number'))
// console.log(document.querySelectorAll('#number'))
console.log(document)
let para=document.getElementById('count')
console.log(para.textContent)
let c= para.textContent
function incr(){
    c++;
    para.textContent=c;
}
function decr(){
    c--;
    para.textContent=c;
}
function reset(){
    para.textContent=0;
}