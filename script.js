$(document).ready(function() {

	console.log('script loaded!');

    $('.next-one').click(function(){
       $('.box-two').show();
       $('body').css('background-color', 'rgba(0,0,0,0.2)');

     });

     $('.next-two').click(function(){
       $('.box-three').show();
       $('body').css('background-color', 'rgba(0,0,0,0.3)');
    });

    $('.next-three').click(function(){
       $('.box-four').show();
       $('body').css('background-color', 'rgba(0,0,0,0.4)');
    });

     $('.next-four').click(function(){
       $('.box-five').show();
       $('body').css('background-color', 'rgba(0,0,0,0.5)');
    });

   $('.next-five').click(function(){
       $('.box-six').show();
       $('body').css('background-color', 'rgba(0,0,0,0.6)');
    });

    $('.next-six').click(function(){
       $('.box-seven').show();
       $('body').css('background-color', 'rgba(0,0,0,0.7)');
    });

    $('.next-seven').click(function(){
       $('.box-eight').show();
       $('body').css('background-color', 'rgba(0,0,0,0.8)');
    });

      $('.next-eight').click(function(){
       $('.box-nine').show();
       $('body').css('background-color', 'rgba(0,0,0,0.9)');
    });

        $('.next-nine').click(function(){
       $('.box-ten').show();
       $('body').css('background-color', 'rgb(166,16,30)');
    });
    // $('.box-two').click(function(){
    //     $('.box-two').hide();
    // });
    
    // $('.popupCloseButton').click(function(){
    //     $('.box-two').hide();
    // });
});