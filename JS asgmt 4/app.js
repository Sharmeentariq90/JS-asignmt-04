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

// let date=new Date();
// console.log("Current Date  :" + date);
// let milli=date.getTime();
// console.log("milliseconds elapsed since the epoch :" +milli);
// let second= (milli/1000);
// console.log("seconds elapsed since the epoch :" +second); 

// Q no 7:

// let date = new Date();
// let time = date.getHours();
// if (time <= 12) {
//     alert("Its A.M");
// }

// alert("Its P.M");

// Q no 8:
// (First Method)

// let laterDate=new Date("Dec 31,2020");
// alert("LaterDate : "  + laterDate);

// Second method

// let laterDate=new Date();
// let newyear=laterDate.setFullYear(2020);
// let newdate=laterDate.setDate(31);
// let newMonths=laterDate.setMonth(11);
// alert(laterDate);

// Q no 9:
// let ramadanStart=new Date("june 18,2015");
// let nowRamadan=new Date();
// let diffrence=(nowRamadan-ramadanStart);
// let inDays=Math.ceil(diffrence/(1000*60*60*24));
// alert("Number of days passed since 1st Ramadan: "+inDays);

// Q no 10:

let startDate=new Date("Jan 1,2015");
let givenDate=new Date("Dec 05,2015");
let diffrence=(givenDate.getTime()-startDate.getTime());
console.log(diffrence/1000);




