$(document).ready(function () {
  document.querySelector("#map").addEventListener("mouseenter", () => {
    var d1 = document.getElementById("map");
    if ($("#map__google").length == 0) {
      d1.insertAdjacentHTML(
        "afterbegin",
        '<iframe id="map__google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6061410598268!2d79.84287911534405!3d6.937586094987594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25920c53a5e23%3A0x56efc3724db4f567!2sGrand%20Oriental%20Hotel!5e0!3m2!1sru!2sru!4v1596635378267!5m2!1sru!2sru"></iframe>'
      );
    }
  });

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
  // Подключения слайдера
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
  AOS.init();
});
