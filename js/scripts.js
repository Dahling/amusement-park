$(document).ready(function(){
  var height = parseInt(prompt("How tall are you in inches?"));

  if (height <= 53) {
    $('.too-short').show();
  } else if (height > 83) {
    $('.too-tall').show();
  } else  {
    debugger;
    $('.just-right').show();
  }
});
