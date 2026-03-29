window.addEventListener("load", () => {
  if (typeof Swiper !== "function") {
    return;
  }

  if (document.querySelector(".territories-swiper")) {
    new Swiper(".territories-swiper", {
      speed: 400,
      spaceBetween: 1,
      slidesPerView: 3,
      loop: true,
      observer: true,
      observeParents: true,
      watchOverflow: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      },
    });
  }

  document.querySelectorAll(".excursions-gallery-swiper").forEach((sliderElement, index) => {
    const sliderClassName = `excursions-gallery-swiper-${index + 1}`;
    sliderElement.classList.add(sliderClassName);

    new Swiper(`.${sliderClassName}`, {
      speed: 500,
      spaceBetween: 18,
      slidesPerView: 4,
      loop: true,
      observer: true,
      observeParents: true,
      watchOverflow: true,
      grabCursor: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: sliderElement.querySelector(".gallery-swiper-button-next"),
        prevEl: sliderElement.querySelector(".gallery-swiper-button-prev"),
      },
      pagination: {
        el: sliderElement.querySelector(".gallery-swiper-pagination"),
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
      },
    });
  });
});
