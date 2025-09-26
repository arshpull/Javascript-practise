console.log(this)
function display()
{
    console.log('hi')
}
window.display()

//Get Location

window.navigator.geolocation.getCurrentPosition((res)=>console.log(res.coords.latitude,res.coords.longitude),(err)=> console.log(err)) 
let a='Arhsad';
document.getElementById('btn').addEventListener("click",function(){
    window.navigator.mediaDevices.getUserMedia({video:true,audio:true}).then((data)=>{
        document.getElementById('vdo').srcObject=data;
    })
    // let obj={
    //     name:"raj"
    // }
    window.localStorage.setItem('name', a)
    let x= window.localStorage.getItem('name')
    console.log(x)
    // window.sessionStorage.setItem('name',a)
    // lety=window.sessionStorage.getItem('name')
    // consol.log(y)
})
//There are two basic storage local storage and session storages
