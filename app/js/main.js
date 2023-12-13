$(function () {
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