const inputtext=document.getElementById('na')
const paratext=document.getElementById('para')

function writeof(){
    paratext.textContent=inputtext.value
}
function writeof2(){
    paratext.textContent=document.getElementById('choice').value
}

function display(){
    console.log("Hello World!")
}
document.body.onkeydown=function(){
    console.log("you pressed a key")
}
a=20; b=30
document.body.onkeydown=function(e)
{
    console.log(e.key)
    if ( e.key == 'a'){
        console.log("The addition is a"+(a+b))
    }
    else
    {
        console.log("Press a for addition")
    }

}
document.getElementById('btn1').addEventListener("click",function(){
    console.log("Hello Roshan")
})
document.getElementById('btn2').addEventListener("click",function(){
    console.log("i love you")
})