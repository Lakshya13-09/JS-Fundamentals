
// let btn = document.getElementById("btn");
// let msg = document.getElementById("msg");

// btn.addEventListener("click",show);

// function show(){
//     msg.innerHTML="I am clicked";
// }

// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
    
// });

// // key strokes

// document.addEventListener("keydown", function(e){ // keydown is the name of the event.
//     console.log(e.key);
// });

// bubbling :- (event ka propagation aise hoga jb child to parent means bottom to upward)
parent.addEventListener("click", ()=>{
    console.log("Parent clicked");
});
child.addEventListener("click", ()=>{
    console.log("child clicked");
});
// stop propagation

child.addEventListener("click",function(e){
    e.stopPropagation();
    console.log("stop propagation");  
});
