var next, prev, cursor;

document.addEventListener('DOMContentLoaded', function(){
	var countday = new Date();
	var currentMonth = countday.getMonth();
	var currentYear = countday.getFullYear();
	var lastday = new Date();

	var todayDate=new Date();

	var weekday = [];
	weekday[0]=6;
	weekday[1]=0;
	weekday[2]=1;
	weekday[3]=2;
	weekday[4]=3;
	weekday[5]=4;
	weekday[6]=5;

	var monthayear = [];
	monthayear[0]="January";
	monthayear[1]="February";
	monthayear[2]="March";
	monthayear[3]="April";
	monthayear[4]="May";
	monthayear[5]="June";
	monthayear[6]="July";
	monthayear[7]="August";
	monthayear[8]="September";
	monthayear[9]="October";
	monthayear[10]="November";
	monthayear[11]="December";

	function generate(thisMonth, thisYear){
		var firstday = new Date(thisYear, thisMonth, 1);
		
		var count = weekday.length - (weekday.length - (weekday[firstday.getDay()]+1));
		if (count == 1 ) {
			lastday.setDate(firstday.getDate() - 8);
		}
		else{
			lastday.setDate(firstday.getDate() - count);
		}
		
		var month = document.getElementById("month");
		month.innerText = monthayear[thisMonth] + ", " + thisYear;

		var table = document.getElementById("main");
		var body = table.getElementsByTagName("tbody");
		for(var i = 0; i < 6; i++){
			var row = body[0].appendChild(document.createElement('tr'));
			row.id = "row"+i;
			for(var j = 0; j < weekday.length; j++){
				day = row.appendChild(document.createElement('td'));
					lastday.setDate(lastday.getDate() + 1);
					if (lastday.getMonth() != thisMonth) {
						day.setAttribute("class", "other");
					}
					if(lastday.getDate() === todayDate.getDate() && lastday.getMonth() === todayDate.getMonth() && lastday.getFullYear() === todayDate.getFullYear()){
						day.id = "today";
					}
					if(lastday.getDate() < 10){
						day.innerText = "0" + lastday.getDate();
					}
					else{
						day.innerText = lastday.getDate();
					}
			}
		}
	}

	generate(currentMonth, currentYear);

	function clear(){
		for(var i = 0; i < 6; i++){
			var row = document.getElementById("row" + i);
			row.remove();
		}
	}

	prev = function(){
		clear();

		lastday.setMonth(lastday.getMonth() - 2);
		countday.setDate(lastday.getDate());
		countday.setMonth(countday.getMonth() - 1);
		currentMonth = countday.getMonth();
		currentYear = countday.getFullYear();
		
		generate(currentMonth, currentYear);
	}
	next = function(){
		clear();

		countday.setDate(lastday.getDate());
		countday.setMonth(countday.getMonth() + 1);
		currentMonth = countday.getMonth();
		currentYear = countday.getFullYear();

		generate(currentMonth, currentYear);
	}
	cursor = function(){
		document.getElementById("cursor").style.left = window.event.clientX - 5;
		document.getElementById("cursor").style.top = window.event.clientY - 12;
	}
});