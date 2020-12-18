$(document).ready(function(){
    /*dynamic*/
    $(".dynamic").click(function(){
        $(".static_content").css("display","none");
    });
    $(".dynamic").click(function(){
        $(".uiux_content").css("display","none");
    });
    $(".dynamic").click(function(){
        $(".dynamic_content").css("display","");
    });

    $(".dynamic").mouseenter(function(){
        $(".dynamic").css("background-color","#FFFFF2").css("transition-duration","0.1s");
        $(".dynamic_title").css("color","#FDAB4A").css("letter-spacing","18px").css("transition-duration","0.5s");
    });
    $(".dynamic").mouseleave(function(){
        $(".dynamic").css("background-color","#FDAB4A");
        $(".dynamic_title").css("color","#FFFFF2").css("letter-spacing","2px");;
    });



    /*static*/
    $(".static").click(function(){
        $(".static_content").css("display","");
    });
    $(".static").click(function(){
        $(".uiux_content").css("display","none");
    });
    $(".static").click(function(){
        $(".dynamic_content").css("display","none");
    });

    $(".static").mouseenter(function(){
        $(".static").css("background-color","#FFFFF2").css("transition-duration","0.1s");
        $(".static_title").css("color","#41D3BD").css("letter-spacing","18px").css("transition-duration","0.5s");
    });
    $(".static").mouseleave(function(){
        $(".static").css("background-color","#41D3BD");
        $(".static_title").css("color","#FFFFF2").css("letter-spacing","2px");
    });    

    /*uiux*/
    $(".uiux").click(function(){
        $(".static_content").css("display","none");
    });
    $(".uiux").click(function(){
        $(".uiux_content").css("display","");
    });
    $(".uiux").click(function(){
        $(".dynamic_content").css("display","none");
    });

    $(".uiux").mouseenter(function(){
        $(".uiux").css("background-color","#FFFFF2").css("transition-duration","0.1s");
        $(".uiux_title").css("color","#170312").css("letter-spacing","18px").css("transition-duration","0.5s");
    });
    $(".uiux").mouseleave(function(){
        $(".uiux").css("background-color","#170312");
        $(".uiux_title").css("color","#FFFFF2").css("letter-spacing","2px");
    }); 

    /*bak to top*/
    $("#top").click(function(){ 
		$('html,body').animate({scrollTop:0}, 333);
	});


});