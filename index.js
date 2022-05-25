$(function(){

    $("#carouselExampleCaptions").carousel({interval:2000});

    $("#carousel-btn").on("click",function(){
        if($("#carousel-btn").children("span").children("i").hasClass("fa-play")){

            $("#carouselExampleCaptions").carousel("cycle");
            $("#carousel-btn").children("span").children("i").removeClass("fa-play");
            $("#carousel-btn").children("span").children("i").addClass("fa-pause");
        }
        else{
            $("#carouselExampleCaptions").carousel("pause");
            $("#carousel-btn").children("span").children("i").removeClass("fa-pause");
            $("#carousel-btn").children("span").children("i").addClass("fa-play"); 
        }
    })
});
