// JavaScript Document

/****initialize main screen****/
/***in intialization we load the JSON and draw the screen for the main services***/

var hh;
function ChecSetting()
{
	clearTimeout(hh);
	$(".wrapperpage").fadeOut(4000,function(){
			window.location.replace("wellcome.html");
		});
}

$(document).ready(function(e) {
   
	
	$(".wrapperpage").fadeIn(4000,function(){
		hh=setTimeout( "ChecSetting()",3000);
	});
	
	$(".wrapperpage").click(function(e) {
		$(".wrapperpage").fadeOut(4000,function(){
			
		});
	});

});/*****end doc ready***/