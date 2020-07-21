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
    ),
    // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject({
      // Описание геометрии.
      geometry: {
        type: "Point",
        coordinates: [48.15266, 11.598704],
      },
      properties: {
        // Контент метки.
        iconContent: "Я",
        hintContent: "Hilton Munich Park",
      },
    });
  myMap.geoObjects.add(myGeoObject).add(
    new ymaps.Placemark(
      [48.15266, 11.598704],
      {},
      {
        preset: "islands#icon",
        iconColor: "#FF2400",
      }
    )
  );
}
