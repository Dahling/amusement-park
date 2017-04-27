$(document).ready(function(){
  var height = parseInt(prompt("How tall are you in inches?"));

  if (height >= 53) {
    $('.just-right').show();
  }
  if else (height > 83) {
    $('.too-tall').show();
  }
  else  {
    $('too-short').show();
  }
});
