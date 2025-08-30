
// let suMiqdari = 0;
// let suSayi = 0;


// let suMiqdariJavad = 0;
// let suSayiJavad = 0;

// function suSaygac(){
  

//    suMiqdari += miqdar;
//    suSayi++;


// }


// function suSaygacJavad(){
  

//    suMiqdari += miqdar;
//    suSayi++;


// }




// function suSaygac(){

//   let suMiqdari = 0;
//   let suSayi = 0;

//    function suHesabatinArtir(miqdar){
//     suMiqdari += miqdar;
//     suSayi++;

//     const resultList = [suMiqdari,suSayi]

//     return resultList

//    }


//    return suHesabatinArtir

// }


const suSaygac = () => {

  let suMiqdari = 0;
  let suSayi = 0;

   const suHesabatinArtir = (miqdar) =>{
    suMiqdari += miqdar;
    suSayi++;

    const resultList = [suMiqdari,suSayi]

    return resultList

   }


   return suHesabatinArtir

}



const javadSuSaygaci = suSaygac() // suHesabatinArtir fn Javad ucun bu variabledadir

javadSuSaygaci(2)

const result1 =  javadSuSaygaci(2)

console.log(result1);


javadSuSaygaci(2)


const result2 =  javadSuSaygaci(4)

console.log(result2);
