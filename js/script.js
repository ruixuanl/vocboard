$(document).ready(function() {
	
	$(document).keydown(function(e) {
    switch(e.which) {

        case 37: // left
        $("#ball").animate({left: "-=10px"}, 500);
        break;

        case 38: // up
        $("#ball").animate({top: "-=10px"}, 500);
        break;

        case 39: // right
        $("#ball").animate({left: "+=10px"}, 500);
        break;

        case 40: // down
        $("#ball").animate({top: "+=10px"}, 500);
        break;

        default: return; // exit this handler for other keys
    }
    
    e.preventDefault(); // prevent the default action (scroll / move caret)

});

});