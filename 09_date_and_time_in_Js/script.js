let myDate = new Date();
console.log(myDate)
console.log(myDate.toDateString() + " => in {toDateString}");
console.log(myDate.toISOString() + " => in {toISOString}");
console.log(myDate.toJSON() + " => in {toJSON}");
console.log(myDate.toLocaleDateString() + " => in {toLocaleDateString}");
console.log(myDate.toLocaleString() + " => in {toLocaleString}");
console.log(myDate.toString() + " => in {toString}");
console.log(myDate.toLocaleTimeString() + " => in {toLocaleTimeString}");
console.log(myDate.toTimeString()) + " => in {toTimeString}";
console.log(myDate.toUTCString() + " => in {toUTCString}");


// let createDate = new Date(2024, 7, 12);
// let createDate = new Date(2024, 7, 12, 5, 3);
// let createDate = new Date("2024-08-28");// YY/MM//DD
let createDate = new Date("08-28-2024"); //  MM/DD/YY
console.log(createDate.toLocaleDateString()); // 

// console.log(createDate.toLocaleDateString());

let myTimeStamp =  Date.now();

console.log(myTimeStamp); // Values in Mili second

console.log(createDate.getTime()); // Values in Mili second

console.log(Math.floor(Date.now()/1000)); // convert in seconds

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMinutes());

let newCreatedDate = createDate.toLocaleDateString('default', {
    timeZone: 'Asia/Kolkata',
    weekday: 'long'
})
console.log(newCreatedDate)