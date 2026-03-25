// console.log("hello index.js");
// let city="Bangalore";
// city="Delhi";
// console.log("city",city);
// let arr=["A","B","C"];
// let a1=[1,2,3];
// let c= [...a1];
// c.push(90);
// console.log(a1);
// console.log(c);
// let d= structuredClone(a1);
// d.push(90);
// console.log(d);

// function greet(name , sayBye){
//     console.log(" Hello " + name);
//     sayBye();
//     console.log("call rturning back");
// }

// // function sayBye(){
    
// // } 
// greet("Lakshya" , ()=>{
//     console.log(" say byee");
// });

// let result = greet("Lakshya ", ()=>{
//     console.log("Bye !");
// })
// function calculate(a,b,operation){
//     return operation(a,b);
// }
// function add(x,y){
//     return x+y;
// }
// console.log(calculate(10,5,add));

// // Every callback is passed to a HOF
// // Function using another function = High Order Function
// // Function being passed = Callback

// let students = ["Aniket" , "Lakshya" , "Ayush"];
// students.forEach((name, index) => {
//     console.log(index + "->" + name);
// });
// students.forEach((i,k,j)=>{
//     console.log("array log" , i,k,j);
// });
// // forEach does not return a new array it is just udes to iterate the loop;

// let prices = [100,200,300];
// let gstPrices = prices.map(p => p+p*0.18);

// let gstPrices2 = prices.map((value)=>{
//     return value + value * 0.18;
// })
// console.log(gstPrices,prices);
// let r1 = prices.map(
//     (x)=>{
//         return x*x;
//     }
// )
// console.log("Map result" ,r1);
let cart=[
    {item: "Book", price: 200, loss: 50},
    {item: "Pen", price: 50, loss:90},
    {item: "Bag", price: 1000,loss:50}
];
let initialloss=10;
let total = cart.reduce((sum,obj)=> sum+obj.price,0);// here 0 is accumulator and this denotes that we have initialized sum with 0;
let loss= cart.reduce((loss,obj)=>{
    return loss+obj.loss;
},initialloss);
console.log(total);
console.log(loss);

