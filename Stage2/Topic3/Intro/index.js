
// function A(arg1 = 0){
//     console.log("Hello from A",arg1);
// }

// var list = [1, 2, 3, 4, 5,"Hello",true, false,null,undefined, A,[2,3,4]];


// var arraydakiFn = list[10];


// arraydakiFn()

// // console.log(arraydakiFn);



// var students = ["John","Marry"]

// var age = 29

// var isMarried = true


// function sayHello(){
//     console.log("Hello World!");
    
// }


// sayHello()
// sayHello()
// sayHello()


// function Foo(arg1, arg2, arg3, arg4){

//     console.log("Arg1",arg1.reverse());
//     console.log("Arg2",arg2+100);
//     console.log("Arg3",arg3);

//     // console.log("arg4",arg4);
    

//     if(arg3 == true){
//         console.log("Yes");
//         arg4()
//     }else{
//         console.log("No");
//     }
    
// }

// Foo(students,age,isMarried,sayHello)

// function sum(num1,num2){

//     return num1 + num2
// }

// function minus(num1,num2){
//     var minusResult = num1 - num2
//     return minusResult
// }


// var riyaziResult = sum(45,90) //135

// console.log(riyaziResult);



// function showResult(fullName,calcFn){

//     var result1 = calcFn(20,5)

//     var sentence = `Hello ${fullName}! Your result is ${result1}`

//     console.log(sentence);

// }


// showResult("Mehemmed",sum)

// showResult("Esmer",minus)


function isiqUstasi(money){

    var result = Math.round(money * .5)
    return result
}

function suUstasi(money){

    var result = Math.round(money * .3)
    return result
}

function qazUstasi(money){

    var result = Math.round(money * 0.2)
    return result
}



// function ustalar(name,amount,ustaFn){

//     var result = ustaFn(amount)
//     var answer = `Men ${name}!Sene bu odenisin qarisiliginda ${result} gun xidmet gosterecem`
//     console.log(answer);

//     if(result > 10){
//         console.log("Yaxsi teklifdir!");
//     }else{
//         console.log("Cox baha isleyir!");
//     }

// }

// ustalar("Qaz ustasi",35,qazUstasi)
// ustalar("Isiq ustasi",35,isiqUstasi)
// ustalar("Su ustasi",35,suUstasi)

// var result1 = qazUstasi(25)
// var answer = `Men Qaz ustasi sene bu odenisin qarisiliginda ${result1} gun xidmet gosterecem`
// console.log(answer);

    // if(result1 > 10){
    //     console.log("Yaxsi teklifdir!");
    // }else{
    //     console.log("Cox baha isleyir!");
    // }


// var result2 = isiqUstasi(25)
// var answer2 = `Men Isiq ustasi sene bu odenisin qarisiliginda ${result2} gun xidmet gosterecem`
// console.log(answer2);

  // if(result2 > 10){
    //     console.log("Yaxsi teklifdir!");
    // }else{
    //     console.log("Cox baha isleyir!");
    // }

// var result3 = suUstasi(25)
// var answer3 = `Men Su ustasi sene bu odenisin qarisiliginda ${result3} gun xidmet gosterecem`
// console.log(answer3);

  // if(result3 > 10){
    //     console.log("Yaxsi teklifdir!");
    // }else{
    //     console.log("Cox baha isleyir!");
    // }


//========================================


function handleElement(e){
    return `Ders saati: ${e * 10}`
}


function handleElement2(e){
    return e /10
}



var list = [2,4,6,8,9]


function mapNewArray(arr,isGoren){

    var newArray = []

    for(var i = 0; i < arr.length; i++){
        var el = arr[i]

        // var result = el * 10
        var result = isGoren(el)
        newArray.push(result)
    }

    return newArray
}



var resultArray =  mapNewArray(list,handleElement)
var resultArray2 =  mapNewArray(list,handleElement2)

console.log(resultArray);
console.log(resultArray2);
