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

// let startDate=new Date("Jan 1,2015 00:00:00");

// console.log("Start Date === ",startDate);
// startDate = startDate.getTime();
// console.log("Start Date === ",startDate);

// let referDate=new Date("Dec 05, 2015 23:59:59");
// referDate = referDate.getTime();
// console.log("refer Date === ",referDate);

// let diffrence=(referDate-startDate);
// document.write(diffrence/1000);

// Q no 11:

// let CurrentDate=new Date();
// let CurrentHours=CurrentDate.getHours();
// CurrentDate.setHours(CurrentHours+1);
// document.write("current date: "+CurrentDate);
// document.write("1 hours ago,it was Sat "+ CurrentHours);

// Q no 12:

// let currentDate = new Date();

// let restartdate = currentDate.getFullYear();

// currentDate.setFullYear(restartdate - 100);
// console.log("current date :"+restartdate + "\n "+ "100 years back,it was "+ currentDate);

// //Q no 13:
// let age=+prompt("what is ur age");
// let date=new Date();
// let year=date.getFullYear();
// let calculateAge=(year-age)
// console.log("your age is "+  age +"\n"+ "Your birth year is "+calculateAge);

//Q no 14:

// Sample data
// const customerName = "Abc costumer";
// const currentMonth = "May";
// const unitsConsumed = 410;
// const perUnitRate = 16;
// const latePaymentSurchargePercentage =350;
// const dueDate = "2023-05-31";

// // Calculations
// const netAmountPayable = unitsConsumed * perUnitRate;
// const latePaymentSurcharge = netAmountPayable * (latePaymentSurchargePercentage / 100);
// const grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// // Format amounts to 2 decimal places
// const formattedNetAmount = netAmountPayable.toFixed(2);
// const formattedLatePaymentSurcharge = latePaymentSurcharge.toFixed(2);
// const formattedGrossAmount = grossAmountPayable.toFixed(2);

// // Display the bill in the browser
// document.write("<h2>K-Electric Bill</h2>");
// document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
// document.write("<p><strong>Month:</strong> " + currentMonth + "</p>");
// document.write("<p><strong>Number of Units:</strong> " + unitsConsumed + "</p>");
// document.write("<p><strong>Charges per Unit:</strong>" + perUnitRate + "</p>");
// document.write("<p><strong>Net Amount Payable (within Due Date):</strong>" + formattedNetAmount + "</p>");
// document.write("<p><strong>Late Payment Surcharge:</strong>" + formattedLatePaymentSurcharge + "</p>");
// document.write("<p><strong>Gross Amount Payable (after Due Date):</strong>" + formattedGrossAmount + "</p>");






