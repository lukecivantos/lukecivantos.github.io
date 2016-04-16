// Fades in the page
$(document).ready(function() {
   	$("#abtitle").css("display", "none");
	$("#form").css("display", "none");
	$("#email").css("display", "none");
	$("#abtitle").fadeIn(1500);
    $("#form").fadeIn(1500);
    $("#email").fadeIn(1500);
});

// Reloads the page
function backMain() {
	$("#abtitle").fadeOut(1000);
    $("#form").fadeOut(1000);
    $("#email").fadeOut(1000);
	window.setTimeout(function() {
		window.location.href = 'main2.html';
	}, 1000);
}