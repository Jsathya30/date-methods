//I. get-method:
//1.getDate:-returns the day of a date as a number (1-31)
let date=new Date();
let dd=date.getDate();
console.log(dd);

//2.getDay:-returns the weekday as a number (0-6)

let days=new Date();
let day=days.getDay();
console.log(day);

//3.getMonth:-returns the month of a date as a number (0-11)

let month=new Date();
let mon=month.getMonth();
console.log(mon);

//4.getFullYear:-returns the year of a date as a four digit number

let fyear=new Date();
let fullyear=fyear.getFullYear();
console.log(fullyear);

//5.getYear:-
let year=new Date();
let yr=year.getYear();
console.log(yr);

//6.getHours:-returns the hours of a date as a number (0-23)

let hour=new Date();
let hr=hour.getHours();
console.log(hr);

//7.getMinutes():-returns the minutes of a date as a number (0-59)

let minutes=new Date();
let minu=minutes.getMinutes();
console.log(minu);

//8.getSeconds():-returns the seconds of a date as a number (0-59)

let seconds=new Date();
let sec=seconds.getSeconds();
console.log(sec);

//9.getMilliseconds():-returns the milliseconds of a date as a number (0-999)

let millisec=new Date();
let msec=millisec.getMilliseconds();
console.log(msec);

//10.getTime():-returns the number of milliseconds since January 1, 1970

let time=new Date();
let tt=time.getTime();
console.log(tt);

//11.getTimezoneOffset():-returns the difference (in minutes) between local time an UTC time

let timeoff=new Date();
let toffset=timeoff.getTimezoneOffset();
console.log(toffset);


//II. Set-Methods:
//1. setDate():-sets the day of a date object (1-31) and can also be used to add days to a date

let setdd=new Date();
setdd.setDate(20);
console.log(setdd);

//2.setMonth():-

let setmon=new Date();
setmon.setMonth(6);
console.log(setmon);

//3.set new date and month

let dt=new Date();
dt.setDate(9);
dt.setMonth(5);
dt.setHours(6);

console.log(dt);

//4.setFullYear();

let syr=new Date();
syr.setFullYear(2023,8,14);
console.log(syr);

//5.setHours():

let sethrs=new Date();
sethrs.setHours(6);
console.log(sethrs);

//6.setMinutes:

let setmins=new Date();
setmins.setMinutes(10);
console.log(setmins);

//7.setSeconds:

let setsecs=new Date();
setsecs.setSeconds(50);
console.log(setsecs);



