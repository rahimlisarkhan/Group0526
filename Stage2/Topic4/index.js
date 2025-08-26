

// function sayHello(age){

//     // let result = age >= 18 ? "Buyurun kecin" : "Giris qadagandir!"

//     // if(age>=18){
//     //     result = "Buyurun kecin"
//     // }else{
//     //     result = "Giris qadagandir!"
//     // }

//     console.log(result);
// }


// sayHello(16)


// var list = [1,2,3,4]

// // var list2 = list.concat()
// // var list2 = list.map(function(el){
// //     return el
// // })


// var list2 = [101,102, ...list, 1001] // spread

// console.log(list2);




// function hesablayan(arg1,arg2,arg3){
function hesablayan(...args){
 console.log("hesablayan",args);

    // var result = args.reduce(function(sum,el){
    //     return sum + el
    // },0)


    let result = 0

    for (let el of args){
        result+=el
    }

    return result
}


const a = hesablayan(1,100,102,40)

console.log(a);


// Math.max(1,2,3,4,5,6,7)