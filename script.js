$(document).ready(function () 
{
  $(".carousel").slick(
    {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    responsive: 
    [
      {
        breakpoint: 1024,
        settings: 
        {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 480,
        settings: 
        {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
}); 
 58  style.css 
@@ -0,0 +1,58 @@
* 
{
  margin: 0;
  padding: 0;
}

body 
{
  background-color: #9ACEEB;
}

.carousel div img 
{
  width: 100px;
}

.carousel 
{
  max-width: 925px;
  width: 100%;
  margin-top: 50px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;
  position: relative;
}

.slick-next 
{
  right: 25px !important;
}

.slick-prev 
{
  left: 15px !important;
}

.slick-dots 
{
  /* left: -30px; */
  position: relative !important;
}

@media (min-width: 768px) 
{
  .carousel div img 
  {
    width: 150px;
    height: 175px;
  }

  .slick-prev 
  {
    left: -25px !important;
  }
} 
