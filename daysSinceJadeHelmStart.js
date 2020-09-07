#!/usr/local/bin/node

var startDay = new Date(2015, 6,15);  // July 15, 2015
var todayDate = new Date();

console.log("\nOperation 'Jade Helm' (supposedly the Invasion of Texas),");
console.log("Started: " + startDay);
console.log("Today:   " + todayDate);
console.log("which makes Today Day " + parseInt((todayDate - startDay)/1000/60/60/24) + " of the Invasion.");




