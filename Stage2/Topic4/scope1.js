


let a = 10

// function B(){

//     let a = 12
    

//     function C(){
//         // let a =  4
//         console.log(a); //4
//     }


//     C()

//     // part 1
//     // var a
//     // console.log(a);
//     // var a = 15
// }



// B()



// function foo() {
//   console.log("Foo!");

//   var bar = function () {
//     console.log("Bar !");
//     return 1001;
//   };

//   //   bar();
//   return bar;
// }

// let netice = foo();

// let result = netice(); // ?????? Explain please step by step 


// function foo(){

//     function bar(){

//         return 15
//     }

    
    
//     return bar

// }


// var netice = foo()

// var sonNetice = netice() // 15

// console.log(sonNetice);


function innerFn() {
  let x = 10;

  function outerFn() {
    const y = 11;
    return y * x;
  }

//   var outerFn = [1,2,34,6]

  let resultInner = outerFn()

  return resultInner  //110
}

let result = innerFn();

console.log(result);



// console.log(result());// ? 110



