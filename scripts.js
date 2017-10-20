$(document).ready(function(){
	$("ul.osx-dock li").each(function (type) {
		$(this).hover(function () {
			$(this).prev("li").addClass("nearby");
			$(this).next("li").addClass("nearby");
		},
			function () {
				$(this).prev("li").removeClass("nearby");
				$(this).next("li").removeClass("nearby");
			});
	});
});

$(document).ready(function(){
    $('#TextBoxId').keypress(function(e){
      if(e.keyCode==13)
      $('#search_submit').click();
    });
});

window.onkeydown = function (e) {
    if (!e) e = window.event;
    if (!e.metaKey) {
        if(e.keyCode >= 65 && event.keyCode <= 90 || e.keyCode >= 48 && event.keyCode <= 57) {
            $('#search').focus();
        }
    }
}
		
function get_url()
{
	return "https://google.com/search?q=" + document.getElementById("search").value.split(' ').join('+');
}

function get_primewire()
{
    return "http://www.primewire.ag/index.php?search_keywords=" + document.getElementById("primewireSearch").value.split(' ').join('+') + "&key=8d2666e16e24701a&search_section=2";
}

function clock() {// We create a new Date object and assign it to a variable called "time".
    var daysOfTheWeek = {
        0 : "Sunday",
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday",
        4 : "Thursday",
        5 : "Friday",
        6 : "Saturday"
    }

    var time = new Date(),
    
    // Access the "getHours" method on the Date object with the dot accessor.
    hours = time.getHours(),
    
    // Access the "getMinutes" method with the dot accessor.
    minutes = time.getMinutes(),
    
    
    seconds = time.getSeconds();

    document.querySelectorAll('.clock')[0].innerHTML = twelveHourTime(makeTwoDigits(hours)) + ":" + makeTwoDigits(minutes) + ":" + makeTwoDigits(seconds);
  
    function makeTwoDigits(standIn) {
        if (standIn < 10) {
            standIn = '0' + standIn
        }
        return standIn;
    }
    function twelveHourTime(input) {
        if (input > 12) {
            input = input - 12
        }
        return input;
    }
}
setInterval(clock, 1000);

function getDate()
{
    var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getUTCDate(),
    months = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    document.getElementById('daymonth').innerHTML = months[month] + " " + day + "th,";
    document.getElementById('year').innerHTML = year;
}
setInterval(getDate, 1000);
