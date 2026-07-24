//practice java script print and alert
console.log("welcome");
console.log("wow how's the css");
// variables
name1 = "Gourav in";
age = 43;
isFollow = true;
number = 30;
// now print
console.log(name1);
// now prc null and undefined
age = null;
// so thsese are samee values but when i change tha variable.....
fullName = "mohan dash"
dob =  ("19/06/2025");
console.log(fullName);
console.log(dob);
//store data
let item1Price = 300;
let item2Price = 400;
let discount = 100;
const costmerName = "amitkumar";
let total = item1Price + item2Price;
let finalBill = total - discount;
console.log("final bill is: ", finalBill);
console.log("your total bill without discount is;", total);
console.log("name:",name , "tshirt:", item1Price , "shirt:", item2Price , "discount on:", discount , "your total bill:", total , "final pay bill:", finalBill);
let product = {
    itemName: "Pen",
    rate: 99,
    isAvalibe: true,
    discount: 9,
}
let pay = product.rate - product.discount;
console.log("details:", product);
console.log(product.rate);
console.log("finalpay", pay);
// create a const object called profile
const profile = {
    name: "Gourav",
    post: 256,
    follower: 1000,
    isFollow: false,
}
console.log(profile);

let name3 = "john";
let lastname = "dey"
let fullName1 = name3+" "+lastname;
console.log("fullname is:", fullName1);
//today study loop and string 
for (let a = 1; a <= 999; a++) {
    console.log("let value 1 =", a);
}
//calculate sum 1 to 10 number with varibale
let sum = 0;
let x = 999;
for (let i = 1; i <=x; i++) {
    sum = sum + i;
}
console.log("sum = ", sum);
// for of loop
let lan = "javascript";
for(let z of lan) {
    console.log("lan =", z);
}
//ptint  1 to 100 num using loops
for (let y = 1; y <= 100; y++) {
    if (y%2 === 0)
    console.log("numbers even num =", y);
}
for (let b = 1; b <= 100; b++) {
    if (b%2 !== 0)
    console.log("numbers odd num =", b);
}
// make a number gussing game 
let gameNum = 89;
let userNum = prompt("let guees tha num");
while (userNum != gameNum); {
  userNum = prompt("You enter wrong please try again!");
 }
console.log("congrantes you winner");
