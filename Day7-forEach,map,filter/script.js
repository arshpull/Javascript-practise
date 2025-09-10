// function show(){
//     alert("kya dekh rahe ho")
// }
// forEach Methods of array  in  JavaScrit
let arr=[1,2,3,4]
let arr2=arr.forEach(function(a){
    return a*2;
})
console.log(arr2)
// map Methods of array  in  JavaScrit
let arr3=[1,2,3,4]
let arr4=arr.map(function(a){
    return a*2;
})
console.log(arr4)

// exapmle 2
let arr5=[2,3,4,5]
let arr6=arr5.map(function(v){
    return v%2==0;
})
console.log(arr6)

// filter Methods of array  in  JavaScrit
let arr7=[1,2,3,4]
let arr8=arr7.filter(function(v){
    return v%2==0;
})
console.log(arr8)
let Name=["irshad","roshan","yasmeen","chand","sarwari","naushad","arshad","aman"]
console.log(Name.sort())
let n=[1,11,111,2,22,222,33,4444,55555,4,44]
console.log(n.sort(function(a,b){
    return b-a ;
}))

// reduce method in array of JavaScipt

let rrr=[3,4,5,6]
res = rrr.reduce(function(pv,cv){
    return pv+cv;
},10)
console.log(res) 