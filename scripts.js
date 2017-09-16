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
		
function get_url()
{
	return "https://google.com/search?q=" + document.getElementById("search").value.split(' ').join('+');
}

function get_primewire()
{
    return "http://www.primewire.ag/index.php?search_keywords=" + document.getElementById("primewireSearch").value.split(' ').join('+') + "&key=8d2666e16e24701a&search_section=2";
}
