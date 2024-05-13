"use strict";
// // EXERCISE 2
Object.defineProperty(exports, "__esModule", { value: true });
// let personName: string = "JOHN";
// console.log(`hello ${personName},would you like to learn some python today?`);
// // EXERCISE 3
// // lower case 
// let personName: string = "Mazna";
// console.log("lowercase:", personName.toLowerCase());
// // UPPER CASE 
// console.log("uppercase:",personName.toLocaleUpperCase());
// // Title Case
// console.log("TitleCase:",personName.replace(/\bw/g,c => c . toUpperCase()));
// // EXERCISE 4 (FAMOUS QUOTE)
// let qoute: string="Life is like riding a bicycle. To keep your balance, you must keep moving.";
// let author:string="Albert Eintesin";
// console.log(`${author} Once said,${qoute}`);
// // EXERCISE 5 (FAMOUS PERSON)
// let famousPerson: string= "Albert Eintesin";
// let qoute: string="Life is like riding a bicycle. To keep your balance, you must keep moving.";
// let message=`${famousPerson} once said, ${qoute}`;
// console.log(message);
// // EXCERCISE 6 (STRIPPING NAMES)
// let personName: string = `\n\t RAYYAN KASHIF \t\n`;
// console.log(personName);
// let stripping = personName.trim();
// console.log(stripping);
// // EXCERCISE 7,8
// console.log(5+3);
// console.log(11-3);
// console.log(4*2);
// console.log(16/2);
// // EXCERCISE 9 (FAVOURITENUMBER)
// let favouriteNumber: number = 29;
// console.log(`my favourite number is ${favouriteNumber}`);
// EXCERCISE 10 
//my name is mazna
//Dated : 29/03/2024
//console.log(`hello world simple program `);
// EXCERCISE 11 (NAMES [ADMINSTRATOR])
// let members: string[] =['mahnoor','maham','asfa','aina','bareera'];
// for(let i=0;i<members.length; i++) {
//     console.log(members [i]);
//  }
// // EXCERCISE 12
// let members: string[] =['mahnoor','maham','asfa','aina','bareera'];
// let message:string = 'whose birthday is tomorrow:';
// for(let i=0;i<members.length; i++) {
//     console.log(message+ members [i]);
// }
// // EXCERCISE 13 (TRANSPORTATION [ADMINSTRATOR])
// let transportation: string[] =['civic','bike','bus','honda city','suzuki'];
// for(let i=0;i<transportation.length; i++) {
//    console.log('I would like to own a ' + transportation [i]); 
// }
// ////EXCERCISE 14,15 ( GUEST LIST)
// let guest_list: string[] =[
// 'sanober',
// 'zoha',
// 'aina',
// 'mahnoor',
// 'maham',
// ];
// for(let i=0;i<guest_list.length; i++) {
//     console.log('Respected Madam ' + guest_list[i] + ',\n\n we are inviting you on our place for dinner tomorrow\n\n thank you\n');    
// }
// let not_present : string = 'maham';
// let new_guest : string = 'sajal ali';
// guest_list[4] = new_guest
// for(let i=0;i<guest_list.length; i++) {
//     console.log('Respected Madam ' + guest_list[i] + ',\n\n we are inviting you on our place for dinner tomorrow\n\n thank you\n');    
// }
// console.log(`miss ${not_present} will not come tomorrow for dinner`);
// // excercise 16 (MORE GUEST)
// let guest_list: string[] =[
// 'sanober',
// 'zoha',
// 'aina',
// 'mahnoor',
// 'maham',
// ];
// // for(let i=0;i<guest_list.length; i++) {
// //     console.log('Respected Madam ' + guest_list[i] + ',\n\n we are inviting you on our place for dinner tomorrow\n\n thank you\n');    
// // }
// let not_present : string = 'maham';
// let new_guest : string = 'sajal ali';
// guest_list[4] = new_guest
// for(let i=0;i<guest_list.length; i++) {
//     console.log('Respected Madam ' + guest_list[i] + ',\n we are inviting you on place for dinner tomorrow\n thank you\n');    
// }
// guest_list.unshift('walija','bareera','ayesha');
// for(let i=0;i<guest_list.length; i++) {
//     console.log('Respected Madam ' + guest_list[i] + ',\n we are inviting you on place for dinner tomorrow. we found a big table so we decide to invite 3 more guest\n thank you\n');    
// }
// // // EXCERCISE 17 (SHRINKING GUEST LIST USE POP) 
// let guest_list: string[] =[
// 'sanober',
// 'zoha',
// 'aina',
// 'mahnoor',
// 'maham',
// ];
// // for(let i=0;i<guest_list.length; i++) {
// //     console.log('Respected Madam ' + guest_list[i] + ',\n\n we are inviting you on our place for dinner tomorrow\n\n thank you\n');    
// // }
// let not_present : string = 'maham';
// let new_guest : string = 'sajal ali';
// guest_list[4] = new_guest
// // for(let i=0;i<guest_list.length; i++) {
// //     console.log('Respected Madam ' + guest_list[i] + ',\n we are inviting you on place for dinner tomorrow\n thank you\n');    
// // }
// guest_list.unshift('walija','bareera','ayesha');
// // for(let i=0;i<guest_list.length; i++) {
// //     console.log('Respected Madam ' + guest_list[i] + ',\n we are inviting you on place for dinner tomorrow. we found a big table so we decide to invite 3 more guest\n thank you\n');    
// // }
// console.log('\n unfortunately we can not arrange a big table , only two people allow');
// while(guest_list.length>2) {
//     let remove_guest = guest_list.pop();
//     console.log(`sorry, madam.${remove_guest} you are not invited for dinner`);    
// }
// for(let i=0;i<guest_list.length; i++) {
//     console.log('Respected Madam ' + guest_list[i] + ',\nyes you are still invited on tomorrow dinner\n thank you\n');    
// }
// guest_list.splice(0,2);
// console.log(guest_list)
// // // EXCERCISE 18 (SEEING WORLD)
// // Seeing the World: Think of at least five places in the world you’d like to visit.
// // • Store the locations in a array. Make sure the array is not in alphabetical order.
// // • Print your array in its original order.
// let places : string [] = ['Bangkok', 'France', 'New York', 'Istanbul', 'Tokyo', 'Antalya'];
// console.log('original ' + places);
// //Print your array in alphabetical order without modifying the actual list.
// console.log('copy ' + [...places].sort());
// // • Show that your array is still in its original order by printing it.
// console.log('original ' + places);
// // • Print your array in reverse alphabetical order without changing the order of the original list.
// console.log('copy ' + [...places].sort().reverse());
// // • Show that your array is still in its original order by printing it again.
// console.log('copy ' + [...places].sort().reverse());
// // • Reverse the order of your list. Print the array to show that its order has changed.
// console.log('original ' + places.sort());
// // • Reverse the order of your list again. Print the list to show it’s back to its original order.
// console.log('original ' + places.sort().reverse());
// // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// console.log('original ' + places.sort());
// // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// console.log('original ' + places.sort().reverse());
// // EXCERCISE 19 (DINNER GUEST)
// import { guest_list } from '../exercise14/app';
//     for(let i=0;i<guest_list.length; i++) {
//         console.log('Respected Madam ' + guest_list[i] + ',\n\n we are inviting you on our place for dinner tomorrow.\n\n thank you\n');    
//     }
// console.log(`we had finally invited ${guest_list.length} people`);
// // EXCERCISE 20 
// let rivers : string [] =['River Nile',
//     'Amazon River',
//     'Yangtze River',
//     'Mississippi River',
//     'Yenisei River',
//     'Ob-Irtysh River'] 
//     console.log("list of rivers:")
//      for(let top of rivers) {
//         console.log(top);
// }
// // EXCERCISE 21 (TypeScript Object.)
// interface item {
//     name:string
//     rate:number
// }
// const cake: item = {
//     name:'Three Milk Cake',
//     rate:2100
// }
// const fruit: item = {
//     name:'mango',
//     rate:300
// }
// console.log(`cake name: ${cake.name},\n cake rate:$${cake.rate},`);
// console.log(`fruit name: ${fruit.name},\n fruit rate:$${fruit.rate},`);
// // EXCERCISE 22 (Intentional Error)
// let array: (string | number) [] = ['zameer','zubair',29,14,25,'ezaan'];
// console.log(array[5]);
// //EXCERCISE 23 (Conditional Tests)
// let car : string = 'subaru';
// // Test 1: Equality Comparision (True)
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru'); // true
// // Test 2:Strict Equality Comparision (True)
// console.log("Is car === 'subaru'? I predict True.");
// console.log(car === 'subaru'); // true
// // Test 3: Inequality Comparision (False)
// console.log("Is car != 'subaru'? I predict false.");
// console.log(car != 'subaru'); // false
// // Test 4:Strict Inequality Comparision (False)
// console.log("Is car !== 'subaru'? I predict false.");
// console.log(car !== 'subaru'); // false
// // Test 5: Less than Comparision (False)
// console.log("Is car < 'subaru'? I predict false.");
// console.log(car < 'subaru'); // False (lexicographic comparision)
// // Test 6: Greater than Comparision (False
// console.log("Is car > 'subaru'? I predict false.");
// console.log(car > 'subaru'); // False (lexicographic comparision)
// // Test 7: Less than or equal Comparision (True)
// console.log("Is car <= 'subaru'? I predict True.");
// console.log(car <= 'subaru'); // true
// // Test 8: Greater than or equal Comparision (True)
// console.log("Is car >= 'subaru'? I predict True.");
// console.log(car >= 'subaru'); // true
// // Test 9: checking truthiness (True)
// console.log("Is car? I predict True.");
// console.log(car); // true (non-empty string is truthy)
// // Test 10: checking truthiness (false)
// console.log("Is !car?  I predict False.");
// console.log(!car); // false (negation of a truthy value)
////EXCERCISE 24 (More Conditional Tests:)
// let car: string = 'subaru';
// let age: number = 35;
// let fruit: string [] = ['apple','banana','orange'];
// // test 1: Equality (True)
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru'); // true
// // test 2: Strict Equality (False)
// console.log("Is car === 'subaru'? I predict false.");
//  console.log(car === 'subaru'); // false
// // test 3: Inequality (True)
// console.log("Is car != 'subaru'? I predict True.");
// console.log(car != 'subaru'); // True
// // test 4: Inequality (False)
// console.log("Is car !== 'subaru'? I predict false.");
// console.log(car !== 'subaru'); // false
// // test 5: Lowercase conversion (True)
// console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
// console.log(car.toLocaleLowerCase() == 'subaru'); 
// // test 6: Lowercase conversion (False)
// console.log("Is car === car.toLowerCase()? I predict False.");
// console.log(car === car.toLocaleLowerCase()); 
// // test 7: Equality (True)
// console.log("Is age == 35? I predict True.");
// console.log(age == 35); 
// // test 8: Inequality (False)
// console.log("Is age != 40? I predict false.");
// console.log(age != 40); 
// // test 9: Greater than (false)
// console.log("Is age > 40? I predict false.");
// console.log(age > 40); 
// // test 10: Less than or equal (True)
// console.log("Is age <=35? I predict True.");
// console.log(age <= 35); 
// // test 11: AND (True)
// console.log("Is age > 30 && age < 40? I predict True.");
// console.log(age > 30 && age < 40);
// // test 12:OR (False)
// console.log("Is age > 40 || age < 18? I predict True.");
// console.log(age > 40 || age < 18);
// // Test 13: In Array (true)
// console.log("\n Is orange include in my fruits arry");
// console.log(fruit.includes("orange"));
// // Test 14:Not In Array (false)
// console.log("\n Is orange include in my fruits arry");
// console.log(!fruit.includes("orange"));
// // EXCERCISE 25 (Alien Colors #1)
// let alien_color : string = "green";
// if(alien_color == "green") {
//     console.log(" the player just earned 5 points.");
// }
// alien_color = "red";
// if(alien_color == "green") {
//     console.log(" the player just earned 5 points.");
//  }
// //EXCERSISE 26 (Alien Colors #2)
// let alien_color : string = "green";
// if(alien_color == "green") {
//     console.log(" the player just earned 5 points for shooting the alien.");
// }
// else {
//     console.log("the player just earned 10 points.");
// }
// alien_color = "red";
// if(alien_color == "green") {
//     console.log(" the player just earned 5 points for shooting the alien.");
// }
// // EXCERCISE 27 (Alien Colors #3:)
// //VERSION 1
// let alien_color : string = "green";
// if(alien_color == "green") {
//     console.log(" the player just earned 5 points.");
// }
// else if(alien_color == "yellow") {
//     console.log("the player just earned 10 points.");   
// }
// else if(alien_color == "red") {
//     console.log(" the player just earned 15 points.");
// }
// else{
//     console.log("please select right color");
// }
// //  VERSION 2
// alien_color = "yellow";
// if(alien_color == "green") {
//     console.log(" the player just earned 5 points.");
// }
// else if(alien_color == "yellow") {
//     console.log("the player just earned 10 points.");   
// }
// else if(alien_color == "red") {
//     console.log(" the player just earned 15 points.");
// }
// else{
//     console.log("please select right color");
// }
// // VERSION 3
// alien_color = "red";
// if(alien_color == "green") {
//     console.log(" the player just earned 5 points.");
// }
// else if(alien_color == "yellow") {
//     console.log("the player just earned 10 points.");   
// }
// else if(alien_color == "red") {
//     console.log(" the player just earned 15 points.");
// }
// else{
//     console.log("please select right color");
// }
// // EXCERCISE 28 (Stages of Life)
// let age : number = 35; 
// if(age<2) {
//     console.log("the person is a baby.");
// }
// else if(age>=2 && age <4) {
//     console.log("the person is a toddler.");
// }
// else if(age>=4 && age <13) {
//     console.log("the person is a kid.");
// }
// else if(age>=13 && age <20) {
//     console.log("the person is a teenager.");
// }
// else if(age>=20 && age <65) {
//     console.log("the person is a adult."); // ans
// }
// else {console.log("person is an elder.");
// } 
// // EXCERCISE 29 (Favorite Fruit:)
let favourite_fruit = ['apple', 'pear', 'mango', 'strawberry', 'grapes'];
if (favourite_fruit.includes('apple')) {
    console.log("i really like apple!");
}
if (favourite_fruit.includes('strawberry')) {
    console.log("i really like strawberry!");
}
if (favourite_fruit.includes('pear')) {
    console.log("i really like pear!");
}
if (favourite_fruit.includes('mango')) {
    console.log("i really like mango!");
}
if (favourite_fruit.includes('grapes')) {
    console.log("i really like grapes!");
}
// // EXCERCISE 30 (Hello Admin)
// let users : string [] = ['sanober', 'mahnoor','aina','mazna','admin']
// for(let user of users) {
//     if(user === "admin") {
//         console.log(" Hello admin,\n would you like to see a status report?");
//     }
// else {
//     console.log(`hello ${user},\n 'thank you for logging in again.' `);
// }
// }
// // EXCERCISE 31 (No Users:)
// let users : string [] = ['sanober', 'mahnoor','aina','mazna','admin']
// if(users.length === 0) {
//     console.log("We need to find some users!");
// }
// else {
//     users = []
//     console.log("all users has been removed " + users.length );
// }
// // EXCERCISE 32 (Checking Usernames:)
// let current_users : string [] = ['sanober','zoha','hina','ashi','bareera'];
// let new_users : string [] = ['zameer','moin','aina','shahbaz','ibad'];
// new_users.forEach((newUser) => {
//     if(
//         current_users.some(
//             (current_users) => current_users.toLocaleLowerCase() === newUser.toLocaleLowerCase()
//         )
//     ) {
//         console.log(`${newUser} will need to enter a new username.`);
//     } else {
//         console.log(`${newUser} is avaiable`);
//     }
// }
// )
// // EXCERCISE 33 (Ordinal Numbers:)
// let myNumbers = [1,2,3,4,5,6,7,8,9,];
// for(let i = 0; i < myNumbers.length; i++){
//     if (myNumbers[i] == 1) {
//         console.log(`${myNumbers[i]}st`);
//     }
//     else  if (myNumbers[i] == 2) {
//         console.log(`${myNumbers[i]}nd`);
//     }
//     else  if (myNumbers[i] == 3) {
//         console.log(`${myNumbers[i]}th`);
//     }
//     else  if (myNumbers[i] >= 4 && myNumbers[i] <= 9 ) {
//         console.log(`${myNumbers[i]}th`);
//     }
// }
// // // EXCERCISE 34 (PIZZAS)
// let myPizza : string [] = ['malai boti pizza','chicken fajita pizza','afghani tikka pizza','pepperoni pizza']
// for (let i = 0; i < myPizza.length;i++) {
// console.log(myPizza[i]);
// }
// for (let i = 0; i < myPizza.length;i++) {
//     console.log(`I like to eat ${myPizza[i]}`);
//     console.log(
//         `\n I really like to eat pizza. pizza comes in a variety of flavors and toopings, allowing individuals to customize it to their liking`
//     );
// }
// // EXCERCISE 35  (Animals)
// let Animals : string [] = ['dog','elephant','rabbit'];
// Animals.forEach(animal => {
//     console.log(`A ${animal} would make a great pet `);
// });
// console.log("any of these animals would make a great pet!");
// // EXCERCISE 36 (T-Shirt)
// function make_shirt(size:string, message:string) {
//     console.log(`making a ${size} t-shirt with the message "${message}" print on it.`);
// }
// make_shirt("large", "-THINK-POSITIVE DO YOUR BEST")
// // EXCERCISE 37 (LARGE SHIRT)
// function make_shirt(size:string = "large", message:string = "I LOVE TYPESCRIPT") {
//         console.log(`making a ${size} t-shirt with the message "${message}" print on it.`);
//     }
//     make_shirt ();
//     make_shirt("medium");
//     make_shirt("small","MAKE TIME")
// //EXCERCISE 38 (CITIES)
// function describe_city(nameOfCity: string, country: string = 'Default  Country' ) {
//     return `${nameOfCity} is in ${country}`;
// };
// let city1 = describe_city("Washington","America");
// let city2 = describe_city("Paris","France")
// let city3 = describe_city("Ankara","Turkey")
// let city4 = describe_city("Tokyo","Japan")
// console.log(city1,);
// console.log(city2);
// console.log(city3);
// console.log(city4);
// // EXCERCISE 39 (City Names)
// function city_country(city: string, country:string) {
//     console.log(`"${city},${country}"`);
// }
//     city_country("karachi", "pakistan");
//     let mycities = city_country("karachi", "pakistan");
//     console.log(mycities);
//     console.log(city_country("Dubai","UAE"));
//     console.log(city_country("Ankara","Turkey"));
//     console.log(city_country("London","United kingdom"));
// // EXCERCISE 40 (Album)
// function make_album(artistName: string, albumTitle: string) {
//     return{artistName, albumTitle}
// }
// let Album1 = make_album("Jhoom" ," Ali Zafar");
// let Album2 = make_album("Qismat Apney Haath Mein", "Shehzad Roy");
// let Album3 = make_album("Dil Ki Baat" , "Alamgir");
// console.log(Album1);
// console.log(Album2);
// console.log(Album3);
// function make_album2(artistName: string, albumTitle: string, numberOfTracks?: number) {
//     return{artistName, albumTitle, numberOfTracks}
// }
// let Album4 = make_album2("Meri Kahani" ," Atif Aslam", 40);
// let Album5 = make_album2("Ae Dil Hai Mushkil", "Arijit Singh", 55);
// let Album6 = make_album2("Fearless" , " Taylor Swift ", 30);
// console.log(Album4);
// console.log(Album5);
// console.log(Album6);
// // EXCERCISE 41 (Magicians)
// let Magicians: string [] = ['Criss Angel','David Copperfield','David Blaine'];
// function show_magicians(magicians:string[]) {
//     magicians.forEach(magician => {
//         console.log(magician);
//     });
// }
// show_magicians(Magicians);
// // EXCERCISE 42 (Great Magicians)
// let Magicians: string [] = ['Criss Angel','David Copperfield','David Blaine'];
//  function make_great(magicians:string[]) {
//     for (let i=0; i< magicians.length; i++) {
//         magicians[i] ="the great "  +  magicians[i] ;
//     }
//  } 
//  make_great(Magicians);
//  console.log(Magicians);
// //EXCERCISE 43 (Unchanged Magicians)
// function  show_magicians(magicians: string[]){
//     magicians.forEach(name => console.log(name)
//     );
//     }
//     //function to make magicians great though .map() it will modify array
//     function make_great(magicians:string[]) {
//         return magicians.map(name =>`The Great ${name}`);
//     }
// let magician_names = ['Criss Angel','David Copperfield','David Blaine'];
// let copy_magicians_names = magician_names.slice();
// let copy_great_magicians =make_great(copy_magicians_names);
// show_magicians(magician_names);
// show_magicians(copy_great_magicians);
// // EXCERCISE 44 (Sandwiches)
// function make_sandwich(...items: string []) {
//     console.log(`making a sandwich with:${items.join(', ')}.`);
// }
// make_sandwich ("turkey","Swiss cheese", " onion slices");
// make_sandwich ("tomato slices"," bacon strips","Mustard");
// make_sandwich ("Creamy avocado","ham","Roasted bell peppers");
// // EXCERCISE 45 (Cars)
// function make_car(manufacturer: string, model: string, ...options: [string, any][]): object  {
//     let car = {manufacturer, model };
//     options.forEach(([key, value]) =>  value);
//     return car;
// }
// console.log(make_car("Toyota", "Camry" , ["color", "Blue"],["year", 2022]));
// console.log(make_car("Honda","Civic", ["color", "white"], ["sunroof", true]));
