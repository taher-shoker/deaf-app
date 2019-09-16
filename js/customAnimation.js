/*============= script for animation on scroll=============== */

wow = new WOW( {
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       100
    }
);

wow.init();

/*==================== script for custom nice scroll=========================== */
$("body").niceScroll({
    cursorcolor: "#0394c9", // change cursor color in hex
    cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
    cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
    cursorwidth: "5px", // cursor width in pixel (you can also write "5px")
    cursorborder: "none",
  
    dblclickzoom: true
    
  });
  
/*=================== script to show & hide scroll button ========================== */
$(function () {
	var scrollButton =$(".Scroll-up");
	$(window).scroll(function(){
		
		 if($(this).scrollTop()>=500)
		 {
				 scrollButton.show();
		 }
			else
			{
					scrollButton.hide();
			}
	});
scrollButton.click(function(){
$("html,body").animate({scrollTop:0},3000);
});
});