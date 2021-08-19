$(document).ready(function(){
  $('.burger').click(function(){
    $('.burger, .nav').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
