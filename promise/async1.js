function throwData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve("throw data resolved...");
    }, 2000);
  });
}

async function getData() {
  console.log("getData function called...1");

//   throwData()
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

        var x = await throwData()
        console.log(x);

  console.log("getData function called...2");
}
getData();

// throwData().then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })
