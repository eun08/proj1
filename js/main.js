$(function(){
    




    var slide;
    slide = setInterval(function(){
        $('.notice_list li:first-child').animate({
            'margin-top':'-2rem'},600,function(){
                $('.notice_list').append($('.notice_list li:first-child'));
                $('.notice_list li:last-child').css({'margin-top':0})
            
        });//animate end
    },1500);//setInterval end

    var slide2;
    slide2 = setInterval(function(){
        $('.purp_list li:first-child').animate({
            'margin-top':'-2rem'},600,function(){
                $('.purp_list').append($('.purp_list li:first-child'));
                $('.purp_list li:last-child').css({'margin-top':0})
            
        });//animate end
    },1500);//setInterval end

    
    $('.close').click(function(){
        $('#top_popup').hide();
    });

    /*
    $('.my_page').hover(function(){
        $('#top_my_box').slideDown();
    },function(){
        $('#top_my_box').slideUp();
    });
    */



    
    
})//jq end