// console.log(window)
        //0123456789  
// let str = " Javascript "
         
// let strn = "JS is easy to understand JS"
// //console.log(str)
// console.log(str.length)
// console.log(str.charAt(2))
// console.log(str.charCodeAt(3))
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.slice(3,5))
// console.log(str.concat(" is king "))
// console.log(str.trim())

// console.log(strn.split(" "))
// console.log(strn.includes("JS"))
// console.log(strn.replaceAll("JS","C++"))
// console.log(strn.lastIndexOf("JS"))


// //aray
// const arr = [1,2,3,4,5,10,2,8,0];
// const brr = [6,7,8]
// //    console.log(arr.push(6))
// //   console.log(arr.pop())  
// //   console.log(arr.pop())
// //   console.log(arr.unshift(0))
// //   console.log(arr.shift())
// //   console.log(arr)

// // console.log(arr.toString())
// // console.log(arr.join(" "))
// // console.log(arr.concat(brr))
// // // console.log(arr.splice(0,2))
// // // console.log(arr)

// // //  console.log(arr.slice(0,2))
// // //  console.log(arr)
// // console.log(arr.indexOf(4))
// let count = 0;

// //arrow function 
//  //()=>{}
// brr.forEach((n)=>{
//         count++
// })
// console.log(count)
//  //console.log(arr)
// let doubled=arr.map((n)=>{
//         return n*n;
// })
// console.log(doubled)


// let sum = arr.reduce((total,curr)=>{
     
//  return total+curr;
// })
// console.log(sum)

// let fil = arr.filter((n)=> n>2)
// console.log(fil)
// console.log(arr.sort())
// console.log(arr.find((n)=>n===2))

// const person = {
//         "firstname":"Suyash",
//         "lastName":"Gupta",
//         "Age":24,
//         "isEmployed":true,
//         sayhello: function(){
//                 console.log("hiii")
//         },
//         eat: ()=>console.log("I like Indian food")
// }
// console.log(person.firstname)
// console.log(person.sayhello())
// for(var key in person){
//         //console.log(key+ person[key])
//         console.log(`${key}: ${person[key]}`)
// }
 

//fuunction statments

a();
//b();
function a(){
        console.log("hiiii")
}
//function Expression

var b = function(){
        console.log("hiii i am b ")
}
console.log(a)
console.log(b())
// function(){
//         console.log("hiiii")
// }


var square = function (param1){
        return function (){
                return param1*param1
        }
}
console.log(square(2)())


//async??
//setTimeout
//setInterval
//fetch 
//promiese
//axios
//XMLHttpRequests

// console.log("hiiii")
// setTimeout(function(){
//         console.log('hiii2')
// },5000)
// console.log("hiii3")

// var ans = fetch("https://randomuser.me/api/")
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

//promises 
const promise = new Promise((res,rej)=>{
        if(false){
                res("Success")
        }else{
                rej("err")
        }
       
})

promise.then((result)=>{
        console.log("bhai work is done",result)
}).catch((err)=>{
       console.log("bhai kaam nhi hua",err)
})


console.log(promise)



// function user(){
//         fetch("https://randomuser.me/api/")
//         .then(res=>res.json())
//         .then(data=>console.log(data))
//         .catch(err=>console.log(err))

// }
// user();

async function user(){
      let raw= await fetch("https://randomuser.me/api/")
      let data = await raw.json()
      console.log(data);
        // .then(res=>res.json())
        // .then(data=>console.log(data))
       // .catch(err=>console.log(err))

}
user();

