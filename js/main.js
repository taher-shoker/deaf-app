
/*************************Script for images popup modal ***************************** */
$(function() {
    $('.popup-img').on('dblclick', function() {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');   
    });		
});