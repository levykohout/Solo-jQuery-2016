$(document).ready(function(){

  var redCounter=0;
  var yellowCounter =0;
  var greenCounter=0;
  var blueCounter=0;

$('.color-button').on('click', createBox);


function createBox(){
console.log('try to create a box');
//create box
  var $box = $('<div></div>');

// add class
  $box.addClass('color-cube');
  $('.container').append($box);

  //check
    var $color =$(this).data('color');
      console.log($color);

  if ($color == 'red'){
    $box.css('background-color','red');
    redCounter++;
    $('#red').find('span').remove();
    $('#red').append('<span>'+ redCounter +'</span>');

  } else if ($color == 'yellow'){
      $box.css('background-color','yellow');
      yellowCounter++;
      $('#yellow').find('span').remove();
      $('#yellow').append('<span>'+ yellowCounter +'</span>');

  } else if ($color == 'green'){
        $box.css('background-color','green');
        greenCounter++;
        $('#green').find('span').remove();
        $('#green').append('<span>'+ greenCounter +'</span>');

  } else if ($color == 'blue'){
          $box.css('background-color','blue');
          blueCounter++;
          $('#blue').find('span').remove();
          $('#blue').append('<span>'+ blueCounter +'</span>');

          }

}








});
