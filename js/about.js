// Fades in the page
$(document).ready(function() {
   	$("#abtitle").css("display", "none");
	$("#pic").css("display", "none");
	$("#bio").css("display", "none");
	$("#abtitle").fadeIn(1500);
    $("#pic").fadeIn(1500);
    $("#bio").fadeIn(1500);
});

// Reloads the page
function backMain() {
	$("#abtitle").fadeOut(1000);
    $("#pic").fadeOut(1000);
    $("#bio").fadeOut(1000);
	window.setTimeout(function() {
		window.location.href = 'main2.html';
	}, 1000);
}