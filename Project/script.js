const paraCount=document.getElementById('count')
let c=paraCount.textContent;
function incr(){
    c++;
    paraCount.textContent=c
}
function decr(){
    c--;
    paraCount.textContent=c
}
function reset(){
    c=0;
    paraCount.textContent=c
}
let colors=["red","blue","orange","green","voilet","yellow"]
function change(){
    const cPick= Math.floor(Math.random()*100000000).toString(16)
    document.body.style.backgroundColor= "#"+cPick;
}