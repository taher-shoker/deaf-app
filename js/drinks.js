var x = JSON.parse(localStorage.getItem("user"));
console.log(x)
if (x === null || x.length == 0) {
  window.location.replace('login.html')
}


/******************************************* */
var hotDrink = new Swiper ('.hot-drink', {
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

/*********************************************************** */
var coldDrink = new Swiper ('.cold-drink', {
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


var hotDrinks=[];
var coldDrinks=[];
var url = '../data/drinks.json';
fetch(url).then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
  hotDrinks= data.drinks.hotDrinks
  coldDrinks= data.drinks.coldDrinks

  /*************** Fetch hotDrinks && append it ************** */
hotDrinks.map(hot=>{
  
  hotDrink.appendSlide([' <div class="popup-img swiper-slide"><img src="./imgs/'+hot.drinkImage+'" class="img-drink  rounded-circle img-fluid" alt="..."><h4 class="card-title " data-toggle="modal" data-target="#ModalDrinks">'+ hot.drinkName+'</h4><div class="help-buttons"><div class="help-img"><img alt="" title="ترجم للغة الاشارة" src="imgs/signvideoicon.png" class="" data-toggle="modal" data-target="#video_popup" data-video="'+hot.videoDrink+'"></div><div class="help-icon"><i class="fas fa-volume-up pt-1 "></i></div></div></div>'])
 
})
/////////////////

/*************** Fetch ColdDrinks && append it ************** */
  coldDrinks.map(cold=>{
   
   coldDrink.appendSlide([' <div class="popup-img swiper-slide"><img src="./imgs/'+cold.drinkImage+'" class="img-drink  rounded-circle img-fluid" alt="..."><h4 class="card-title " data-toggle="modal" data-target="#ModalDrinks">'+ cold.drinkName+'</h4><div class="help-buttons"><div class="help-img"><img alt="" title="ترجم للغة الاشارة" src="imgs/signvideoicon.png" class="" data-toggle="modal" data-target="#video_popup" data-video="'+cold.videoDrink+'"></div><div class="help-icon"><i class="fas fa-volume-up pt-1 "></i></div></div></div>'])
  })


}
).catch(err => {
  // Do something for an error here
  console.log(err.message)
});



/********************************************** */

$('.swiper-wrapper').on('click','.card-title',function(e){
  var x = this.textContent;
  $(' #input-drink').val(x)
})



/**************************************** */

