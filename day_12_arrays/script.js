//Arrays 
// datatype in js 
//[]
// it can be modified (mutable)
// we can store muliple values(element) and are seperated by comma
//elements can be accessed using indeces starting from 0
// let sample=[1,2,3,4,5,6,7,8,9,10]  //homogenous
// console.log(sample[0]);
// console.log(sample[sample.length-1]);
// console.log(sample[-1]); 

// let sample=[1,"hi",true,null,[],{}]// heterogenous datatype 
// console.log(sample[0]);
// sample[0]=100 
// console.log(sample[0]);

// for(let i=0;i<sample.length;i++){
//     console.log(sample[i],typeof(sample[i]));   
// }

// let num_arr=[1,2,3,4,5,6,7,8,9,10]
// num_arr.length=5  
// console.log(num_arr);


// methods 
//toString
// let num_arr=[1,2,3,4,5,6,7,8,9,10] 
// // let updated=num_arr.toString();
// // console.log(typeof(updated)); 

// let wish=["hi","how","are","you?"]
// console.log(wish.toString().replaceAll(","," "));  

//at -- return the element at the given index
// let num_arr=[1,2,3,4,5,6,7,8,9,10]  
// console.log(num_arr.at(3)); 
// let num_arr=[1,2,3,4,5,6,7,8,9,10]  
// console.log(num_arr.join("*"));


//pop -- removes the last element from the array 
// let num_arr=[1,2,3,4,5,6,7,8,9,10]  
// num_arr.pop()
// console.log(num_arr);

//shift -- removes the first element in the array 
// num_arr.shift()
// console.log(num_arr);


//push -- adds the elements at the end of the array 
// let num_arr=[1,2,3,4,5,6,7,8,9,10]  
// num_arr.push(11)
// num_arr.push(12,13,14,15)
// num_arr.push(true,[],false,null)
// console.log(num_arr);


//unshift -- adds elements to the start of the array 
// num_arr.unshift(0)
// console.log(num_arr);




// delete names[1] // not recommended
// delete names[0] // not recommended
// delete names[2] // not recommended
// delete names[3] // not recommended
// console.log(names.length,names[0]);
// let names=["surya","karthik","thalaiva","sethupathi"]  

// let names2=["prabhas","mahesh","vamshi","ravi teja"] 
// //concat - returns a new array with values from the arrays added together
// console.log(names.concat(names2));
// console.log(names);
// console.log(names2);


//toString at join pop push shift unshift  delete concat


//flat 

// let matrix=[[1,2,3],[4,5,6],[7,[8,[9,[10,[11,[12,[13,[14,[15]]]]]]]]]]  //nested array
// // infinity  -- it represents a positive infinite number
// // -infinity  --   
// let flatted=matrix.flat(Infinity)
// console.log(flatted);



// let nums=[1,2,3,4,5,6,7,8,9,10]
// console.log(nums.slice(1,5));//2345
// console.log(nums.slice(1));
// console.log(nums.slice(-6)); 

// let directors=["sandeep","rajamouli","meher ramesh","rgv","vamshi","siva","puri","harish shankar","sandeep"]
// console.log(directors.indexOf("puri"));
// console.log(directors.indexOf("rgv"));

// console.log(directors.lastIndexOf("sandeep")); 

// console.log(directors.at(15));
// console.log(directors.indexOf("sreekanth"));

// console.log(directors.includes("rgv"));



//split+slice ==splice  

//CRUD 
//create 
//read 
//update
//delete

// let  nums=[1,2,3,5,6,7,8,9,10,12]

// // nums.splice(0,2)  // ..n    deletion
// // console.log(nums);
// nums.splice(3,0,4)   // creation

// nums.splice(nums.length-1,1,11)  // updation


// let num=[1,5,9,6]
// //start index, delete count  , .......elements to be added
// num.splice(1,0,2,3,4)
// num.splice(5,0,6,7,8)
// num.splice(9,1,10)
// console.log(num);









 

















