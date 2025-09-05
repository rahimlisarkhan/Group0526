

// console.log(Math);


// const myMath = {
//     PI: 3.14,

//     sqrt:function(num) {
//         return num ** 0.5
//     },

//     square:function(num) {
//         return num * num
//     },

//     cube:function(num) {
//         return num * num * num
//     }
// }



// const {cube, square } = myMath


// console.log(cube(3));
// console.log(square(3));


// const currentDate = new Date()


// console.log(currentDate.toUTCString());
// console.log(currentDate.toISOString());
// console.log(currentDate.toDateString());




// const result = currentDate.getFullYear()
// const result = currentDate.getDate()
// const result = currentDate.getHours()
// const result = currentDate.getMinutes()
// const result = currentDate.getMilliseconds()
// const result = currentDate.getTime()


// console.log(result);


// function getAzerbaijanTime() {
//     const months = ["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentyabr","Oktyabr","Noyabr","Dekabr"]
//     const weeks = ["B.e","C.e","C.a","C.a","C","S","B"]

//     const currentDate = new Date()
//     const year = currentDate.getFullYear()
//     const month = months[currentDate.getMonth()]
//     const date = currentDate.getDate()
//     const weekDay = weeks[currentDate.getDay() - 1]



//     const hours = currentDate.getHours()
//     const minutes = currentDate.getMinutes()
//     const seconds = currentDate.getSeconds()


//     const convertHours = hours < 10 ? "0" + hours : hours
//     const convertMinutes = minutes < 10 ? "0" + minutes : minutes
//     const convertSeconds = seconds < 10 ? "0" + seconds : seconds

//     return `${date} ${month} ${year} - ${weekDay} ${convertHours}:${convertMinutes}:${convertSeconds}`

// }



// const result = getAzerbaijanTime()

// console.log(result);



// const currentDate = new Date()

// currentDate.getTimezoneOffset()


// const currentDate = new Date()


// // currentDate.setFullYear(currentDate.getFullYear() + 5)
// currentDate.setMonth(11)

// console.log(currentDate);



const currentDate = new Date()
const worldCupDate = new Date()

 worldCupDate.setFullYear(2026,5,10)


if(currentDate < worldCupDate) {
    console.log("Hələki dünya çempionatına var");
} else {
    console.log("Dünya çempionatı başladı");
}



const moment = {
    
    formatDate:function(date,format) {
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()

        if(format === "dd/mm/yyyy") {
            return `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year}`
        } else if(format === "mm/dd/yyyy") {
            return `${month < 10 ? "0" + month : month}/${day < 10 ? "0" + day : day}/${year}`
        } else if(format === "yyyy/mm/dd") {
            return `${year}/${month < 10 ? "0" + month : month}/${day < 10 ? "0" + day : day}`
        } else {
            return `Format not found`
        }
    },

    currentDate:function() {
        return new Date()
    },

    addDays:function(date,days) {
        const result = new Date(date)
        result.setDate(result.getDate() + days)
        return result
    },

    diffDays:function(date1,date2) {
        const diffTime = Math.abs(date2 - date1)
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        return diffDays
    }
}


// const result = moment.formatDate(new Date(),"dd/mm/yyyy")
// const result = moment.addDays(new Date(),5)
const result = moment.diffDays(new Date("2024-06-01"),new Date("2024-06-20"))

console.log(result);





const list =[1,2,3,4,5,6,7,8,9,10]


const result1 = list.pop()

console.log(list); // DONE [1,2,3,4,5,6,7,8,9]
console.log(result1);// 10

