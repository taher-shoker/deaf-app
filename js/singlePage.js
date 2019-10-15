var courseId = sessionStorage.getItem('courseID') - 1;


/*************script for two ways control swiper *************** */
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   
   
  });
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 4,
    touchRatio: 0.2,
    slideToClickedSlide: true,
   
    
  });
 

  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;

 



var courses = [];
var url = '../data/courses.json';
fetch(url).then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
courses= data.courses
console.log(courses[courseId].titleCourse)
$('#main-title').html(courses[courseId].titleCourse)
 
courses[courseId].lesions.map(lesson=>{
   
   galleryTop.appendSlide(' <div class="swiper-slide"><div class=""><div class="row mt-4 justify-content-bettween"><div class="popup-img col-sm-12 col-md-5"><img class="img-fluid img-thumbnail " src="./imgs/'+ lesson.imageLesion+'" alt="" width="150" height="50"></div><div class="col-sm-12 col-md-5"><address>'+lesson.titleLesion+'</address><p class="text">'+lesson.textLesion+'</p> <div class="help-buttons"><div class="help-img"><img alt="" title="ترجم للغة الاشارة" src="imgs/signvideoicon.png" class="" data-toggle="modal" data-target="#video_popup" data-video=""></div><div class="help-icon"><i class="fas fa-volume-up pt-1 "></i></div></div></div></div></div></div>')
  
  /////////////////////////
  
  galleryThumbs.appendSlide('<div class="swiper-slide"><div class="swiper-slide-container"><img src="./imgs/'+ lesson.imageLesion+'" img class="img-fluid rounded " alt=""></div></div>');
  
})
}).catch(err => {
  // Do something for an error here
  console.log(err.message)
})



