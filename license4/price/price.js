// $( function() {
//     $( ".accordion_card" ).accordion();
//   } );

 document.querySelectorAll('.accordion').forEach(function(elem){
        elem.querySelector('p').addEventListener('click',function(){  
            elem.classList.toggle('open')
        })
    })

// back to top
var btn = $('.footer_button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});