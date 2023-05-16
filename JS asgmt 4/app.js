// ******************-----------------chapter 31-34------------********************
// ------*****DATE METHODS******-------
// Q no:1
// let date=new Date();
// document.write(date);
// Q no:2

// let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// let date=new Date();
// alert("Current month :" +month[date.getMonth()]);

//Q no 3:
// let day=["MON","TUE","WED","THU","FRI","SAT","SUN"]
// let date=new Date();
// alert("Today is "+day[date.getDay()]);

// Q no 4:
// let date = new Date();
// let day = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
// let compare = day[date.getDay()]
// if (compare === "SAT" || compare === "SUN") {
//     alert("it's fun day ENJOY!!!!")

// }
// else { alert("its working day");
// }

// Q no 5:

// let date = new Date()
// let months=date.getDay();
// if (months<=15){
//  alert ("First fifteen days of month")
// }
// alert("Last days of the month");

// Q no 6:

let date=new Date();
console.log("Current Date  :" + date);
let milli=date.getTime();
console.log("milliseconds elapsed since the epoch :" +milli);
let second= (milli/1000);
console.log("seconds elapsed since the epoch :" +second); 




