//Recursive function

function A(num){
    if(num === 0){
        return
    };

    console.log(num);
    A(num - 1);
} 


A(5);// 5 4 3 2 1



function factorial(n){
    if(n === 0){
        return 1
    }

    return n * factorial(n - 1) // 5 * 
}


var result = factorial(5) // 5 * 4 * 3 * 2 * 1 = 120

console.log(result);