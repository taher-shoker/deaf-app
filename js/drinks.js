var x = JSON.parse(localStorage.getItem("user"));
console.log(x)
if (x === null || x.length == 0) {
  window.location.replace('login.html')
}




var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  
  })


$(document).ready(function(){

    function getvalue() {
        $('.card-title').click(function () {
           
            var x = this.textContent;
          
           $(document).on("click", ".card-title", function () {
            $('#input-drink').val( x );
       });
        })
    }
    getvalue()
  
 
});


