setInterval(getDateTime, 1000);

function dayToday(dayNum){
	dayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
	return dayArr[dayNum]	
}

function	monthToday(monthNum){
	monthArr = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
	return monthArr[monthNum];
}

function addZero(min){
	return min<10 ? `0${min}`: min;
}


function getDateTime(){
	const dateTime = new Date();
	let day, date, month, year, hour, minute;
	day = dayToday(dateTime.getDay());
	date = dateTime.getDate();
	month = monthToday(dateTime.getMonth());
	year = dateTime.getFullYear();
	hour = dateTime.getHours();
	minute = addZero(dateTime.getMinutes());
	
	document.querySelector(".text-container h3").innerHTML = `${day} ${date} ${month} ${year}`

document.querySelector(".text-container h1").innerHTML = `${hour}:${minute}`
}

