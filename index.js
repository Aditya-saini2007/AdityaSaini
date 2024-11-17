//alert("hello");//one time pop up



//let name = prompt("hello");
//console.log(name);
//popup with input 



//Q. get user to input a number using prompt("enter a number").check if the number is multiple of  or not.

// let num = prompt("enter a number");
// if(num % 5 === 0) {
//     console.log(num, "is multiple of 5"); 
// }
// else{
//     console.log(num,"is not multiple of 5");
    
// }


//19/10/2024//
// sorting
 //let arr = [1,3,5,6];
// add value in last
 //arr.push(10);
// remove value from last
 //arr.pop();
// add value in starting
 //arr.shift();
// remove value from starting
 //arr.unshift(10);

 //console.log(arr);


// bubblesorting
// let arr =[90,34,33,21,22,11,33,5,78]
// function bubblesort(arr){
//     for(let i = 0; i< arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             if(arr[j] > arr[j + 1]){
//                 [arr[j], arr[j+1]] = [arr[j + 1],arr[j]];
//                 console.log(arr);
//             }
//         }

//     }
//     return arr
// }
// console.log(bubblesort(arr));


//selectionsort
// let arr =[8, 7, 6, 5, 14, 38, 2, 1]
// function selectionSort(arr){
//     for(let i = 0; i < arr.length; i++) {
//         let min_idx = i;
//       for(let j=i+1; j < arr.length; j++) {
//         if(arr[j]<arr[min_idx]){
//             min_idx = j;
//         }
//       }  
//       let temp=arr[i];
//       arr[i] =arr[min_idx];
//       arr[min_idx] = temp;
// }
//  return arr;
// }
// console.log(selectionSort(arr));


//duplicate
// function findDuplicates(arr) {
//     let duplicates = [];
//     let seen = {};
  
//     for (let i = 0; i < arr.length; i++) {
//       if (seen[arr[i]]) {
//         if (!duplicates.includes(arr[i])) {
//           duplicates.push(arr[i]);
//         }
//       } else {
//         seen[arr[i]] = true;
//       }
//     }
  
//     return duplicates;
//   }
  
  
//   let myArray = [1, 2, 3, 4, 2, 3, 5, 6 , 9 , 3];
//   console.log(findDuplicates(myArray));
  

  

// 20/10/2024
// sorting array method
//let arr=[1,2,3,4,5,6,7,8];
//slice method
//first number delete starting index but include that index, second no. delete from last us index se ek phele tak. we can also use -ve number in sencond no.
//let slicearr = arr.slice(2,7);

//let arr1=[1,2,3,4,5,6,7,8];
//splice method
//first no. indicate index ,second indicate no. of characters del, third no. indicate adding character or we cxan say that replace from that dlete charater but print only deleted value
//let splicearr = arr1.splice(3,1);

//let arr2=[1,2,3,4,5,6,7,8];
//includes method
//check whether the no. is present inside the array or not.
//if we add two no. then second no. indicate that search that no. from that index onward.
//let includesarr = arr2.includes(3,5);

//let arr3=[1,2,3,4,5,6,7,8];
//indexof method
//find index of value which is given below
// let indexofarr = arr3.indexOf(5,2)
// console.log();



//loops
// //for each only display dont give output
// let arr4 = [1,2,3,4,5,6,7,8];
// let foreacharr = arr4.forEach((val,index)=>{
//   console.log(val,index);
  
// })
// console.log(foreacharr);





// let dd = [94,4,2,34,40,22,23,12,4]
// let res = dd.filter((val)=> val >30)
// console.log(res);


// let dd= [94,4,2,34,40,22,23,12,4] 
// let res = dd.filter((val)=> val >30).map((val)=>val*2).reduce((acc,val)=>acc+=val)
// console.log(res);


//find method
// let farr = [12,59,48,2,5,7,89,55,14,25,89,78];
// let findarr = farr.find((val)=>val ===20);
// console.log(findarr);



// 09/11/2024
//object

//most frequent char
// function mostfreq(str){
//     let freq = {};
//     let maxchar = "";
//     let maxcount = 0;
//     for(let char of str){
//         freq[char] = (freq[char] || 0) + 1;
//         if(freq[char] > maxcount){
//             maxcount = freq[char];
//             maxchar = char
//         }
//     }
//     return maxchar
// }
// console.log(mostfreq("hello"));


//first word capital
// function cap(str) {
//     let words = str.split(" ");
//     let capArr = words.map((val) => val.charAt(0).toUpperCase() + (val.slice(1)).toLowerCase());
//     return capArr.join(" ")
// }
// console.log(cap("hello world sdf"));



// 10/11/2024
// call back function( ek function ke ander dusra function is called call back function ) 



// function hello(x,y,z){
//     console.log(x,y(),z);
    
// }
// hello("ehjigbej",()=>{console.log("this is call back function");},"hvwfhv")



// function addTwoNumbers(x,y){
//     return(x+y);

// }
// let data = addTwoNumbers(15,86);
// console.log(data);



// fat arrow or lamda functions
// let fnArr =(a,b)=>a+b;
// console.log(fnArr(12,85));

// Q. write a function which takes 3 parameters and sum two first parameters and multiply last parameter 
// function Takethreeparameter(a,b,c){
//     return((a+b)*c);
    
// }
// let gg = Takethreeparameter(1,2,3);
// console.log(gg);

// Q. write a function which take an string "name" and return No. of character
// function noOfCharacter(str){
//     console.log(str);
//     return str.length;
// }
// let data1 = noOfCharacter("aditya");
// console.log(data1);


// Q. sum of No. reverse 
// function all(n){
//     let sum=0;
// for(let i = n; i > 0; i-- ){
//     sum+=i
// }
// return sum
// }
// console.log(all(3));


// Q. factorial till -ve 
// function all1(n){
//     let sum1 = 1;
// for(let i = n; i >=-n; i-- ){
//     if (i == 0) continue;
//     sum1*=i
// }
// return sum1
// }
// console.log(all1(3));



// 16/11/2024
// function sumOfNumber(number){
//     let sum = 1;
//     while (num1 >= 1) {
//         sum *= num1;
//         num--;
//     }
//     return sum1;
// }

// let num = 5;
// console.log(sumOfNumber(num));

//array
// let arr1 = []
// arr1.push(10);
// arr1.pop();
// arr1.unshift(100);
// arr1.shift();
// console.log(arr1);

//17/11/2024
//map method
//a = [1,2,3,4,5,6]
//a.map((value,index,arr)=>value*2)

//function returning function
// function myfun(){
//     function hello(){
//         console.log("hello world");
        
//     }
//     return hello
// }
// let data = myfun();
// console.log(data());


let arr = [2,3,4,5,6];
let newmap = arr.map((val, index,arr)=>val*3)
console.log(newmap);


