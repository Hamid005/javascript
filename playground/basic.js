//variable
//var, let,const

//Condition
// const marks = 45;
// if(marks < 30 ) {
//     console.log("you are fail");
// }
// else{
//     console.log('you are pass.');
// }
// const marks1 = 33;
// if(marks1 < 33 && marks1 >= 0 ){     // &=range
//     console.log("you have failed");
// }
//  else if(marks1 <=33  && marks1 <= 50 ){
//     console.log("you have grade B");
// }

// const temp = 46;
// if (temp > 45 ){
//     console.log("too hot");
// }
//  else if (temp > 35){
//     console.log("prety nice ");
//   }

// conditional
// is use for only two condition 
 //( marks >= 33 ? console.log( " pass ")  : console.log( " fail " ) );

//switch:
// const number = 10 ;
// switch( number){
//     case 10:
//         console.log("Yes it is 10");
//         case 20 :
//             console.log ('No its not 10');
//             break ;
//             default :
//             console.log ('this is default')
// }
// // exampl # 2
//             const number1 = 10;
//             switch (number1 < 0){
//                 case true :
//                     console.log("negative");
//                   break ;
//                       default :
//                       console.log ("positive") ;          
// }

// // exampl 2

// const name = "hamid"
// switch(name){
//     case "abduallah":
//     console.log ("hello hamid");
//     break;
// }

//  template literals

// const firstName = "hamid";
// const lastName = "khan";
//console.log("hello" + firstName+ " " + lastName);
// console.log( ` hello ${firstName} ${lastName}` );

// loops

// for loop   { start/end define}
// for(let i=0; i< 10;i++){
//     console.log(i);
// }

// array iterate for loop

// const list =[ 23,45,1,4,6,7,90]
// for(let i=0;  i < list.length; i++){
//     console.log(list[i]);
// }

// WHILE LOOP   { end not define like countdown timer etc}

// const list =[ 23,45,1,4,6,7,90]
// let j = 0;
// while (j < list.length){
// console.log (list[ j ] );
// j++;
// }

// DOWHILE LOOP  { must one time run ( true or false)  }

// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while (i > 10);

// object 
// object is variable that save one or more type of data save.

// javascript start

// const data =  {
//     marks : 45,
//     name : "Asad shah",
//     gpa : 3.5 ,
//     isPass : true,
//     friends : [" ahad " , " samad " , " qadeer " ],
//     address : {          
//                    city : " Mardan ",
//                     country : " pakistan ",
//                      tehsil : " katlang "
// }
// };
// console.log(data.name); // Output: "Asad shah"
// console.log(data.friends[0]); // Output: " ahad "
// console.log(data.address.city); // Output: " Mardan "

//              if (data.isPass) {
//         console.log("Friends:");
//         data.friends.forEach(friend => {
//           console.log(friend.trim()); // trim() to remove extra spaces
//         });
//     }
  
// object of object

// const student = [ 
//     {
//             marks : 55,
//             name : "Asad shah",
//             gpa : 3.2 ,
//             isPass : true,
//             friends : [" shahyan " , " m.samad" , "john" ],
//             address : {          
//                           city : " khyber  ",
//                            country : " pakistan ",
//                             tehsil : " warsak Road "
//         }
//         },

//         {
//                 marks : 30,
//                 name : "inshaullah",
//                 gpa : 2.0 ,
//                 isPass : false,
//                 friends : [" sohail" , "sohaib" , "mahmmad" ],
//                 address : {          
//                              city : " topi ",
//                               country : " pakistan ",
//                               tehsil : " swabi"
//             }
//             },

//     {
//                 marks : 45,
//                 name : "Asad shah",
//                 gpa : 3.5 ,
//                 isPass : true,
//                 friends : [" ahad" , "samad" , "qadeer" ],
//                 address : {          
//                             city : " Mardan ",
//                              country : " pakistan ",
//                              tehsil : " katlang "
//             }
//             }
//         ]
// console.log(student[2]. friends[2]);

// console.log("Cities:");
//  student.forEach(student => {
//   console.log(student.address.city);
//  });

// const data  = {
//     products :[
//         {
//             name : " laptop",
//             price : 50000,
//             isAvailable : true
//         },
//         {
//             name : " mobile",
//             price : 25000,
//             isAvailable : false
//         },
//         {
//             name : " tv",
//             price : 20000,
//             isAvailable : false
//         },
//         {
//             name : "fridge",
//             price : 55000,
//             isAvailable : true
//         }
//     ]
// };
// const products = data.products;
// for( let i= 0; i<products.length; i++){
//     console.log(products[i].name);
// }
// let totalPrice = 0;
// for(let i = 0; i < data.products.length; i++) {
//     totalPrice += data.products[i].price;
// }
// console.log("Total price: " + totalPrice);

//  Map

//  const square = marks.map((n) => n > 30 ? n* n : n );
// var ary = [3, 4, 5, 10];

// var b = ary.map(test);
// document.write(b);

// function test(x) {
//     return x * 10;
// }
//map /immutable / value can be changed
//filter /immutable / not change

//reduce
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(((acc, current) => acc + current), 0);
// console.log(sum); // Output: 15

//sort
// const list2 = [ 2,3,4,5,10,9]
// const sort = list2.sort (( x,y ) => x - y);
// console.log(sort)

//indexOf
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.indexOf(3)); // Output: 2
// const str = "hello world";
// console.log(str.indexOf("world")); // Output: 6

//push
// const arr = [1, 2, 3];
// arr.push(4, 5);
// console.log(arr); // Output: [1, 2, 3, 4, 5]
// //pop
// const lastElement = arr.pop();
// console.log(arr); // Output: [1, 2, 3, 4]
// console.log(lastElement); // Output: 5

// Arary desructuring

//  const names = [ "hamid", "sajjad", "sohail", "sahil","shah"];
// const [ stu1,name2] = names;

// console.log(name2)

// Object desructuring // iMPORTANT 
// const student = [ 
//         {
//                 marks : 55,
//                 name : "Asad shah",
//                 gpa : 3.2 ,
//                 isPass : true,
//                 friends : [" shahyan " , " m.samad" , "john" ],
//                 address : {          
//                               city : " khyber  ",
//                                country : " pakistan ",
//                                 tehsil : " warsak Road "
//             }
//             }
// ];
//             console.log(student[0].address);

    
//   STRING

// const str1 = "hello";
// const str2 = "ello";
// const str ="My country name is pakistan"

//const str3 = str1.concat(str2);
// const str3 = str1 + str2;
//const str4 =`${ str1}   ${str2}`;

//indexOf
//const l = str.indexOf("is")
 //console.log(l)

// replace
//const l2 = str.replace("new","old"); // replace
//console.log(l2)

// slice
// const key = "pakistan"
// const  country = str.slice(str.indexOf("key"), str.indexOf(key) + key.length);
// console.log(country)

//split
// most.impotant in string
//php  split=explode

// const string="1,hamid,swabi.3.25 |  6th | ICP"
// const   [ id , name  , address ,  gpa , semester,institue] =
// string.split ( ",");

// trim
// const name1 ="      hamid"
// const trim =  name1.trim( );


// Array

//forEach 
//Map,filter,reduce,indexOf,sort,slice
//push/PopStateEvent,concat,fill,some,every

//String
//trim,slice,concat,substring,split,indexOf
//length,replace,upper,lower 

//Array,object destructuring

// deafault parameter
// const fun =( name)=>{
//     console.log(`Hello ${name}` )
// }
// fun( );












