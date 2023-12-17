$(function () {
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
    starWidth: "11px" ,
    normalFill: "#d6d6d6",
    ratedFill:"#ffcc00",
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