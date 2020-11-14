var alarmHour;
var alarmMinute;
var alarmTime;
var alarmTime24;
var alarmMeridiem;

//var currentHour = new Date().getHours();
//var currentMinute = new Date().getMinutes();
var time;
var sound = new Audio("music.mp3");
var alarmRinging = false;
var isAlarmStopped = false;


/******** DISPLAY CURRENT TIME *********/

var showCurrentTime = function() {
	var currentTime = document.getElementById("currentTime");
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	var meridiem = "AM"
	var showHours = hours;
	
	if (hours >= 12) {
		meridiem = "PM";
	}
	if (hours > 12) {
		showHours = hours - 12;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds <10) {
		seconds = "0" + seconds;
	}
	
	var printCurrentTime = showHours + " : " + minutes + " : " + seconds + " " + meridiem;
	currentTime.innerText = printCurrentTime;
	time = hours + ":" + minutes;
	console.log(time);
}

showCurrentTime();
setInterval(showCurrentTime, 1000);


/********** INPUT ALARM NAME **********/

function getName() {
	var assignAlarmName = document.getElementById("setAlarmName").value;
	document.getElementById("alarmName").innerText = assignAlarmName;
}

document.getElementById("setAlarmName").addEventListener("change", getName);

/********** INPUT ALARM TIME **********/

function getTime() {
	
	var hour24;
	var hour = document.getElementById("selectHour").value;
	var minute = document.getElementById("selectMinute").value;
	var meridiem = document.getElementById("selectMeridiem").value;

	if (hour == "hour") {
		hour = "__";
	}
	if (minute == "minute") {
		minute = "__";
	}
	if (meridiem == "PM" && hour < 12) {
		hour24 = parseInt(hour, 10) + 12;
	}
	
	alarmHour = hour;
	alarmMinute = minute;
	alarmTime = hour + " : " + minute;
	alarmTime24 = hour24 + ":" + minute;
	alarmMeridiem = meridiem;
	console.log("alarmTime: " + alarmTime24 + " " + meridiem);
}

document.getElementById("selectHour").addEventListener("change", getTime);
document.getElementById("selectMinute").addEventListener("change", getTime);
document.getElementById("selectMeridiem").addEventListener("change", getTime);

/********** SET ALARM BUTTON *************/

function setTime() {
	document.getElementById("alarmTime").innerText = alarmTime + " " + alarmMeridiem;
}
document.getElementById("setAlarmButton").addEventListener("click", setTime);


/********** STOP ALARM BUTTON *************/

function stopAlarm() { 
	sound.pause(); 
	alarmRinging = false;
	isAlarmStopped = true;
} 
document.getElementById("stopAlarmButton").addEventListener("click", stopAlarm);

/********** RING ALARM @ SCHEDULED TIME *************/

function ringAlarm() {
	if (alarmTime24 == time && isAlarmStopped == false) {
		sound.play();
		sound.loop = true;
		alarmRinging = true;
	}
}

ringAlarm();
setInterval(ringAlarm, 1000);

/********** DISPLAY GIF IF ALARM RINGING *************/

function displayGIF() {
	if (alarmRinging == true) {
		var alarmGIF = document.getElementById("alarmGIF");
		alarmGIF.src = "https://media.giphy.com/media/3ohze456U9AIzUbex2/giphy.gif";
	}
}

displayGIF();
setInterval(displayGIF, 1000);

/********** STOP ALARM *************/

function stopAlarm() { 
	sound.pause(); 
	isAlarmStopped = true;
} 
document.getElementById("stopAlarmButton").addEventListener("click", stopAlarm);


/********** COUNTDOWN *************/

