//functions
// reusable block of code , it has a certain functionality 

//named
//arrow
//anonymous function
//immediately invoked function  expression (IIFE)
// function name(parameters){

// }
// name()// arguments 


// let name=()=>{}
//  name()  


// let anonymous=function(msg){
//     console.log(msg);
// }
// anonymous("hello")

//IIFE 

// (function(){
//     console.log("hello");  
// })()  



//function declaration 
//named function

//function expression
//arrow function, anonymous  


//callback function 


//a function which is passed as a parameter / used inside a function 


// add 2 numbers 
// check sum is even or odd

// let sum=function(a,b){
//     return  even_odd(a+b)  //even_odd is a callback
// }
// let even_odd=(n)=>{
//     return n%2==0
// }
// console.log(sum(5,3));


// let sum=(a,b,fun)=>{
//   return fun(a+b)
// }

// let even_odd=(n)=>{
//     return n%2==0?"it is even":"it is odd"
// }

// console.log(sum(5,3,even_odd));


// HOF -- Higher Order Function
// a function which takes another as a parameter / return a function 
// let username="gandhi"
// let password="mahatma"
// let login=(user,pass)=>{
//     if(user===username && pass===password){
//         return true
//     }
//     else{
//         return false
//     }
// }

// // let show_reels=()=>{
// //     if (login("gandhi","godse")){
// //         return "reels"
// //     }
// //     else{
// //         return "login first"
// //     }
// // }
// let show_reels=(func)=>{
//     if (func()){
//         return "watch reels"
//     }
//     else{
//         return "login first"
//     }
// }

// let change_password=(user,pass,new_pass)=>{

//     if(login(user,pass)){
//         password=new_pass
//         console.log(password);
        
//         return "succesfully changed"
//     }
//     else{
//         return "login first"
//     }

// }
// console.log(show_reels(login));
// console.log(change_password("gandhi","mahatma","father"));



// let usernames=["ramcharan","ntr","surya","thalapathy","pawankalyan","karthi"]
// let user="karthi"
// let user_exists=false
// for (let i=0;i<usernames.length;i++){
//     if (usernames[i]==user){
//         console.log("username already taken");
//         user_exists=true
//         break      
//     }
// }
// if (user_exists==false){
//     console.log("username available"); 
// } 

//strings 
//collection of characters enclosed in '', "", ``(template literals/backticks)


// console.log('js is "great" language')

// let paragraph=`India is our country
// got indepence on 15th august
// in 1947`
// console.log(paragraph)




//string is a primitive datatype 
//it can store a  single value
// it is immutable datatype 
//can be accessed with indexes starting from 0


// const username="daya"
// // username[0]="j" 
// username="jaya"
// console.log(username);


// let username="mahesh babu" //6      0 1 2 3 4 5
// // console.log(username.length); 


// for(var i=0;i<username.length;i++){
//     console.log(username[i]);
// }
// console.log(username[i-1]);

// console.log(username[username.length-1]);  


// "mahesh"   length-1  >=0
// hseham




