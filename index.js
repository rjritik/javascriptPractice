// console.log("hello world");

// var myname="ritik";
// console.log(myname);

// ##datatypes in javascript
// undefined boolean number string string bigint symbol
//  var pname="ritik"
//  console.log(pname);
//  console.log(typeof(pname));

//  var nameja= 292;
//  console.log(nameja);
//  console.log(typeof(nameja));

// var checks=true;
// console.log(checks);
// console.log(typeof(checks));

// console.log(10+"40");
// console.log(9-"3");

// console.log("ritik"-"jamre");
// console.log("ritik"+"jamre");
// console.log(false + true);
// console.log(true+ true);

// console.log(isNaN(2));
// console.log(isNaN("hello srj"));

// console.log(Number);

// console.log(`hii i am here:${4+3} `);

// console.log(3**3);
//  var a=5; var b=10;
//  a=a+b;
//  b=a-b;
//  a=a-b;
//  console.log(a+"  "+ b);

// control loops
//  var weather="rain"

//  if(weather== "rain"){
//     console.log("take a raincoat");
//  }
//  else {
//     console.log("not need to take raincoat");
//  }

// var year=1900;
// if(year%4==0){
//     console.log("leap year");
// }
// else if(year%400==0){
// console.log("leap year");
// }

// 0," ",undefined,NaN,false are false value in javascript

// var area="circle"
// var PI=3.142 ,l=5,b=4,r=3;

// switch(area)
// {
//     case 'circle': console.log("area of circle is  "+ PI*r**2); break;

//     case 'traingle': console.log("area of traingle is "+ (l*b)/2);break;

//     default:console.log("valid data enter");
// }

// var num=10;
// while(num<=20){
//     console.log(num);
//     num++;
// }

// var num=10;
// do{
// console.log(num);
// num++;
// }while(num<20)

// for(let i=0;i<5;i++){
//     console.log("ritik");
// }

// console.log("table of 8 ");
//  for(let i=1;i<=10;i++)
//  {
//     console.log(8*i);
//  }

//## function

//  function func(a,b){
//     return a+b;
//  }

// var sum=func(5,6);
// console.log(sum);

// var sum=function(a,b){
//     return a+b;
// }
// var sun=sum(10,20);
// console.log(sun);

//let and const have block scope.
//var have function block

//var and let value can be changed but value of const can not be changed.

//falsy value in javascript 0,undefined,null,NaN,false

// if(score=0){
//     console.log("hello");
// }
// else {
//     console.log("rjriitk");
// }
// here output will be  rjriitk

//template literals
//  var num= "ritik";
//  var num1="jamre";
//  console.log(`hello my name is ${num} and my surname is ${num1}`);

//output is  hello my name is ritik and my surname is jamre
// ######################################################################################################################################

// default parameter

// function mult(a,b=5){
//     return a*b;
// }
// var newcheck=mult(3);
// console.log(newcheck);   output 15

// ######################################################################################################################################

//arrays in javascript
//  var myData=["riitk","rj",1233,"newcheck","jhasgdj",09876];

// for in

//  for(let data in myData)
// { console.log(data);}

// for (let newData of myData){
//     console.log(newData);
// }

//for each=> calls a function for each elements in array

// myData.forEach(function(elements,index,array){
//     console.log(elements+" index:"+index);
// })
// myData.forEach((elements,index,array)=>{
//     console.log(elements+" index:"+index);
// })

//push function=>returns the new length of the array

// var myData=["riitk","rj",1233,"newcheck","jhasgdj",09876];
//  var count =myData.push("hello RJ");
//we can add more than one elements also
//  myData.push("hahjd","jjadsh","ajgdah");
//  console.log(count);
//  for(let item  of myData){
//     console.log(item);
//  }

//unshift function =>return the new length of the array & can add multiple data also
// var myData=["riitk","rj",1233,"newcheck","jhasgdj",09876];
// myData.unshift("ahds");
//  for(let item  of myData){
//     console.log(item);
//  }
//  console.log(myData);

// pop method => this method deletes the last element of the array and returns the deleted elements
// var deletedData=myData.shift();
// console.log(deletedData);

//shift method=>this method deletes the first element of the array and returns the deleted elements
// var deletedData=myData.shift();
// console.log(deletedData);

//  for(let item of myData){
//     console.log(item);
//  }

//######################################################################################################################################

// questions

//1 Add Dec at the end of array
//2 what is the return value of an splice method
//3 update march to March
//4 Delete june from an array

//Splice method =>adds or remove elements from array
// const months =['Jan','march','April','June','July'];
//solution 1
//if we want to add it in 4th position
// const newMonths=months.splice(4,0,'Dec');
// console.log(months);

// if we to add at the last position
// const lastMonths=months.splice(months.length,0,"Decc");
// console.log(months);

//solution 2
// const newMonths=months.splice(4,0,'Dec');
// console.log(newMonths);
//splice method return the array of deleted elements

//solution 3
// const indexOfMonths=months.indexOf('march');
// const addMonths=months.splice(indexOfMonths,1,'March');
// console.log(months);

//indexOf returns -1 if elements not found
// const indexOfMonths=months.indexOf('mffarch');
// if(indexOfMonths!=-1){
//     const addMonths=months.splice(indexOfMonths,1,'March');
//     console.log(months);
// }
// else {
//     console.log("data not found");
// }

// const addMonths=months.splice(indexOfMonths,3);  // 3 will delete 3 elements from 'march' and addMonths will return the array of deleted elements
// console.log(months);

// console.log(addMonths);

// const months =['Jan','march','April','June','July'];

//solution 4
// const findIndexJune=months.indexOf('April');
// const JuneDeleted=months.splice(findIndexJune,1);
//  const JuneDeleted=months.splice(findIndexJune,Infinity);
//  console.log(months);

//########################################################################################################################
//Map =>it returns the new array without mutating the original array
//  let arrayS=[1,4,9,16,25];
//  var newArr=arrayS.map((curElm,index,arr)=>{
// return `value of index ${index} is ${curElm} with array ${arr}`
//  })
//  console.log(arrayS);

// we can also use other method also after map like

//  var newArr=arrayS.map((curElm,index,arr)=>{
// return `value of index ${index} is ${curElm} with array ${arr}`
//  }).reduce() or .filter();

//########################################################################################################################
//question 1
//find the sqaure root
// let arr=[25,36,49,64,81];
//solution
// let arr=[25,36,49,64,81];
// let newArr=arr.map((curElm)=>{
//   return Math.sqrt(curElm);
// })
// console.log(newArr);

//question 2
// multiply each element with 2 and return only those which are greater then 10
//  let arr=[2,3,5,7,33];
//  let arr1=arr.map((curElm)=>{
//      return  curElm *2 ;
//  }).filter((curElem)=>{
//     return curElem>10
//  })
//  console.log(arr1);

//########################################################################################################################
//Reduce Function
//flatten the array means convert the 2D ,3D array into a single dimensional array

// the reduce() method executes a reducer function and on each element of an array , resulting in a single output value

// let arr=[1,2,3,4,5,6];
// let arr1=arr.reduce((accumulator,curElm,index,arr)=>{
//     return accumulator+=curElm
// })
// let arr=[1,2,3,4,5,6];
// let arr1=arr.reduce((accumulator,curElm,index,arr)=>{
//     return accumulator+=curElm
// },45) //here 45 is initial value so 45 will be first value and then 1,2,3,4,5,6

// console.log(arr1);

//use of map filter and reduce in single chain
//  let arr=[2,3,5,7,33];
//  let arr1=arr.map((curElm)=>{
//      return  curElm *2 ;
//  }).filter((curElem)=>{
//     return curElem>10
//  }).reduce((accumulator,curEllem)=>{
//   return accumulator+=curEllem;
//  })
// console.log(arr1);
//or
//  let arr1=arr.map((curElm)=>curElm *2).filter((curElem)=>curElem>10).reduce((accumulator,curEllem)=>accumulator+=curEllem);
//  console.log(arr1);

//how to flat an array with the use of reduce

// let arr=[
//     [1,2,3],[4,5,7,8],[6,4,22,1]
// ];
// let arr1=arr.reduce((accumulator,curElm)=>{
//  return accumulator.concat(curElm);
// })
// console.log(arr1);

//########################################################################################################################

//strings in javascript
// let str ="Hello i am 'ritik jamre'";
// console.log(str);
// console.log(str.length);

//indexOf() method = return the index of string if found otherwise will return -1
// console.log(str.indexOf("i"));
// console.log(str.indexOf("ritik"));
// console.log(str.indexOf("i",8));// will return index after 8th index as starting point
// console.log(str.indexOf("sdh")); // will return -1
// console.log(str.lastIndexOf("i",8));

//search() will return the index of string if found otherwise -1 and here we cant give the arguments for starting and ending point like indexOf.
// console.log(str.search("am"));

//########## Extraction of string parts
// slice(start,end);
//subString(start,end);
//stbStr(start,length);

//slice() => extracts a parts of string and return the extracted part in a new string
// let str ="Hello i am 'ritik jamre'";
// console.log(str.slice(0,5));
// console.log(str.slice(0,-3));
// console.log(str.slice(3,-7));

//question display only 280 character of a string like in  twitter

//substring()= similar to slice but we can not give the negative index;
// let str ="Hello i am 'ritik jamre'";
// console.log(str.substring(4,9));
// console.log(str.substring(4,-9));
// console.log(str.substring(4));

//substr()=>similar to slice but second argument here is length of extracted part

// let str ="Hello i am 'ritik jamre'";
// console.log(str.substr(1,8));
// console.log(str.substr(1,-8));

//replace ()=>it will replace the specific value with any another value and It will not change anything if nothing matches

// let str="Hello I am ritik Jamre";
// console.log(str.replace("ritik","Rjritik123"));

//##########################################################

//extracting srting character

// let str="Hello I am Ritik jamre";

//charAt()= it give the character of a string at any particular index
// console.log(str.charAt(4));
// console.log(str.charAt(-4));

//charCodeAt()= return the unicode of the character at specific index.It returns the UTF-16 code .
// console.log(str.charCodeAt(4));
// console.log(str.charCodeAt(8));

// console.log(str[4]);

//trim()= it removes the white spaces from the starting and ending index
// let str="    Hello I am Ritik     jamre      ";
// console.log(str.trim());

//convert the strig to array
//split method used for converting the string to the array
// let str="hello i am ritik jamre";
// console.log(str.split(" "));

// let str1="hello ,i ,am ,ritik ,jamre";
// console.log(str1.split(","));

// let str1="hello i ||am ||ritik jamre";
// console.log(str1.split("||"));

//##########################################################//##########################################################

//Time and Date in javascript

// let curDate=new Date();
// console.log(curDate);
// console.log(curDate.toLocaleString());
// console.log(curDate.toString());

//new Date can take 7 diferrent arguments = year,month,day,hour,minute,second,millisecond

// var d=new Date(1232,21,3,3,2,11,1);
// console.log(d.toString());
// var d=new Date(1232,21,3,3,2,11,1);
// console.log(d.toString());

// console.log("hello");

//######################################## Maths function

// console.log(Math.PI); //pi value

// console.log(Math.round(10.3124));
// console.log(Math.round(10.8));
// console.log(Math.pow(10,8));
// console.log(Math.sqrt(36));

// console.log(Math.abs(-02));
// console.log(Math.abs(-82));

// ` console.log(Math.ceil(4.4));// num+1 if number after decimal is greater than 1
//  console.log(Math.floor(4.4));//will return the same number`

//  console.log(Math.min(4.4,33,3.003));
//  console.log(Math.max(4.4,33,3.003));

// console.log(Math.random());
// console.log(Math.random()*10);// it will give random number between 1 to 10 in decimal form
// console.log(Math.round(Math.random()*10));//it will give random number between 1 to 10

// console.log(Math.trunc(45.4));
// console.log(Math.trunc(-45.4)); // will return the integer part

//setInterval function=>it executes after certain intervals

// function timeset(){
// setInterval(()=>{
//    var d= new Date().toLocaleTimeString();
//    console.log("time",d);
// },1000)
// }

// timeset();

//setTimeout function => it only executes once after given time

// function timeset(){3e
// setTimeout(()=>{
//    var d= new Date().toLocaleTimeString();
//    console.log("time",d);
// },1000)
// return "hello";
// }

// timeset();

////object oriented programming

// let boiData={
//     myname:"riitk",
//     myhead:"jamre",
//     getData(){
//         console.log(`my name is ${boiData.myname} and head is ${boiData.myhead}`);
//     }
// }

// console.log(boiData);
// console.log(boiData.myname);
// console.log(boiData.myhead);
// boiData.getData();

//object inside other object
// let data={
//     myName:{
// realName:"riitk",
// headName:"jamre",
//     },
//     age:23,
// }

// console.log(data.myName.headName);

//this object=>contain the current context

// var myNames="ritik Jamre";

// function myName(){
//     console.log(this.myNames);
// }
// myName();

// const obj={
//     myname:"ritik",
//     myfun(){
//         console.log(obj.myname);
//     }
// }
// obj.myfun();

//this object does not work with fat arrow function

//destructuring

// array destructure
// let myData=["ritik","btech",38];
// let [myname,mydegree,myage]=myData;
// console.log(mydegree);
//we can also add any adittional vlaue in the array
// let [myname,mydegree,myage,myschool="jnvs]dhar"]=myData;
// console.log(myschool);
// for (item of myData){
//     console.log(item);//but here the actual array will be shown
// }

//object desructuring

// const data={
//     myname:"ritik",
//     school:":shcjasd"
// }

// let {myname,school}=data;
// console.log(myname);

//object properties

//[variableName] if we are writing like these as a key in object then it will take the dynamic value of the variable  and [45+4] we can use mathematical operation inside the [] in key
// let myname="jhsbdhasd"
// const data={
//     [myname]:"ritik",
//     [34+23]:":shcjasd"
// }

// console.log(data);
// if key and value are same then no need to write both the key and value
// let myname="ritik Jamre"
// const data={
//     myname,
// }
// console.log(data);

//spread operator ==> can be used for array as well as object

// const color=["red","blue"];
// const newcolor=["black",...color];
// console.log(newcolor);

// const object={myname:"ritik",myhead:"jamre"};
// const object1={...object};
// console.log(object1);

//es7

// const color=["red","blue"];
// const ispresent=color.includes("red"); // give the presence of ant particular element
// console.log(ispresent);

//es8

// const message="hello I am ritik";
// console.log(message);
// console.log(message.padStart(5)); // it will make string length to 5
// console.log(message.padEnd(15));//it will make length of string upto 15

//object methods

//object.values() and object.entries() and object.keys() and object.fromentries

// const object={myname:"ritik",myhead:"jamre"};
// console.log(Object.values(object));//it will show the array of value
// console.log(Object.keys(object));//it will give the array of keys
// console.log(Object.entries(object));//it will convert the object into array of key value

//object.fromEntries  again convert the array into object form
//  let obj1=Object.entries(object);
//  console.log(Object.fromEntries(obj1));

//flat method for array to convert the 2d array into single array after flat method we don't need to use the reduce method
// let arr1=[
//     [1,2,3,4,45],
//     [23,34,2],
//     [13,1,3,[21,21,2]]
// ];
// console.log(arr1.flat(Infinity)); //Infinity for flating the array to the last level

//hoisting => we have a creation phase and a execution phase .Hoisting in javascript is a mechanism where variables and fucntion declaration are moved to the top of the scope before the code execution.
//  console.log(myName);
//  var myName;
//  myName="ritik"

//it will show error messgae if we use let keyword
//  console.log(myName);
//  let myName;
//  myName="ritik"

// ## function currying = currying is the evaluating the function with multiple arguments into sequence of function with single argument

// function sum(num1){
//     return function (num2)
//     {
//         return function(num3){
// console.log(num1+num2+num3);
//         }
//     }
// }
// sum(2)(4)(41);

//example of promises in javascript

// var promise =new Promise ((resolve,reject)=>{
//     const x="yes";
//     const y="No";
//     if(x==y){
//         resolve("successfully");
//     }
//     else {
//         reject("error");
//     }
// })

// promise.then((success)=>{
//     console.log("success"+success);
// }).catch((error)=>{
// console.log("Error"+ error);
// })

//promise.all()=> The Promise.all() static method takes an iterable of promises as input and returns a single Promise.

const promiseOne = new Promise((resolve, reject) => {
  resolve("Promise 1 Success");
});

const promiseTwo = new Promise((resolve, reject) => {
  resolve("Promise 2 Success");
});
const promiseThree = new Promise((resolve, reject) => {
  resolve("Promise 3 Success");
});

//promise.all = it takes all the promise as an argument and wait for all the promise to complete and then shows the result 
// Promise.all([
//     promiseOne,
//     promiseTwo,
//     promiseThree
// ]).then((messages)=>{
// console.log(messages); // [ 'Promise 1 Success', 'Promise 2 Success', 'Promise 3 Success' ]
// })


// promise.race= it gives the result as soon as first promise get the result 

Promise.race([
    promiseOne,
    promiseTwo,
    promiseThree
]).then((messages)=>{
console.log(messages); //Promise 1 Success
})