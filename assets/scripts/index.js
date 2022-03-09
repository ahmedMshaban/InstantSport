function mobileMenuHanlder() {
  let mainMenuContainer = document.querySelector(".is-mobile-menu");
  if (mainMenuContainer.className === "is-mobile-menu") {
    mainMenuContainer.className += " responsive";
  } else {
    mainMenuContainer.className = "is-mobile-menu";
  }
}

function searchMobileHanlder() {
  let mainMenuContainer = document.querySelector(".is-desktop-menu");
  if (mainMenuContainer.className === "is-main-header-wrap is-desktop-menu") {
    mainMenuContainer.className += " responsive";
  } else {
    mainMenuContainer.className = "is-main-header-wrap is-desktop-menu";
  }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  if (slides.length > 0) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }
}
