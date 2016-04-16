// Fades in the page
$(document).ready(function() {
   	$("#about").css("display", "none");
	$("#experience").css("display", "none");
	$("#projects").css("display", "none");
    $("#contact").css("display", "none");
	$("#about").fadeIn(1500);
    $("#experience").fadeIn(1500);
	$("#projects").fadeIn(1500);
	$("#contact").fadeIn(1500);
});

// Fades the buttons
function fadeMenu() {
	$("#about").fadeOut(1000);
   	$("#experience").fadeOut(1000);
	$("#projects").fadeOut(1000);
	$("#contact").fadeOut(1000);
};
// Creates the About Page
function touch(element) {

	if (element == "about") {
		fadeMenu();
		// redirect to about after 1 seconds
		window.setTimeout(function() {
	    	window.location.href = 'about.html';
		}, 1000);
	}
	else if (element == "experience") {
		fadeMenu();
		// redirect to about after 1 seconds
		window.setTimeout(function() {
	    	window.location.href = 'experience.html';
		}, 1000);
	}
	else if (element == "projects") {
		fadeMenu();
		
		// redirect to about after 1 seconds
		window.setTimeout(function() {
	    	window.location.href = 'projects.html';
		}, 1000);
	}
	else {
		fadeMenu();
		// redirect to about after 1 seconds
		window.setTimeout(function() {
	    	window.location.href = 'contact.html';
		}, 1000);
	}
	
};

// Reloads the page
function backMain() {
	window.location.href = "main2.html";
}