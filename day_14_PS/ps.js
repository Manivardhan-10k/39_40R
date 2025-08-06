//problem solving 

//strings arrays objects 
//keys values entries assign seal freeze  issealed isfrozen 



//strings 
// palindrome 
//madam mon dad sis malayalam amma anna akka appa racecar radar
// let word="MalayAlam"  //malayalam 
// word=word.toUpperCase()
// let rev=""
// //len-1     0  
// for(var i=word.length-1;i>=0;i--){//index
//     rev+=word[i]
// }
// if (word===rev){
//     console.log("palindrome");
// }
// else{
//     console.log("not palindrome");    
// }

// console.log(word=== word.split("").reverse().join(""));



//anagram 

//eat ate    ,    silent listen ,  pot top ,  nagaram anagram

// debugger
// let word1="oopps"
// let word2="popos"   

// let is_anagram=true
// if (word1.length!==word2.length){
//     console.log("not anagrams");  
// }else{
//      //for iterating the strings
//      for(var i=0;i<word1.length;i++){///0 1 2   
//             let word1_count=0
//             let word2_count=0
//         // for getting the char count in word1
//         for(var j=0;j<word1.length;j++){//0 1 2
//             if(word1[i]==word1[j]){
//                 word1_count+=1
//             }
//         }
//         //for getting char count in word2
//         for(var k=0;k<word2.length;k++){
//             if(word1[i]==word2[k]){
//                 word2_count+=1
//             }

//         }     
//         //checking the count of char is same in both strings    
//         if(word1_count!==word2_count){
//             console.log("not anagrams",word1_count,word2_count);
//             is_anagram=false
//             break
//         }

//      }
//      if (is_anagram===true){
//         console.log("anagrams");
        
//      }
// }



//
// let word="psychology"
// let sub="syb"  
// let is_substr=false
// for (var i=0;i<word.length;i++){ //0
//     let temp=""
//    //0+3      3
//     for(var j=i;j<i+sub.length;j++){///0 1 2
//         temp+=word[j]
//     }
//     if (sub===temp){
//         is_substr=true 
//         break
//     }    

// }
// if(is_substr==true){
//     console.log(`${sub} is a substring of ${word}`);
    
// }
// debugger
let word="psychology"
let sub=""  
let is_sub=false
for(var i=0;i<word.length;i++){
    let temp=word.slice(i,i+sub.length)//(0,0+3) (1,4) (2,5)
    //psy   syc  ych cho hol olo log ogy
    if(temp===sub){
        console.log(`${sub} is a substring of ${word}`);
        is_sub=true
        break      
    }
}
if(is_sub==false){
    console.log(`${sub} is not  a  substring of ${word}`);   
}


//palindromic substring ,longest palindromic substring
//longest non repeating substring    "banana"   "ban"
