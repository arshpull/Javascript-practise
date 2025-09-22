// const para =document.getElementById('count')
// let c=0;
// setTimeout(function(){
//     c++;
//     para.textContent=c
// },5000)
// for(let i=0; i<1000; i++)
// {
//     console.log("helloWorld")
// }
const paraa =document.getElementById('count')
let d=0;
let myTime=setInterval(function(){
    d++;
    paraa.textContent=d
    if(d==50){
        clearInterval(myTime)
    }
},50)