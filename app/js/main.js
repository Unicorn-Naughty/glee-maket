$(function () {
  $('.product-details__related-items').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-next.svg" alt=""></button>',
    autoplay:true,
    speed: 2500
  });




  $('.tabs-top__item').on('click', function (e) {
    e.preventDefault();

    $('.tabs-top__item').removeClass('tabs-top__item--active');
    $(this).addClass('tabs-top__item--active');

    $('.tabs-content__item').removeClass('tabs-content__item--active');
    $($(this).attr('href')).addClass('tabs-content__item--active');

  });


  $('.product-details__input').styler();





  $('.product-details__thumb').slick({
    asNavFor: '.product-details__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.product-details__big').slick({
    asNavFor: '.product-details__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });





  $('.products-list__star').rateYo({
    starWidth: "20px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    halfStar: true,
    numStars: 5,
    spacing: "10px"
  });








  $(".filter-price__input").ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });
  $('.filter-recent__star').rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    halfStar: true,
    numStars: 5,
    spacing: "7px"
  });





  $('.top-slider__items').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true
  });








  var productsweek = document.querySelector('[data-ref="container-1"]');
  var newdesign = document.querySelector('[data-ref="container-2"]');
  var config = {
    controls: {
      scope: 'local'
    }
  };
  var mixer1 = mixitup(productsweek, config);
  var mixer2 = mixitup(newdesign, config);

});