 $(document).ready(function(){

    AOS.init();


      $(".depth2").hide()
        $(".gnb >li").mouseenter(function(){
          $(this).children(".depth2").stop().fadeIn()
          })
          $(".gnb >li").mouseleave(function(){
          $(this).children(".depth2").stop().fadeOut()
          })

    $(".ham").click(function(){
    $(".mgnb-wrap").animate({"left": "0"})
  })

    $(".mgnb-close").click(function(){
    $(".mgnb-wrap").animate(({"left": "100%"}))
  })

    $("header .mgnb > li .mdepth2").hide()
      $(".mgnb >li").click(function(){
  
            if($(this).children(".mdepth2").css("display")=="none"){
              $(this).children(".mdepth2").slideDown()
            $(this).siblings().children(".mdepth2").slideUp()
            }else{
            $(this).children(".mdepth2").slideUp()
            }
   })


      //탭
    $(".img01 ul li").not(":first").hide();
      $(".name01 ul li").click(function(){
      $(this).addClass("active").siblings().removeClass("active")
        let aa = $(this).index()
      $(".img01 ul li").eq(aa).fadeIn().siblings().hide()
    })
    
    $(".img02 ul li").not(":first").hide();
      $(".name02 ul li").click(function(){
      $(this).addClass("active").siblings().removeClass("active")
        let aa = $(this).index()
      $(".img02 ul li").eq(aa).fadeIn().siblings().hide()
    })

   const slide1 = new Swiper(".slide1", {
    autoplay: { 
      delay: 0, 
      disableOnInteraction: false
    },
    loop: true, 
    speed: 5000,        
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true, 
    breakpoints: {
      768: {
        slidesPerView: 4
      },                
      1400: {
        slidesPerView: 5
      }
    },
                       
  });

   
 


    })