//Default Construtor
// class fruit
// {
//     taste;
//     constructor(){
//         this.taste='bad'
//     }
// }
// console.log(typeof fruit)
// let obj= new fruit()
// console.log(obj.taste)
// let obj2=new fruit()
// console.log(obj2.taste)


// parameterised constructor
class fruit
{
    taste;color; static c=200; // static value cannot be used by the obj,obj2. 
    constructor(a,b){
        this.taste=a;
        this.color=b;
    } 
    getData(){
        console.log(this.taste+" "+this.color)
    }
}
console.log(typeof fruit)
let obj= new fruit("good","yellow")
obj.getData()
// console.log(obj.taste,obj.color)
let obj2=new fruit("bad","red")
// console.log(obj2.taste,obj.color)
obj2.getData()
console.log(fruit.c)

class vegetables extends fruit {
    isHealthy;
    constructor(a,b,c){
        super(a,b)
        this.isHealthy=c;
    }
}
let obj3=new vegetables("jhakkas","darkGreen",true)
obj3.getData()
console.log(obj3.isHealthy)