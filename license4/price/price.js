// $( function() {
//     $( ".accordion_card" ).accordion();
//   } );

 document.querySelectorAll('.accordion').forEach(function(elem){
        elem.querySelector('p').addEventListener('click',function(){  
            elem.classList.toggle('open')
        })
    })