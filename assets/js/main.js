const burgerMenu = document.getElementById("burgerMenu");
const mobileNav = document.getElementById("mobileNav");
const closeBtnNav = document.getElementById("closeBtnNav");
const overlay = document.getElementById("overlay");

function toggleNav(open) {
  mobileNav.style.right = open ? "0" : "-500px";
  overlay.classList.toggle("active", open);
}

if (burgerMenu && mobileNav && overlay) {
  burgerMenu.addEventListener("click", () => toggleNav(true));
  closeBtnNav?.addEventListener("click", () => toggleNav(false));
  overlay.addEventListener("click", () => toggleNav(false));
}

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.querySelector(".pop-up-container");
  const openBtns = document.querySelectorAll(".openPopup");
  const closeBtnPopup = document.getElementById("closeBtnPopup");

  if (!popup || !closeBtnPopup) return;

  const overlayPopup = document.createElement("div");
  overlayPopup.id = "overlayPopup";
  document.body.appendChild(overlayPopup);

  function closePopup() {
    popup.style.display = "none";
    overlayPopup.classList.remove("active");
    document.body.classList.remove("modal-open");
  }

  openBtns.forEach(btn =>
    btn.addEventListener("click", () => {
      popup.style.display = "block";
      overlayPopup.classList.add("active");
      document.body.classList.add("modal-open");
    })
  );

  closeBtnPopup.addEventListener("click", closePopup);
  overlayPopup.addEventListener("click", closePopup);
  document.addEventListener("keydown", (e) => e.key === "Escape" && closePopup());
});

function initializeSlickSlider(selector, slidesToShow = 3, slidesToScroll = 3, autoplay = true, arrows = false) {
  $(document).ready(function () {
    $(selector).slick({
      dots: false,
      infinite: true,
      autoplay: autoplay,
      speed: 1000,
      slidesToShow: slidesToShow,
      slidesToScroll: slidesToScroll,
      arrows: arrows,
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 3 } },
        { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
        { breakpoint: 800, settings: { slidesToShow: 2, slidesToScroll: 2 } },
        { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
      ]
    });
  });
}

initializeSlickSlider(".slider-container-certificate");
initializeSlickSlider(".slider-container");
initializeSlickSlider(".project-img", 1, 1, false, true);

$(document).ready(function () {
  $("#next, #prev").click(function () {
    const direction = $(this).attr("id") === "next" ? "slickNext" : "slickPrev";
    $(".slider-container, .slider-container-certificate").slick(direction);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn-list");
  const cards = document.querySelectorAll(".custom-card");

  function setActiveButton(activeButton) {
    buttons.forEach(btn => btn.classList.remove("active"));
    activeButton.classList.add("active");
  }

  function filterCards(showStatus) {
    cards.forEach(card => {
      const hasStatus = card.querySelector(".status-label") !== null;
      if (showStatus === null) {
        card.style.display = "block"; 
      } else if (showStatus) {
        card.style.display = hasStatus ? "block" : "none"; 
      } else {
        card.style.display = hasStatus ? "none" : "block"; 
      }
    });
  }

  buttons[0].addEventListener("click", function () {
    setActiveButton(this);
    filterCards(null); 
  });

  buttons[1].addEventListener("click", function () {
    setActiveButton(this);
    filterCards(true); 
  });

  buttons[2].addEventListener("click", function () {
    setActiveButton(this);
    filterCards(false); 
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.getElementById("closeBtn");

  document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("certificate-img")) {
      modal.classList.remove("hidden");
      modalImg.src = e.target.src;
    }
    if (e.target === modal || e.target === closeBtn) {
      modal.classList.add("hidden");
    }
  });
});


// const prev = document.getElementById("prev");
// const next = document.getElementById("next");
// const product = document.querySelector('.slider-card');
// const slider = document.querySelector('.slider-container');

// if (next && product && slider) {
//     next.addEventListener('click', () => {
//         slider.scrollLeft += product.offsetWidth + 40;
//     });
// }
// if (prev) {
//   prev.addEventListener('click', () => {
//       slider.scrollLeft -= product.offsetWidth + 40;
//   });
// }
// const left = document.getElementById("left");
// const right = document.getElementById("right");
// const infocard = document.querySelector('.slider-card-info');
// const sliderinfo = document.querySelector('.slider-container-info');

// if (right && infocard && sliderinfo) {
//     right.addEventListener('click', () => {
//       sliderinfo.scrollLeft += infocard.offsetWidth + 40;
//     });
// }
// if (left) {
//   left.addEventListener('click', () => {
//     sliderinfo.scrollLeft -= infocard.offsetWidth + 40;
//   });
// }

    // $(".prev-btn").click(function() {
    //   $('.sponsors-slider').slick("slickPrev");
    // });
  
    // $(".next-btn").click(function() {
    //   $('.sponsors-slider').slick("slickNext");
    // });
  
    // $(".prev-btn").addClass("slick-disabled");
  
    // $(".sponsors-slider").on("afterChange", function() {
    //   if ($(".slick-prev").hasClass("slick-disabled")) {
    //     $(".prev-btn").addClass("slick-disabled");
    //   } else {
    //     $(".prev-btn").removeClass("slick-disabled");
    //   }
    //   if ($(".slick-next").hasClass("slick-disabled")) {
    //     $(".next-btn").addClass("slick-disabled");
    //   } else {
    //     $(".next-btn").removeClass("slick-disabled");
    //   }
    // });

  // const backToTop = document.querySelector('.back-to-top');
  // if (backToTop) {
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY > 100) {
  //       backToTop.style.display = 'flex';
  //     } else {
  //       backToTop.style.display = 'none';
  //     }
  //   });
  // }

  