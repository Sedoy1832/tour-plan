$(document).ready(function () {
  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Укажите ваше имя",
          minlength: "Имя должно быть не короче 2 символов",
        },
        email: {
          required: "Введите вашу почту",
          email: "Формат почты name@domain.com",
        },
        phone: {
          required: "Телефон обязателен",
          minlength: "Телефон должен содержать 11 цифр",
        },
      },
    });
  });
  //подключение маски телефона
  $(".phone").mask("+7(000)000-00-00");
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
    // отключаем Scroll
    myMap.behaviors.disable("scrollZoom");
  }
  $(".newsletter").parallax({ imageSrc: "img/newsleter-bg.jpg" });

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
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom__visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  $(this).keydown(function (eventObject) {
    if (eventObject.which === 27)
      $(".modal__dialog").removeClass("modal__dialog--visible");
  });
  $(this).keydown(function (eventObject) {
    if (eventObject.which === 27)
      $(".modal__overlay").removeClass("modal__overlay--visible");
  });
});
