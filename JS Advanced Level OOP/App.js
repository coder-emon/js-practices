// class (ES6)
// Class is a templeate for creating object

// let person1 = {
//     firstName: "Emon",
//     lastName: "Howlader",
//     dob:"03-01-2003",
//     fullName: function(){
//         console.log(`${this.firstName} ${this.lastName}`)
// }
// };

// let person2 = {
//     firstName: "Golam",
//     lastName: "Rabbi",
//     dob:"07-01-2002",
//     fullName: function () {
//         console.log(`${this.firstName} ${this.lastName}`)
//     }
// };
// console.log(person1)
// console.log(person2)


// class Person {
//     constructor(fName, lName, dateofbirth) {
//         this.firstName = fName;
//         this.lastName = lName;
//         this.dob = dateofbirth;
//     }
//     fullDetails(){
//         console.log(`${this.firstName} ${this.lastName} ${this.dob}`);
//     }
// };
// let person1 = new Person("Emon", "Howlader", "03-01-2003");
// console.log(person1);
// person1.firstName = "Mahim";
// let person2 = new Person("Golam", "Rabbi", "05-015-20032");
// console.log(person2);
// let person3 = new Person("Nayeem", "Sheikh", "05-015-20032");
// console.log(person3);
// console.log(person1.fullDetails());
// console.log(person2.fullDetails());
// console.log(person3.fullDetails());


// Sub class
// Inheritence


// 1st class Base class
// class Person{
//     constructor(fName, lName) {
//         this.firstName = fName;
//         this.lastName = lName;

//     }
//     Congrates(){
//         console.log(`Hello ${this.firstName} ${this.lastName}`)
//     }
// };

// 2nd class Sub class
// class Customer extends Person{
//     constructor(fName, lName, phone, meberShip){
//     super(fName, lName);
//     this.phone = phone;
//     this.meberShip = meberShip;
//     }
//     fullName(){
//         console.log(`Welcome ${this.firstName} ${this.lastName}`);
//     }
// };


// const person1 = new Customer("Emon", "Howlader", +8801798293884 , 3456);
// console.log(person1);
// console.log(person1.Congrates());
// console.log(person1.fullName());

// const person2 = new Person("Goalm", "Rabbi");
// console.log(person2.Congrates());


// static function
// class Person {
//         constructor(fName, lName){
//             this.firstName = fName;
//             this.lastName = lName;
//         }

//     greeting(){
//         console.log( `Hello ${this.firstName} ${this.lastName}`);

//     }
//     static test(){
//         console.log(` This is static Function`)
//     }

// };

// const person1 = new Person("Emon", "Howlader")
// console.log(person1);
// console.log(person1.greeting());
// console.log(Person.test());
// Static Function call with class  name; not object name;

// DOM
// let dtest;
// dtest = this;
// dtest = window;
// dtest = window.document;
// dtest = document;
// dtest = document.all;
// dtest = document.all[15];
// dtest = document.all.length;
// dtest = document.head;
// dtest = document.body;
// dtest = document.doctype;
// dtest = document.domain;
// dtest = document.URL;
// dtest = document.characterSet;
// dtest = document.contentType;
// dtest = document.forms;
// dtest = document.forms[0].method;
// dtest = document.links;
// dtest = document.links[0].href;
// dtest = document.links[0].className;
// dtest = document.links[0].classList;
// dtest = document.scripts;
// dtest = document.scripts[0].src;
// dtest = document.scripts[0].getAttribute('src')
// dtest = document.images;
// console.log(dtest);

// Dom selector (single elements)
// let dvalue;
// dvalue = document.getElementById('header');
// dvalue = document.getElementById('header').id;
// dvalue = document.getElementById('header').className;
// console.log(dvalue);

// Changing Style
// document.getElementById('header').style.background = 'red';
// document.getElementById('header').style.padding = '40px';
// document.getElementById('header').style.fontSize = '80px';
// document.getElementById('header').style.fontFamily = 'Arial';
// document.getElementById('header').style.marginTop = '40px';

// changing value
// document.getElementById('header').textContent = 'Emon Howlader';
// document.getElementById('header').innerHTML = 'Hello World';
// document.getElementById('header').innerHTML = '<i>coderRabbi</i>';

// dvalue = document.getElementById('header');
// dvalue.style.background = '#ddd';
// dvalue.style.color = 'purple';


// document.querySelector
// let myStyle;
// myStyle = document.querySelector('#header');
// myStyle.style.background = 'purple';
// myStyle.style.color = 'red';

// myStyle = document.querySelector('.main-title');
// myStyle.style.background = 'yellow';
// myStyle.style.color = '#000';


// document.querySelector('ol').style.background = 'red';
// document.querySelector('ol').style.color = '#ddd';
// document.querySelector('ol').style.padding = '20px';
// document.querySelector('ol li:first-child').style.background = 'purple';

// DOM selector (multiple elements)
// let list = document.getElementsByClassName('sample-class');
// list[0].style.background =  'blue';
// list[0].style.padding = "20px";
// console.log(list)
// let list = document.getElementsByTagName('li');
// list[2].style.background = 'purple';
// list[2].style.padding = '20px';
// list[2].style.color = '#ddd'

// list = document.querySelector('ul').getElementsByTagName('li');
// list[3].style.background = 'gray';
// list[2].innerHTML = '<a href="https://coderemon.me"> Coder Emon</a>'
// list[2].style.color = 'red'

// let lis = Array.from(list)
// lis.forEach(function(item){
//     console.log(item)
// })

// DOM selector multiple elements by querySelectorAll
// let list = document.querySelectorAll('.sample-class')
// list = document.querySelectorAll('ul li')
// console.log(list);

// let oddLi = document.querySelectorAll('li:nth-child(odd)');
// console.log(oddLi);
// oddLi.forEach(function(item){
//     item.style.background = '#ddd';
//     item.style.padding = '10px';
// })

// let evenLi = document.querySelectorAll('li:nth-child(even)');
// evenLi.forEach(function(item){
//     item.style.background = 'purple';
//     item.style.color = '#ddd';
//     item.style.padding = '10px';
// });


// travering

// val = list.childNodes[3];
// val = list.childNodes[3].nodeName;
// val = list.childNodes[6].nodeType;

// 1 Element
// 2 Attribute
// 3 Text node
// 8 Comment
// 9 Document Itself
// 10 Doctype

// val = list.children;
// val = list.children[0].textContent = 'Hello world' ;
// val = list.children[1].children[0];
// val = list.children[1].children[0].href;

// val = list.firstChild;
// val = list.lastChild;
// val = list.firstElementChild;
// val = list.lastElementChild;

// val = list.childElementCount;

// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;
// val = listItem.parentNode;
// val = listItem.parentNode.parentNode.parentNode;

// var listItem2 = document.querySelector('ul li:first-child');
// val = listItem2.nextSibling;
// val = listItem2.nextElementSibling;
// val = listItem2.nextElementSibling.nextElementSibling;

// val = listItem.previousSibling;
// val = listItem.previousSibling.previousSibling;
// val = listItem.previousElementSibling;
// val = listItem.previousElementSibling.previousElementSibling;

// console.log(val)


// Add Replace and Remove item
// add new child element
// let olItem = document.createElement('li');
// olItem.className = 'a b c';
// olItem.id = 'myId';
// olItem.appendChild(document.createTextNode('PHP'));
// document.querySelector('ol').appendChild(olItem);

// console.log(olItem)

// let ulItem = document.createElement('li');
// let link = document.createElement('a');
// link.appendChild(document.createTextNode('Linkedin'));
// link.setAttribute('href', 'https://linkedin.com');
// ulItem.appendChild(link);
// document.querySelector('ul').appendChild(ulItem);

// console.log(ulItem)
// console.log(link)

// let newHeading = document.createElement('h1');
// newHeading.appendChild(document.createTextNode('This is our new replaced new heading'))
// newHeading.className = 'simplae-class';

// let oldHeading = document.querySelector('h3');
// let parentDiv = document.querySelector('.container')
// parentDiv.replaceChild(newHeading, oldHeading);

// Remove a item
// let listItem = document.querySelectorAll('li');
// listItem[0].remove();
// listItem[1].remove();

// let ulList = document.querySelector('ul');
// let ulListItem = document.querySelectorAll('ul li');
// // ulList.removeChild(ulListItem[1]);
// // ulList.classList = 'my-class class2';
// ulList.classList.add('myList');
// ulList.classList.remove('sample-class')
// // ulList.className ='list-wrap';


// ulList.setAttribute('title', 'This is my title')
// let check =ulList.hasAttribute('title')
// console.log(ulList);
// console.log(check)

// DOM Event
// document.getElementById('myBtn').addEventListener('click', message);

// function message() {
//     alert('This is my message')
// }
// document.getElementById('myBtn1').addEventListener('mouseover', message1);

// function message1() {
//     alert('Mouse over evern by addEventListener')
// }
// let val = document.querySelector('.myClass');
// val.style.background = 'purple';
// val.style.padding ='200px';
// val.addEventListener('click', message2);
// function message2(e) {
//     let test = e.target ;
//     test = e.target.className ;
//     test = e.target.style.background ;
//     this.style.background = `#${e.offsetX}${e.offsetY}`
//     console.log(test)
// }

// document.getElementById('name').addEventListener('focusin', test);
// function test(){
//     this.style.background = 'purple'
// }
// document.getElementById('name').addEventListener('focusout', test1);
// function test1(){
//     this.style.background = 'gray'
// }
// document.getElementById('name').addEventListener('keyup', test2);
// function test2(){
//     document.getElementById('demo').innerText = this.value;
// }

// Error Handling
// console.log('Before Error')
// try{
//     test()
// }
// catch(e) {
//     let val = e.message;
//     val = e.name
//     console.log(val)
// }finally{
//     console.log('I am inside finally')
// }
// console.log('After Error')

// let a = ;
// try{
//     if(a > 15) throw 'Too Big';
//     else if (a < 4) throw 'Too Short';
// }catch(e){
//     console.log(e)
// }

// Regular Expression
// Pattern Matching Technique
// let re = /hello/i;  // i --> case insensitive;

// console.log(re)
// console.log(re.source)
// let str = "Hello World";
// // exec() Return Result in an Arry or null
// let Result = re.exec(str);
// // test() Return Result in true or false
// Result = re.test(str);
// // exec() Return Result in an Arry or null
// Result = str.match(re);
// // Return Result in matched index number or -1
// Result = str.search(re);
// // replace() Return  match and replace with a new string
// Result = str.replace(re, 'Hi')
// console.log(Result);

//Regular Expression
// Literal and Meta charecter
// let re;
// let str;
// // literal charecter
// re = /hello/;

// // Meta charertor
// re = /^hello/;   // ^ must start with
// re = /hello$/ ;  //$ must ends with
// re = /^hello$/ ; // ^  $ must start and ends with this word no other word take place
// re = /hel.o/ ; //must have anuone charecter in this palce
// re = /h*llo/; //0 or more times
// re = /he?llo/ // must have same charecter before '?'
// re = /he?llo?/ // must have same charecter before '?' or '?' or have nothing
// re = /hello\?/
// str = "hello? world";


// reTest(re, str);
// function reTest(re, str) {
//     if (re.test(str)) {
//         console.log(`'${re.source}' Matches with '${str}'`)
//     }else{
//         console.log(`'${re.source}' Don't Matches with '${str}'`)
//         }
// }

// Regular Expression
// ====== Character set using brakets []
// let re;
// let str;

// re = /[ha]ello/; //Must be use one of them inside [] brakets
// re = /[HA]ello/; // Must be use one of them inside [] brakets and Uppercase
// re = /[^ha]ello/;  // Must not be use one of them inside [] brakets and Lowercase
// re = /[^HA]ello/; // Must not be use one of them inside [] brakets and Uppercase
// re = /^[ha]ello/; //  Start With Must be use one of them inside [] brakets and Lowercase
// re = /^[HA]ello/; //  Start With Must be use one of them inside [] brakets and Uppercase
// re = /[a-z]ello/; //   Must be use one of them{a to z } inside [] brakets and Lowercase
// re = /[A-Z]ello/;  //   Must be use one of them{A to Z } inside [] brakets and Uppercase
// re = /[a-f]ello/;  //   Must be use one of them{a to f } inside [] brakets and Lowercase
// re = /[A-F]ello/;  //   Must be use one of them{A to F } inside [] brakets and Uppercase
// re = /^[a-zA-Z]ello/; //   Must be use one of them{a to z or A to Z } inside [] brakets and Lowercase or Uppercase
// re = /^[a-f]ello/; //  Start With Must be use one of them inside [] brakets and Lowercase
// re = /[^A-F]ello/; //  Start With Must not be use one of them inside [] brakets and Uppercase
// re = /[0-9]hello/; // Must be use one of them inside [] brakets
// re = /^[0-9]hello/; //Starts with Must be use one of them inside []  Brakets
// re = /[^0-9]hello/; //Starts with Must not be use one of them inside []  Brakets
// re = /[0-9][0-9]hello/; // Must be use one of them inside [] brakets
// re = /^[0-9][0-9]hello/; // starts with Must be use one of them inside [] brakets
//
// str = "22hello World";
//
//
// reTest(re, str);
// function reTest(re, str) {
//     if (re.test(str)) {
//         console.log(`'${re.source}' Matches with '${str}'`)
//     } else {
//         console.log(`'${re.source}' Don't Matches with '${str}'`)
//     }
// }

//Regular Expression
//Quantifier {} and Grouping ()


// let re;
// let str;

// Bracess {} Quantifier
// re = /hel{3}o/; //Must use 3 times before {} letter
// re = /hel{2,5}o/; //Must use minimum 3 times maximus 5 times before {} letter;
// re = /hel{3,}o/; //Must use minimum 3 times maximus unlimited times before {} letter

// Parentheses () Grouping
// re = /^([0-9]){5}/;  //must start with 5 number digits
// // Bangladeshi Phone Number
// re = /^01[0-9]{9}$/
// re = /^\+8801[0-9]{9}$/
// re = /^([0-9]x){3}$/


// str = "3x7x7x"


// console.log(re.exec(str))
// reTest(re, str);
// function reTest(re, str) {
//     if (re.test(str)) {
//         console.log(`'${re.source}' Matches with '${str}'`)
//     } else {
//         console.log(`'${re.source}' Don't Matches with '${str}'`)
//     }
// }


//Regular Expression
// Shorthand Charactrt
// let re;
// let str;
// re = /\w/; // Word Character = alpa numeric or _
// re = /\w+/ // One or more word Character
// re = /\W/; // non word characters
// re = /\W+/; // One or  more non word characters
// re = /\d/; // digits characters
// re = /\d+/; // one or more digits characters
// re = /\D/; // NON digits characters
// re = /\D+/; // One or more NON digits characters
// re = /\s/; // Only white space
// re = /\s+/; // Only one or more white space

// str = "Hello_22"
// str = "Hello_123"
// str = "Hello   World"
// str = "123"
// str = "hello"
// str = "       df"



// console.log(re.exec(str))
// reTest(re, str);
// function reTest(re, str) {
//     if (re.test(str)) {
//         console.log(`'${re.source}' Matches with '${str}'`)
//     } else {
//         console.log(`'${re.source}' Don't Matches with '${str}'`)
//     }
// }



// Rehular Expression
// Aessertion

// let re;
// let str;

// re = /x(?=y)/;  // Matches  only x is before y
// re = /x(?=yz)/;
// re = /x(?!yz)/;
// str = "xayz"


// console.log(re.exec(str))
// reTest(re, str);
// function reTest(re, str) {
//     if (re.test(str)) {
//         console.log(`'${re.source}' Matches with '${str}'`)
//     } else {
//         console.log(`'${re.source}' Don't Matches with '${str}'`)
//     }
// }


// Regular expression
// Postal Code, Mobile number, and Email validation Test Project

// let re;
// let str;
// // Postal Code 8280
// re = /^([0-9]){4}$/

// // Mobile Number 01798293884, 8801798293884, +8801798293884
// re = /^01[0-9]{9}$/;
// re = /^8801[0-9]{9}$/;
// re = /^\+8801[0-9]{9}$/;
// re = /^(88)?01[0-9]{9}$/;
// re = /^(\+88)?01[0-9]{9}$/;


// // Email validation coderemon.me@gamil.com
// re = /^([a-zA-Z0-9]\.?)+([a-zA-Z0-9])+@([a-zA-Z0-9])+(?:\.[a-zA-Z0-9]+)+$/


// str = "8280";
// str = "01798293884";
// str = "8801798293884";
// str = "+8801798293884";
// str = "8801798293884";
// str = "+8801798293884";
// str = "coderemon.me@gmail.com"
// str = "info@coderemon.me"

// console.log(re.test(str));


// // JSON Syntax

// //JS object syntax

// let student = {
//     name:"Emon",
//     age:19,
//     village:"Shyampur"
// }

// //JSON Format
// // let student_json = {
// //     "name" : "Emon",
// //     "age" : 19,
// //     "village" : "Shyampur"
// // }


// //Convert json to object and object to json
// let student_json = JSON.stringify(student)
// let json_object = JSON.parse(student_json)


// console.log(student);
// console.log(student_json);
// console.log(json_object);



// // JSON Data types
// //JSON Data types validation website http://jsonlint.com

// // JSON Supported data type
// //String
// //Number
// //Boolean
// //null
// //Object
// //Array

//Don't support Date format, Undefined format function method

// let person = {
//     name : "Emon",
//     age : 19,
//     married : false,
//     test_null : null,
//     person1 : {
//         name: "Emoon",
//         age: 19,
//         married: false,
//         test_null: null,
//     },
//     arr : [1,2, "Hello World", true, null],
//     test_und : undefined,
//     dob:2003-01-03,
//     greeet : function(){
//         console.log(`Hello ${this.name} `)
//     }
// };

// let person_json = JSON.stringify(person);
// let json_object = JSON.parse(person_json);


// console.log(person)
// console.log(person_json)
// console.log(json_object)


// //JSON Warning
// //JSON hard code coundn't write in js
// let person1 = {
//     "name" : "Emon",
//     "age" : 19,
//     "village" : "shyampur"
// }

// // let person1_obj = JSON.parse(person1);  //error warning

// let person1_json = JSON.stringify(person1)
// let person_obj = JSON.parse(person1_json)

// console.log(person1)
// console.log(person1_json)
// console.log(person_obj)

// //======== JSON Objects and Array
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         var data = this.responseText;
//         // console.log(data);
//         jsonData(data)
//     }
// }
// xmlhttp.open("GET", "data.json", true);
// xmlhttp.send();

// function jsonData(json_obj){
//     var js_obj = JSON.parse(json_obj);
//     // console.log(js_obj);
//     for (x in js_obj.person){
//         var {name, age, hometown} = js_obj.person[x];
//         console.log(`${name} er bois ${age} basa ${hometown} `);
//     }
// }


// Get data using ajax

// document.getElementById("myBtn").addEventListener("click", loadData);

// function loadData(){
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'data.txt', true);
//     xhr.onload = function() {
//         if (xhr.status === 200){
//            // console.log(xhr.responseText);
//            document.getElementById('data').innerHTML = xhr.responseText;

//         }
//     }
//     xhr.send();
// }



// document.getElementById("myBtn").addEventListener("click", loadData);

// function loadData() {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'data.txt', true);
//     xhr.onreadystatechange = function () {
//         if (xhr.status === 200 && xhr.readyState === 4) {
//             // console.log(xhr.responseText);
//             document.getElementById('data').innerHTML = xhr.responseText;
//         }
//     }
//     xhr.send();
// }


// //Get data from external server using ajax

// document.getElementById("myBtn").addEventListener("click", loadJoke);

// function loadJoke(){

//     let number = document.getElementById("link").value;
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
//     xhr.onprogress = function () {
//         document.getElementById("output").innerHTML = `<h1>Loading..........</h1>`
//     }
//     xhr.onload = function () {
//         var data = JSON.parse(xhr.responseText);
//         // console.log(data)
//         var jokes = data.value;
//         // console.log(jokes)

//         let output = "<ol>";
//         jokes.forEach(function(item){
//             // console.log(item.joke)
//              output += `<li>  ${item.joke}  </li>`;

//         })
//         output += "</ol>";
//         console.log(output)
//         document.getElementById("output").innerHTML = output;
//     }

//     xhr.send();
// }


//Callback Function

// let persons = [
//     {firstName: "John", lastName: "Doe"},
//     {firstName: "Emon", lastName: "Howlader"}
// ]

// console.log(persons)
// function createPerson(person, callback) {
//     setTimeout(function(){
//       persons.push(person);
//         callback();
//         console.log(persons.push)
//     }, 2000)
// }

// function getData(){
//     setTimeout(function(){
//         let output = "";
//         persons.forEach(function(item){
//             output += `<li>${item.firstName} ${item.lastName}</li>`
//             document.getElementById("output").innerHTML = output;
//         }, 1000)
//     })
// }

// createPerson({ firstName: "Rabbi", lastName: "Sikder" }, getData);


// // Promise

// let persons = [
//     { firstName: "John", lastName: "Doe" },
//     { firstName: "Emon", lastName: "Howlader" }
// ]


// function createPerson(person) {

//     let prom = new Promise((resolve, reject) => {
//         persons.push(person);
//         let err = false;
//         if(!err){
//             resolve()
//         }else{
//             reject('Data error -- Something went wrong')
//         }
//     })

//     return prom;
// }

// function getData() {
//     setTimeout(function () {
//         let output = "";
//         persons.forEach(function (item) {
//             output += `<li>${item.firstName} ${item.lastName}</li>`
//             document.getElementById("output").innerHTML = output;
//         }, 1000)
//     })
// }

// createPerson({ firstName: "Rabbi", lastName: "Sikder" }).then(getData).catch(function (error) {
//     console.log(error)
// });


// Fetch Api Get data from external server

// document.getElementById("myBtn").addEventListener("click", loadJoke);

// function loadJoke(){

//     let number = document.getElementById("link").value;

    
    
//         fetch(`data.json`)
//             .then(res => res.json())
//             .then(dt => test(dt.person)) 
    

        
//         function test(person){

//             var jokes = person;
//             // console.log(jokes)

//             let output = "<ol>";
//             jokes.forEach(function (item) {
//                 // console.log(item.joke)
//                 output += `<li>  ${item.name}  </li>`;

//             })
//             output += "</ol>";
//             console.log(output)
//             document.getElementById("output").innerHTML = output;
//         }
    

    
// }