$(document).ready(function(){
    /*lg*/
    $(".lg").mouseenter(function(){
        $(".content_lg").fadeIn(200)
        $(".title_lg").css("color","#FFFFF2")
        $(".lg").css("background-color","#170312").css("border","1px solid #41D3BD")
    });    
    $(".lg").mouseleave(function(){
        $(".content_lg").fadeOut(600).css("transition-delay","s")
        $(".title_lg").css("color","#170312")
        $(".lg").css("background-color","#41D3BD")
    });
    /*mid*/
    $(".mid").mouseenter(function(){
        $(".content_mid").fadeTo(200,1)
        $(".title_mid").css("color","#FFFFF2")
        $(".mid").css("background-color","#170312").css("border","1px solid #FFFFF2")
    });    
    $(".mid").mouseleave(function(){
        $(".content_mid").fadeTo(600,0).css("transition-delay","s")
        $(".title_mid").css("color","#170312")
        $(".mid").css("background-color","#FFFFF2")
    });
    /*sm*/
    $(".sm").mouseenter(function(){
        $(".content_sm").fadeTo(200,1)
        $(".title_sm").css("color","#FFFFF2")
        $(".sm").css("background-color","#170312").css("border","1px solid #FDAB4A")
    });    
    $(".sm").mouseleave(function(){
        $(".content_sm").fadeTo(600,0).css("transition-delay","s")
        $(".title_sm").css("color","#170312")
        $(".sm").css("background-color","#FDAB4A")
    });

    /*go back*/
    $(".arrow_icon").mouseenter(function(){
        $(".hint").fadeTo(200,1)
    });
    $(".arrow_icon").mouseleave(function(){
        $(".hint").fadeTo(600,0)
    });
});