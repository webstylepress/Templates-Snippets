$(document).ready(function(){
  console.log("DOM is ready...");
});

$(window).resize(function(){
  console.log("Window resized...");
});

$(window).on("load", function() {
  console.log("Content loaded...");
});

$(window).scroll(function(){
  console.log("window scrolled");
});

$(document).scroll(function(){
  console.log("Document scrolled...");
});

