$(document).ready(function() {
	
	$(document).keydown(function(e) {
    switch(e.which) {

        case 37: // left
        $("#square").animate({left: "-=200px"}, 500);
        break;

        case 38: // up
        $("#square").animate({top: "-=200px"}, 500);
        break;

        case 39: // right
        $("#square").animate({left: "+=200px"}, 500);
        break;

        case 40: // down
        $("#square").animate({top: "+=200px"}, 500);
        break;

        default: return; // exit this handler for other keys
    }
    
    e.preventDefault(); // prevent the default action (scroll / move caret)

});

});