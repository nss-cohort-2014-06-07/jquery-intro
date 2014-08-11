/* global $, document */

(function(){
  'use strict';

  var a = 3,
      b = 2;

  $(document).ready(initialize);

  function initialize(){
    $('div').css('color', 'red');
    $('h2').css('font-size', '50px');
    $('h2').text('Chyld');
    $('h2').fadeOut(2000);
    $('#a, #b, #c').addClass('happy');
    $('#c + ul > li').addClass('sad');
    console.log('the dom is now ready!');

    $('#red').click(makeRed);
    $('#yellow').click(makeYellow);
    $('#color').click(makeColor);
    $('#fadein').click(fadein);
    $('#fadeout').click(fadeout);
  }

  function fadein(){
    var num = $('#fade-number').val() * 1;
    $('footer').fadeIn(num);
  }

  function fadeout(){
    var num = $('#fade-number').val() * 1;
    $('footer').fadeOut(num);
  }

  function makeColor(){
    var color = $('#color-value').val();
    $('body').css('background-color', color);
    console.log('you clicked the color button');
  }

  function makeRed(){
    $('body').css('background-color', 'red');
    console.log('you clicked the red button');
  }

  function makeYellow(){
    $('body').css('background-color', 'yellow');
    console.log('you clicked the yellow button');
  }

  console.log('the dom is NOT ready');
  console.log(a, b);
})();

