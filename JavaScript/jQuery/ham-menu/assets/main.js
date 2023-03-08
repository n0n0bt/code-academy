$(document).ready(function () {
    $(".cross").hide();
    $(".menu").hide();

    
    $(".hamburger").click(function () {
        $(".menu").slideToggle("slow");
        $(this).hide();
        $(".cross").show();
    });

    $(".cross").click(function () {
        $(".menu").slideToggle("slow");
        $(this).hide();
        $(".hamburger").show();
    });
  
});


