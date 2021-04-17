jQuery(function($) {



  var owl = $('.owl-carousel')

  var fixOwl = function (event) {
    $('.owl-carousel .owl-item').css({ width: 920 + 'px' })
    var len = $('.owl-carousel .owl-item').length
    $('.owl-carousel .owl-stage').css({ width: (920 * len) + 'px' })
    var Wid_res = ($(window).width()-920) / 2;
    var current = $('.owl-carousel').find('.center').index();

    owl.find('.owl-stage').css({ "transform": "translate3d(" + ((-920*current) + Wid_res) + "px, 0px ,0px)" })
    console.log((-920*current) + Wid_res)
  }

  owl.on('initialized.owl.carousel', function(event) {
    fixOwl()
  })

  owl.owlCarousel({
    center: true,
    loop:true,
    responsive:{
      1220:{
          items:1.72
      }
  }
  });

  owl.on('resized.owl.carousel refreshed.owl.carousel', function(event) {
    $('.owl-carousel .owl-item').css({ width: 920 + 'px' })
    var len = $('.owl-carousel .owl-item').length
    $('.owl-carousel .owl-stage').css({ width: (920 * len) + 'px' })
    var Wid_res = ($(window).width()-920) / 2;
    var current = $('.owl-carousel').find('.center').index();
    var respon = (-920*current) + Wid_res;
    owl.find('.owl-stage').css('transform', 'translate3d('+((-920*current) + Wid_res)+'px, 0px,0px)');
    console.log(respon)
  })


  $('.owl-dots .owl-dot').click(function () {
    var coordinate = 1000;
    owl.find('.owl-stage').css('transform', 'translate3d('+coordinate+'px, 0px,0px)');
    // $('.owl-carousel .owl-stage').css({width: 300+'px'})
    console.log($(this).index()+1)


  })


});
