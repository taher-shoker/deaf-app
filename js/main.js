
	/***show sign video for any sign icon in any screen with the tag signvideo_btn ***/
$(function() {
    $('.popup-img').on('dblclick', function() {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');   
    });		
});