// async function

    const myPromise = new Promise((resolve,reject)=>{

    const isSuccess = true

    setTimeout(()=>{
        if(isSuccess){
            resolve({
                data:[1,2,3],
                message:"Ok"
            })
        }else{
            reject({
                message:"Error"
            })
        }
    },3000)

    })



async function getData(){
    // loading true
    try{
      const a = await myPromise
      console.log(a);

    //   renderTable() elements
    }catch(err){
        console.log(err);
        // active bs4 alert content
    }finally{
        console.log("loading false");
        // loading false
    }
    
}

getData()

// function A(num1,num2){


//     return num1 + num2
// }


// A(12,5)