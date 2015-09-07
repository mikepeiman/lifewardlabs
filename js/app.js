// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
//$(document).foundation();

//$('.off-canvas-wrap').foundation('offcanvas', 'toggle', 'move-right');
//$(document).foundation({
//  offcanvas : {
    // Sets method in which offcanvas opens.
    // [ move | overlap_single | overlap ]
//    open_method: 'move', 
    // Should the menu close when a menu link is clicked?
    // [ true | false ]
//    close_on_click : true
//  }
//});
//$(document).on('open.fndtn.offcanvas', '[data-offcanvas]', function () {
// var off_canvas_wrap = $(this);
//});

//$(document).on('close.fndtn.offcanvas', '[data-offcanvas]', function () {
//  var off_canvas_wrap = $(this);
//});

$(document).foundation();
$(".off-canvas-submenu").hide();
$(".off-canvas-submenu-call").click(function() {
	var icon = $(this).parent().next(".off-canvas-submenu").is(':visible') ? '+' : '-';
	$(this).parent().next(".off-canvas-submenu").slideToggle('fast');
	$(this).find("span").text(icon);
});

function changeText(idElement) {
    var element = document.getElementById('element' + idElement);
    if (idElement === 1 || idElement === 2) {
        if (element.innerHTML === 'Contact Us') element.innerHTML = 'Close Form';
        else {
            element.innerHTML = 'Contact Us';
        }
    }
}
function setFocusToTextBox(){
    document.getElementById("input-name").focus();
}

//script to alter any css class directly with JS

   $(document).ready(function(){
        $('.text_container').click(function() {
            $('.text_container').css("display", "none");

            $('.text_container').css("color", "red");
        });
    });