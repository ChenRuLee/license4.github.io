// logo


// card
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});


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
var ViewModel = function() {
  var self = this;
  
  self.countries = [
    { name: "由新到舊", states: ["由新到舊", "由舊到新"] },
    { name: "由舊到新", states: [] },
    // etc
  ];
  
  self.selectedCountry = ko.observable();
  self.selectedState = ko.observable();  
  
  self.availableStates = ko.computed(function() {
    if (!!self.selectedCountry()) {
      return self.selectedCountry().states;
    }
    return [];
  });
  
  self.selectedCountryHasStates = ko.computed(function() {
    return self.availableStates().length > 0;
  });
};

ko.applyBindings(new ViewModel());