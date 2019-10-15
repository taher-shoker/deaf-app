
var url = '../data/courses.json';
fetch(url).then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
courses= data.courses


courses.map(cor=>{
   
  $('#courses').append('<div class="popup-img card col-sm-12 col-md-6 col-lg-4"><img src="./imgs/'+cor.imageCourse+'" alt="image"class=" rounded-circle WOW   topic-img  animated zoomIn img-fluid"><div class="card-body"><h5 class="card-title"><a id="title" href="singlePage.html"  data-info='+cor.id+'>'+cor.titleCourse+'</a> </h5><div class="help-buttons"><div class="help-img"><img alt="" title="ترجم للغة الاشارة" src="imgs/signvideoicon.png" class=""data-toggle="modal" data-target="#video_popup" data-video="'+cor.videoCourse+'"></div><div class="help-icon"><i class="fas fa-volume-up pt-1 "></i></div></div> </div></div>')
})
}
).catch(err => {
  // Do something for an error here
  console.log(err.message)
})

///////////
/**************************************** */
$('#courses').on('click','#title',function(){
 var  x = $(this).data('info')
sessionStorage.setItem('courseID',x)
 
})