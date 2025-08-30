



// const myMath = {
//     PI:3.14,

//     total:function(...arg){
//         let sum = 0

//         for(let i=0;i < arg.length;i++){
//             sum+=arg[i]
//         }
//         return sum
//     }
// }


// const result = myMath.total(2,5,6,7,8,101)

// console.log(result);




// console.log(this);


const myCar = {
    model:"X5",
    marka:"Bayerische Motoren Werke",
    speed:0,
    is_new:true,

    go:function(){
        this.speed+=20
        console.log("Go!!!",this.speed);
        this.monitoring()

    },

    break: function(){
        this.speed-=5

        console.log("Break",this.speed);
        this.monitoring()

    },

    monitoring:function(){
        console.log("Monitoring...");
        console.log("Marka:", this.marka);
        console.log("Current speed:", this.speed);
        console.log("Is new:", this.is_new);
    },

    stop:function(){
        this.speed = 0 

        console.log("Stop",this.speed);
        this.monitoring()
    }
}

myCar.go()
myCar.go()
myCar.go()
myCar.go()


myCar.break()
myCar.break()
myCar.break()
myCar.stop()

console.log(myCar);


// myCar.stop()




var list = [1, 2, 3, 4, 5];

// function A(){
//     console.log(this);
// }

// A()