// sticky header
let ts = jQuery('.panIndiaBar').outerHeight();

if (jQuery(window).scrollTop() > ts) {
  jQuery('.wraperHeader,.panIndiaBar').addClass('stickyHead');
} else {
  jQuery('.wraperHeader,.panIndiaBar').removeClass('stickyHead');
}
jQuery(window).scroll(function () {
  let ts = jQuery('.panIndiaBar').outerHeight();

  if (jQuery(window).scrollTop() > ts) {
    jQuery('.wraperHeader,.panIndiaBar').addClass('stickyHead');

  } else {
    jQuery('.wraperHeader,.panIndiaBar').removeClass('stickyHead');
  }
})
var lastScrollTop = 0;
jQuery(window).scroll(function (event) {
  var st = jQuery(this).scrollTop();
  if (st > lastScrollTop) {
    
    jQuery('.wraperHeader,.main-sec').addClass('goDown');
    jQuery('.wraperHeader,.main-sec').removeClass('goUp');
  } else {
    
    jQuery('.wraperHeader,.main-sec').removeClass('goDown');
    jQuery('.wraperHeader,.main-sec').addClass('goUp');
  }
  lastScrollTop = st;
});
// Typed js 

if ($('.auto-type').length > 0) {
  let typed = new Typed(".auto-type", {
    strings: ["pots.", "soils.", "tools."],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
  })
}

//home slider
var homeBannerSwiper = new Swiper(".homeBannerSwiper", {
  allowTouchMove: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".homeBanner .swiper-pagination",
    clickable: true,
  },
});
var hometextSwiper = new Swiper(".bannerTextSlide", {
  allowTouchMove: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".homeBanner .swiper-pagination",
    clickable: true,
  },
  thumbs: {
    swiper: homeBannerSwiper,
  },
});
// This-week-products slider
var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 2,
  spaceBetween: 5,
  navigation: {
    nextEl: ".slide-3 .swiper-button-next",
    prevEl: ".slide-3 .swiper-button-prev",
  },
  breakpoints: {
    426: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    }
  }
});
var swiper3 = new Swiper(".mySwiper4", {
  slidesPerView: 2,
  spaceBetween: 5,
  navigation: {
    nextEl: ".slide-4 .swiper-button-next",
    prevEl: ".slide-4 .swiper-button-prev",
  },
  breakpoints: {
    426: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    }
  }
});
//Popular Preloved Picks slider
var swiper3 = new Swiper(".mySwiper5", {
  
  slidesPerView: 2,
  spaceBetween: 5,
  navigation: {
    nextEl: ".slide-5 .swiper-button-next",
    prevEl: ".slide-5 .swiper-button-prev",
  },
  breakpoints: {
    426: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    }
  }
});
var swiper3 = new Swiper(".mySwiper6", {
  
  slidesPerView: 2,
  spaceBetween: 5,
  navigation: {
    nextEl: ".slide-6 .swiper-button-next",
    prevEl: ".slide-6 .swiper-button-prev",
  },
  breakpoints: {
    426: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    }
  }
});
let testiSlider = new Swiper(".testiSlider", {
  allowTouchMove: true,
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoHeight: false,
  navigation: {
    nextEl: ".testominialMain .swiper-button-next",
    prevEl: ".testominialMain .swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 26,
    },
  }
});

if ($('.video-popup').length > 0) {
  document.addEventListener('mousemove', (event) => {
    const magnet = document.querySelector('.magnet');
    const magnetRect = magnet.getBoundingClientRect();

    const magnetX = magnetRect.left + magnetRect.width / 2;
    const magnetY = magnetRect.top + magnetRect.height / 2;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const dx = mouseX - magnetX;
    const dy = mouseY - magnetY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const attractionDistance = 250; 

  
    const scale = Math.max(0, Math.min(1, (attractionDistance - distance) / attractionDistance));

    
    const moveX = dx * scale;
    const moveY = dy * scale;

    
    if (distance < attractionDistance) {
      magnet.style.transform = `translate(${moveX}px, ${moveY}px)`;
    } else {
      magnet.style.transform = 'translate(0, 0)';
    }
  });
}

var swiper = new Swiper(".tribSlider", {
  allowTouchMove: true,
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".tribSecMain .swiper-button-next",
    prevEl: ".tribSecMain .swiper-button-prev",
  },
  breakpoints: {
    479: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    575: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 18,
    },
    1300: {
      slidesPerView: 5,
      spaceBetween: 18,
    },
  }
});

jQuery('.footer-menu-block .headingText').on('click', function () {
  if (jQuery(this).closest('.footer-content-block').hasClass('open-footer-menu')) {
    jQuery(this).closest('.footer-content-block').removeClass('open-footer-menu');
    jQuery('.footer-content-block .menu').slideUp();
    jQuery('.footer-content-block').removeClass('open-footer-menu');
    jQuery(this).next('.menu').slideUp();
    // jQuery('body').removeClass('lockScroll');
  } else {
    jQuery('.footer-content-block .menu').slideUp();
    jQuery('.footer-content-block').removeClass('open-footer-menu');
    jQuery(this).closest('.footer-content-block').addClass('open-footer-menu');
    jQuery(this).next('.menu').slideDown();
  }
});



$('nav .submenu').each(function () {
  $(this).before('<em class="fa-solid fa-angle-down mtoggle"></em>')
});
$('.menu-bar').click(function () {
  $('.headerBottom').addClass('show');
  $('.bodyoverlay').fadeIn(0);
  return false;
});
$('.menuclose,.bodyoverlay').click(function () {
  $('.headerBottom').removeClass('show');
  $('.bodyoverlay').fadeOut(0);
  return false;
});
$('.mtoggle').click(function () {
  $(this).toggleClass('active');
  $(this).next('.submenu').slideToggle(200);
})
$('.searchTogg').click(function () {
  $('.searchBox').fadeIn(100);
  return false;
})
$('.srchClose').click(function () {
  $('.searchBox').fadeOut(100);
  return false;
})

// Login-form


function showEmail() {
  document.getElementById('loginInput').placeholder = 'Enter your email';

  document.getElementById('emailTab').classList.add('active-tab');
  document.getElementById('phoneTab').classList.remove('active-tab');
}

function showPhone() {
  document.getElementById('loginInput').placeholder = 'Enter your phone number';

  document.getElementById('phoneTab').classList.add('active-tab');
  document.getElementById('emailTab').classList.remove('active-tab');
}

// Login-form close

//shopping cart

$('.cartlink').click(function () {
  $('.cart-main').addClass('show');
  $('.bodyoverlay').fadeIn(0);
  return false;
});
$('.close-btn,.bodyoverlay').click(function () {
  $('.cart-main').removeClass('show');
  $('.bodyoverlay').fadeOut(0);
  return false;
});


//search box close
document.getElementById('searchBox-parent').addEventListener('click', function() {

  this.style.display = 'none';
});

document.getElementById('searchBox-child').addEventListener('click', function(event) {

  event.stopPropagation();
});


let resizeTimeout;

window.addEventListener('resize', () => {
  document.body.classList.add('disable-transitions');

  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    document.body.classList.remove('disable-transitions');
  }, 300);
});


Fancybox.bind("[data-fancybox]", {});
AOS.init();
