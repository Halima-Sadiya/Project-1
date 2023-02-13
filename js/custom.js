$('.responsive').slick({
     dots: true,
     infinite: true,
     speed: 300,
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows:false,
     draggable:true,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: true,
           dots: true
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           dots:true
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
       // You can unslick at a given breakpoint now by adding:
       // settings: "unslick"
       // instead of a settings object
     ]
   });
   