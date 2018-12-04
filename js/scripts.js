$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#mycarousel").carousel('cycle');

    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
     });
    $("#loginBtn").click(() => {
        $("#loginModal").modal('toggle');
    });
    $("#reserveBtn").click(() => {
        $("#reserveModal").modal('toggle');
    });
});
