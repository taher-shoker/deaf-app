
	/***show sign video for any sign icon in any screen with the tag signvideo_btn ***/
$(function() {
    $('.popup-img').on('dblclick', function() {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');   
    });		
});



/***************************************************************** */

$(document).on("click", ".help-img img", function () {
   
    var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-video"),
        videoSRCauto ="./videos/help/"+ videoSRC + "";
    $(theModal + ' source').attr('src', videoSRCauto);
    $(theModal + ' video').load();
    $(theModal + ' button.close').click(function () {
      $(theModal + ' source').attr('src', videoSRC);
    });
  });
