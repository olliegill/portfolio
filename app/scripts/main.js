$(document).ready(function(){
  var mouseX, mouseY;
  var ww = $( window ).width();
  var wh = $( window ).height();
  var traX, traY;
  $(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 570) + 40;
    traY = ((4 * mouseY) / 570) + 50;
    //console.log(traX);
    $(".title").css({"background-position": traX + "%" + traY + "%"});
  });

  $(".nav-bar").sticky({ topSpacing: 0 });
});


var $dts = $('dt');
$dts.on('click', function(){
  $(this).toggleClass('open');
  $(this).parent('section').toggleClass('expanded');
});
