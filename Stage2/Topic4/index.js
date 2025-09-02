

const myObj = {
    name: "John",
    age: 30,
    city: "New York",



    showInfo:function(a,b,c) {
    const result =  `fullname:${this.name} | ${this.age}` 
    console.log(this);

    console.log("a",a);
    console.log("b",b);
    console.log("c",c);
    
    console.log(result);

    return result
}   
};



const myObj2 = {
    name: "Marry",
    age: 22,
    city: "Mayami",

};





const show2 =  myObj.showInfo.bind(myObj2,1,2,3)

show2()
console.log("show2",show2);

// myObj.showInfo.call(myObj2,1,2,3)
// myObj.showInfo.apply(myObj2,[1,2,3])
// myObj.showInfo()





// function showInfo(a,b,c) {
//     const result =  `fullname:${this.name} | ${this.age}`
//     console.log(this);

//     console.log("a",a);
//     console.log("b",b);
//     console.log("c",c);
    
//     console.log(result);

//     return result
// }   


// showInfo()
// showInfo.call(myObj)
// showInfo.call(myObj2,2,3,4)


// showInfo.apply(myObj)
// showInfo.apply(myObj2,[2,3,4])


