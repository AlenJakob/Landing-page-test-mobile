$(".home").click(function() {
 
    $('html,body').animate({
        scrollTop: $(".one").offset().top},
        'fast');
});

///////////////////////////

$(".about").click(function() {
 
    $('html,body').animate({
        scrollTop: $(".two").offset().top},
        'slow');
});

///////////////////////////

$(".test").click(function() {
 
    $('html,body').animate({
        scrollTop: $(".three").offset().top},
        'slow');
});

///////////////////////////

$(".projects").click(function() {
 
    $('html,body').animate({
        scrollTop: $(".four").offset().top},
        'slow');
});

///////////////////////////

$(".contact").click(function() {
 
    $('html,body').animate({
        scrollTop: $(".five").offset().top},
        'slow');
});

///////////////////////////
///////////////////////////

$(".arrow").click(function() {
 
    $('html,body').animate({
        scrollTop: $(".one").offset().top},
        'slow');
});

///////////////////////////

$(window).scroll(function() {    

var ul = document.querySelector("ul")
		var me = document.querySelector("nav")
    var arrow = document.querySelector(".arrow")
    var scroll = $(window).scrollTop();
  var box = document.querySelector(".boxa");
  var logo =document.querySelector(".logo");
    if (scroll >= 50) {
      logo.classList.add("dog-move")
      box.classList.add("see")
        ul.classList.add("move")
        me.classList.add("move")
    }else if( (scroll >= 0)){
    me.classList.remove("move")
       ul.classList.remove("move")
      box.classList.remove("see")
      logo.classList.remove("dog-move")
    }
});


///////       /////      ////
var box = document.querySelector(".boxa");
var menu = document.querySelector("nav");
box.onclick = function() {
  box.classList.toggle("rotate")
  menu.classList.toggle("show")
  ul.classList.toggle("move")
}

//  Menu toggle ///
