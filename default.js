jQuery(function($) {



  var owl = $('.owl-carousel')
  owl.owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    responsive:{
        600:{
            items:2.2
        }
    }
  });

  $('.owl-dots .owl-dot').click(function () {
    $('.owl-carousel .owl-stage').css({ transform: 'translate(' + coordinate + 'px' + ',0px)' })
    // $('.owl-carousel .owl-stage').css({width: 300+'px'})
    console.log($(this).index()+1)


  })


});
