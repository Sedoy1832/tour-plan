var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
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
