
 //슬라이드
 $(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,        
        dots : true,
        autoplay : true,
        
        pauseOnHover : true
        
        

      });

    $(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3, //한 화면에 몇개까지 보이게 하나
        slidesToScroll: 1 //한꺼번에 넘어가는 개수
      });
  })
