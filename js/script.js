$(document).ready(function(){
    $("#arrow").click(function (){
        $('html, body').animate({
            scrollTop: $("#start").offset().top
        }, 2000);
    });

    $(".press").mouseenter(function(){
        $(".learn").css("color","#170312").css("letter-spacing","15px")
        $(".press").css("background-color","#41D3BD")
    });
    $(".press").mouseleave(function(){
        $(".learn").css("color","#41D3BD").css("letter-spacing","5px")
        $(".press").css("background-color","#170312")
    });

});