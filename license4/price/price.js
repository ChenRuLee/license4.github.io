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

// 由新
$('.dropdown_new').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown_new').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown_new .dropdown-menu li').click(function () {
  $(this).parents('.dropdown_new').find('p').text($(this).text());
  $(this).parents('.dropdown_new').find('input').attr('value', $(this).attr('id'));
});


// dropdown
$(document).ready(function(){
  $(".dropdown-item").click(function(){
    $("dropdown-item").toggleClass("check");
  });
});


// 保持打開
$(".dropdown-item").on("click",function (e) {
  e.stopPropagation();
})