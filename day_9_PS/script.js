// reverse a number 
// let num=123 //321   1  2  3
// let rev=0
// while (num>0){  ///123  12 1 0
//     let last_digit= num%10   //3  2 1
//     rev= rev*10+last_digit  //0+3  3  3*10+2 32  320+1 321
//     num=Math.floor(num/10)    //123  12.3  12  1.2 1  0.1 0
// }
// console.log(rev);



//armstrong number 

//3    1**3+5**3+3**3    1+125+27 153 

// num=1634
// num2=num
// num3=num
// len=0 
// while (num>0){ //153  15 1
//     len+=1  //1 2 3
//     num=Math.floor(num/10)  //15 1 0
// }
// let sum=0
// while (num2>0){//153  15 1
//     let last_digit=num2%10  //3 5 1
//     sum+= last_digit**len //0+3**3 27   27+5**3 152 152+1**3  153
//     num2=Math.floor(num2/10) // 15 1 0
// }
// if (num3===sum){
//     console.log("armstrong number");  
// }
// else{
//     console.log("not armstrong");   
// }


//perfect number 

// let num=28         //1 2  4 7 14  28
// //1 2 3      6==num 
// let sum=0
// for (let i=1;i<num;i++){ 
//     if (num%i==0){
//         sum+=i
//     }
// }
// if (num==sum){
//     console.log("perfect");
    
// }else{
//     console.log("not perfect"); 
// }


//fibonocci series
//0 1 1 2 3 5 8 13 21 34 55 89 144  233 377......
// let a=0 
// let b=1 
// a=a+b   //1
// b=a-b   //1-1 0
// a=a-b  //1-0 1
// console.log(a,b);
 
// for (let i=1;i<=100;i++){
//     if (i==100){
//         console.log(a) //0 
//     }
//     c=a+b 
//     a=b  
//     b=c  
// }



//GCD  --greatest common divisor 
//HCF -- highest common factor 

// let num1=18   //1 2  3 4 6 12
// let num2=18   //1 2  3 6 9 18   

// //condition? true block : false block
// let smallest=  num1>num2?num2:num1 
// let gcd=0
// for(let i=1;i<=smallest;i++){
//     if(num1%i==0 && num2%i==0){
//         gcd=i //1 2 3  6  9 18
//     }
// }
// console.log(gcd); 


//LCM -Least Common Mulitple 

let num1=5 //
let num2=7 //
let highest=num1>num2?num1:num2
let lowest=num1>num2?num2:num1 
// console.log(highest,lowest); 
if (highest%lowest==0){
    console.log(highest," is the LCM");  
}
else{
    let temp=highest +highest  //14  21  28 35
    let not_found=true
    while(not_found){
        if (temp%highest==0 && temp%lowest==0){
            console.log(temp,"is the LCM");
            not_found=false 
        }
        temp=temp+highest  //150
    }
}



// let num=123456789 // 20 25



