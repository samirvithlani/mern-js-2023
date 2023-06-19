// function demo(){

//     console.log('demo');
// }

// setTimeout(()=>{
//     demo();
// },3000)

function getData() {
  var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve("promise resolved...");
      reject("promise rejected...");
    }, 2000);
  });
  console.log(promise);
  promise.then((data) => {
    console.log(data);
  });
  promise.catch((err) => {
    console.log(err);
  });
}

// getData();



function printData(){



    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('print data resolved...')
        },2000)
    })

}

printData().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})


// var x = printData()
// console.log(x);
// x.then((data)=>{
//     console.log(data);
// })
// x.catch((err)=>{
//     console.log(err);
// })