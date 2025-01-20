// Prevent us from attempting to use variables
// that are not declared
"use strict"

//Array #1
let booksRead = ["Full Dark, No Stars", "Oryx and Crake", "The Troop", "Diavola", 
    "The Mesmerist", "Into the Uncut Grass", "I Was a Teenage Slasher",  "It", 
    "Wandering Stars", "Wool"];


booksRead[7] = "One of Our Kind";
console.log(booksRead);             // Output: Array (10)["Full Dark, No Stars", 
// "Oryx and Crake", "The Troop", "Diavola", "The Mesmerist", "Into the Uncut Grass",
// "I Was a Teenage Slasher", "One of Our Kind", "Wandering Stars", "Wool"]
    
console.log(booksRead[6]); // Output: I Was a Teenage Slasher

let firstBook2025 = booksRead.shift();
console.log(booksRead); // Output: Array(9) [ "Oryx and Crake", "The Troop", "Diavola", 
// "The Mesmerist", "Into the Uncut Grass", "I Was a Teenage Slasher", "One of Our Kind",
//  "Wandering Stars", "Wool" ]

booksRead.pop();
console.log(booksRead); //Output: Array(8) [ "Oryx and Crake", "The Troop", "Diavola", 
// "The Mesmerist", "Into the Uncut Grass", "I Was a Teenage Slasher", "One of Our Kind",
//  "Wandering Stars" ]

booksRead.push("Interesting Facts about Space", "The Year of the Flood", "MaddAddam", "Run", 
    "Home Is Where the Bodies Are", "A Talent for Murder"); 
console.log(booksRead);
//Output: Array(8) [ "Oryx and Crake", "The Troop", "Diavola", "The Mesmerist", 
// "Into the Uncut Grass", "I Was a Teenage Slasher", "One of Our Kind", "Wandering Stars" ]
​0: "Oryx and Crake"
​1: "The Troop"
​2: "Diavola"
​3: "The Mesmerist"
​4: "Into the Uncut Grass"
​5: "I Was a Teenage Slasher"
​6: "One of Our Kind"
​7: "Wandering Stars"
​8: "Interesting Facts about Space"
​9: "The Year of the Flood"
​10: "MaddAddam"
​11: "Run"
​12: "Home Is Where the Bodies Are"
​13: "A Talent for Murder"
​
length: 14

booksRead.length;
console.log(booksRead);   
//Array(14) [ "Oryx and Crake", "The Troop", "Diavola", "The Mesmerist", 
// "Into the Uncut Grass", "I Was a Teenage Slasher", "One of Our Kind", 
// "Wandering Stars", "Interesting Facts about Space", "The Year of the Flood", … ]



//Array #2
let toBeRead = [];
let myArray = [booksRead, "Laura", 2025, 2024, "Jamie", "Kassi", toBeRead];
console.log(myArray); 
// Output: Array(7) [ (14) […], "Laura", 2025, 2024, "Jamie", "Kassi", [] ]

console.log(typeof (myArray())); // Output: object
console.log(typeof (myArray[3]));  // Output: number

