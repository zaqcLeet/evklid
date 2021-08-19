document.addEventListener('DOMContentLoaded', function(){
  const swiper = new Swiper('.swiper-container', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    autoplay: {
      delay: 5000,
    },
  });
})
