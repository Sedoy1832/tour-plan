var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [48.15266, 11.598704],
      zoom: 15,
    },
    {
      searchControlProvider: "yandex#search",
    }
  );

  myPlacemark1 = new ymaps.Placemark(
    [48.15266, 11.598704],
    {
      // Свойства.
      // Содержимое иконки, балуна и хинта.
      iconContent: "Я",
      balloonContent: "Hilton Munich Park",
      hintContent: "Hilton Munich Park",
    },
    {
      // Опции.
      // Стандартная фиолетовая иконка.
      preset: "twirl#redIcon",
    }
  );
  // Добавляем все метки на карту.
  myMap.geoObjects.add(myPlacemark1);
}
$(".newsletter").parallax({ imageSrc: "/img/newsleter-bg.jpg" });

var responseSlider = new Swiper(".response-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".response-slider__button--next",
    prevEl: ".response-slider__button--prev",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
