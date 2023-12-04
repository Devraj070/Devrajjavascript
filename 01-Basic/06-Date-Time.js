let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

let myOwnDate = new Date(2023,0,23,5,3);
console.log(myOwnDate.toDateString());
console.log(myOwnDate.toLocaleTimeString());


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());




///by AI    indian time by ai which will give abasic idea about our time .
// microsoft edge ai (bing).
 

var currentTime = new Date();
var currentOffset = currentTime.getTimezoneOffset();
var ISTOffset = 330; // IST offset UTC +5:30
var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
var hoursIST = ISTTime.getHours();
var minutesIST = ISTTime.getMinutes();
console.log("The current time in India is " + hoursIST + ":" + minutesIST);

