//create your own promises

let sucess= true;
let myPromise = new Promise((resolve,reject)=>{
    if(sucess){
        resolve("SUCCESS");
    }
    else{
        reject("FAILURE")
    }
});

// handling promises
myPromise.then(result =>{ // then is used to execute th eresolve execution
    console.log("result", result);
    
})
.catch(error=>{
    console.log("error", error); // catch is executed when the condition is false or failed
})
.finally(()=>{
    console.log("Completed");
})
fetch("https://dummyjson.com/products")
  .then((response) =>{
    console.log("raw response",response);
    return response.json;
    
  }) // returns another promises
  .then(data => {
    console.log(data.products);
  })
  .catch(error=>{
    console.log("Error:", error);
  });

  function getData(callback){
    setTimeout(() => {
        callback("Data");
    },5000);
  }