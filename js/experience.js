// Fades in the page
$(document).ready(function() {
   	$("#abtitle").css("display", "none");
	$("#abtitle").fadeIn(1500);
});

// Reloads the page
function backMain() {
	$("#abtitle").fadeOut(1000);
	window.setTimeout(function() {
		window.location.href = 'main2.html';
	}, 1000);
}