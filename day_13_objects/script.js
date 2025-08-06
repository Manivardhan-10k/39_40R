//array methods 

// collection of elements  seperated by commas enclosed in []
// elements can be accessed using index 

// let nums=[1,2,3,4,5,6,6,78]
// nums[6]=7

//pop 
//shift 
//splice    -- add, remove , update
// nums.splice(7,1,8)
// console.log(nums);

// let arr=[1,"hi",true,null,[],{}]


// let arr=[1,2,3,58,95,6,123]
// arr.splice(3,4, 4,5,6,7,8,9,10)
// console.log(arr);


// console.log(arr.length);//10 
// console.log(arr.toString());
// console.log(arr.at(9));
// console.log(arr.join(" "));
// console.log(arr.pop());
// console.log(arr.shift());
// arr.push(11)
// console.log(arr);
// arr.unshift(0)
// console.log(arr);
// let arr=[0,[1,[2,[3,[4,5,6,7,8,9,10]]]]]
// console.log(arr.indexOf(0));
// console.log(arr.lastIndexOf(9));
// console.log(arr.concat([11,12,13]));
// console.log(arr.flat(Infinity)) 

// let arr=[1,2,3,4,6]
// delete arr[4]
// console.log(arr.length,arr);

// let arr=[1,2,3,4,6,0,5]
// console.log(arr.slice(1,3));//2 3 4 6
// console.log(arr.slice(-3))
// console.log(arr.includes(5));

// let arr=[1,10,22,35,200,1000,26,3,300]//[1,3,10,22,26,35,200,300,1000]
// arr.sort((a,b)=>a-b) //compare function
// arr.sort((a,b)=>b-a) //compare function
// console.log(arr);


//objects 

// it is a collection datatype 
// it is an unordered collection 
//values are stored in the form of key value pairs
// it is also mutable
// let details=["surya","40","hyd"]
// let my_details={
//     name:"surya",
//     batch:40,
//     city:"hyd"
// }

// console.log(my_details["name"]);
// console.log(my_details["city"]);
// my_details["batch"]="40r"
// my_details["age"]="22"
// delete my_details["age"]
// console.log(my_details);

// let students={
//     names:["surya","vidya","karthi","vijay","sindhu"]
// }

// console.log(students["names"][2]);


// keys  


// let faculty={
//     names:["suresh","yvrao","manivardhan","ajay","srinivas"],
//     subjects:["SE","crytography","js","python","DS"]
// }

// //keys
// console.log(Object.keys(faculty).length);
// //values 
// console.log(Object.values(faculty));
// //entries 
// console.log(Object.entries(faculty));


// let obj1={
//     name:"harsha",
//     batch:"40r"
// }
// let obj2={
//     age:23,
//     city:"hyd"
// }
// let obj3={
//     mob:"9848022382",
//     address:{
//         dr_no:75,
//         area:"kphb"
//         }
// }
// //assign 
// Object.assign(obj2,obj1,obj3)
// console.log(obj1)
// console.log(obj2)


//keys values entries assign 

//seal 

// let details={
//     name:"vijay",
//     batch:"40r",
//     age:22
// }
// Object.seal(details)
// details["mob"]=9848022338
// details["age"]=21
// console.log(details);
// //seal -- we can't add new key-value pairs , but we can modify the existing keys,values
// console.log(Object.isSealed(details));

//freeze 
// Object.freeze(details) 
// details["mob"]=9848022338
// details["age"]=21
// console.log(details);
// console.log(Object.isFrozen(details));


// let details={
//     name:"vijay",
//     batch:"40r",
//     age:22
// }
// Object.freeze(details)
// console.log(Object.isSealed(details));













