const burgerMenu = document.getElementById('burgerMenu');
const mobileNav = document.getElementById('mobileNav');
const closeBtnNav = document.getElementById('closeBtnNav'); 
const overlay = document.getElementById('overlay');

if (burgerMenu) {
  burgerMenu.addEventListener('click', function() {
    mobileNav.style.right = "0";
    overlay.classList.add('active');
  });
}

if (closeBtnNav) {
  closeBtnNav.addEventListener('click', function() {
    mobileNav.style.right = "-500px";
    overlay.classList.remove('active');
  });
}

if (overlay) {
  overlay.addEventListener('click', function() {
    mobileNav.style.right = "-500px";
    overlay.classList.remove('active');
  });
}




document.addEventListener("DOMContentLoaded", function () {
  const popup = document.querySelector(".pop-up-container");
  const openBtns = document.querySelectorAll(".openPopup");
  const closeBtnPopup = document.getElementById("closeBtnPopup");
  const overlayPopup = document.createElement("div");

  overlayPopup.id = "overlayPopup";
  document.body.appendChild(overlayPopup);

  if (popup && closeBtnPopup) {
 
      openBtns.forEach(btn => {
          btn.addEventListener("click", () => {
              popup.style.display = "block";
              overlayPopup.classList.add("active");
              document.body.classList.add("modal-open");
          });
      });

      closeBtnPopup.addEventListener("click", closePopup);
      overlayPopup.addEventListener("click", closePopup);

      document.addEventListener("keydown", function(event) {
          if (event.key === "Escape") {
              closePopup();
          }
      });

      function closePopup() {
          popup.style.display = "none";
          overlayPopup.classList.remove("active");
          document.body.classList.remove("modal-open");
      }
  }
});



$(document).ready(function() {
  var $slider = $('.slider-container-certificate').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#next').click(function() {
  $slider.slick('slickNext');
});

$('#prev').click(function() {
  $slider.slick('slickPrev');
});
});



$(document).ready(function() {
  var $slider = $('.slider-container').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#next').click(function() {
    $slider.slick('slickNext');
  });

  $('#prev').click(function() {
    $slider.slick('slickPrev');
  });
});
  

  $(document).ready(function() {
    var $slider = $('.slider-container-project').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      rows: 2,
      arrows: false, 
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            rows: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
          }
        }
      ]
    });
  
    $('#next').click(function() {
      $slider.slick('slickNext');
    });
  
    $('#prev').click(function() {
      $slider.slick('slickPrev');
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

  