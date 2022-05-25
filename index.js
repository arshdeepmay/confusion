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

    $("#tableButton").on("click",function(){
        $("#modaltable").modal("show");
    })

    $("#modalclose").on("click",function(){
        $("#modaltable").modal("hide");
    })    

    $("#modalCancel").on("click",function(){
        $("#modaltable").modal("hide");
    })

    $("#loginClick").on("click",function(){
        $("#loginModal").modal("show");
    })

    $("#loginCancel").on("click",function(){
        $("#loginModal").modal("hide");
    })

    $("#loginClose").on("click",function(){
        $("#loginModal").modal("hide");
    })

});
