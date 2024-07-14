// array of image URLs
var images = ["/fullscreen/svg_img/grain-01.png", "/fullscreen/svg_img/grain-02.png", "/fullscreen/svg_img/grain-03.png", "/fullscreen/svg_img/grain-04.png", "/fullscreen/svg_img/grain-05.png", "/fullscreen/svg_img/grain-06.png", "/fullscreen/svg_img/grain-07.png", "/fullscreen/svg_img/grain-08.png"];

// starting index
var i = 0;

// set interval to change background image
setInterval(function() {
  // update index
  i = (i + 1) % images.length;
  
  // update div's background image
  $("#grain").css("background-image", "url(" + images[i] + ")");
}, 50);