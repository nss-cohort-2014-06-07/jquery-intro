/* global $, document */

(function(){
  'use strict';

  $(document).ready(function(){
    $('#add-boxes').click(addBoxes);
  });

  function addBoxes(){
    var num = $('#box-num').val() * 1,
        $box,
        i,
        val,
        klass;

    $('#boxes').empty();
    for(i = 0; i < num; i++){
      $box = $('<div>');

      val   = (i % 2) ? i * i * i : i * i;
      klass = (i % 2) ? 'odd' : 'even';

      $box.text(val);
      $box.addClass(klass).addClass('box');
      $('#boxes').append($box);
    }
  }

})();

