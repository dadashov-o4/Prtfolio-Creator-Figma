// swipper js codes 


// code with cards
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }
  });

//code with introduvtion 
var swiper = new Swiper(".myintroswiper", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
  });

//   jquery js 

//   $('.introduction').slick();