// console.log("hello index.js");
// console.log("hello index.js");
// let city="Bangalore";
// city="Delhi";
// console.log("city",city);

// const country="India";
// console.log("country",country);
// let marks = 90;
// let student = "Rahul";
// let isPassed = true;
// let x;
// let y=null;
// console.log("marks,student,isPassed,x,y---->",marks,student,isPassed,x,y);


// let student="Rahul";
// let x=5;
// let z=typeof x;
// typeof student;
// console.log("z--->",z);

// let a=10;
// let b=3.5;

// let inf=Infinity;
// let notANumber = NaN;
// console.log(typeof notANumber);

// let age="20";
// Number(age);
// parseInt("10.5");
// // console.log("age--->",typeof Number(age),typeof(parseInt("10.5")));
// let firstName= "Lakshya";
// let course= "JavaScript";

// firstName.length
// firstName.toUpperCase()
// firstName.toLowerCase()
// firstName.includes("Lak");// .includes tells if chatracters is part of the string or not.

// console.log(firstName.includes("Lak"));
// let first = "Lakshya";
// let last= "Jha";
// let full=first+ " " + last;
// console.log(full);

// let first = "lakshya";
// let age = 20;
//  let msg = `My name is ${first} and my age is ${age}`;
//  console.log("message",msg);

//  let a=10 , b = 20;
//  let sum=`sum is ${a+b}`;
// console.log("sum",sum);

// let a=10;
// let b="abc";

// let result = a*b;  //Nan
// console.log(typeof result);  //"numbers"
// console.log("5"*5)//here string will change in numbers and multiplication will happen.
// console.log("5"+5)// "55" here number will change into string.
// console.log(25*"abs")// this will print not a number

// var x=10;
// if(true){
//     var x=20;
// }
// console.log(x);

// hoisting = the declaration of variable are done before the top of the file or scope.

// console.log(a);
// var a = 10;

// console.log(b)
// let b = 20;

// 5=="5";
// true==1;
// null== undefined;
// 5==="5";
// true===1;
// null=== undefined;

// let numbers = [10,20,30,40];
// numbers.foreach(function(i){
//     console.log(i);
// });


//arrow function 
// syntax ()=>{} this is declaring function in arrow function where we can declare a function wirthout giving it a keyword

// function fib(n){
//     if(n==1){
//         return 1;
//     }
//     if(n<=0){
//         return 0;
//     }
//     return fib(n-1)+fib(n-2);
// }
console.log(fib(5))
let arr=["A","B","C"];
let a1=[1,2,3];
// let c= [...a1];
// c.push(90);
// console.log(a1);
// console.log(c);
let d= structuredClone(a1);
d.push(90);
console.log(d);
