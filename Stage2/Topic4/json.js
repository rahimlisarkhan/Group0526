




let personalInfo = {
    name:"John",
    surname:"Doe",
    age:24,
    country:"USA",
    address:[{
        city:"Boston",
        street:"Boston village 4"
    },{
        city:"Boston",
        street:"Boston village 14"
    },{
        city:"Boston",
        street:"Boston village 54"
    }
   ],
    is_married:true,
    children:3,
    career:{
        point:5,
        last_position:"Developer"
    }
} // JSON - JavaScript Object National 


// const goverment = [personalInfo,personalInfo,personalInfo,personalInfo,personalInfo]


// const result = personalInfo["name"]
const result = personalInfo.career.last_position


// const arr = personalInfo.career.point

// for (let info of arr){
//     console.log(info.street);
// }

console.log("personalInfo",result);

