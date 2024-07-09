$(function(){
    $("#hide").click(function(){
        $(".box") .hide(1000);
    })

    $("#show").click(function(){
        $(".box") .show(1000);
    })
    $("#show_hide").click(function(){
        $(".box") .toggle(1000);
    })
    $("#slideup").click(function(){
        $(".box") .slideUp(1000);
    })
    $("#slidedown").click(function(){
        $(".box") .slideDown(1000);
    })
    $("#slidedown").click(function(){
        $(".box") .slideDown(1000);
    })
    $("#slidedownup").click(function(){
        $(".box").slideToggle(1000);
    })
    $("#fadein").click(function(){
        $(".box").fadeIn(1000);
    })
    $("#fadeout").click(function(){
        $(".box").fadeOut(1000);
    })
    $("#fadeinout").click(function(){
        $(".box").fadeToggle(1000);
    })
    $("#come").click(function(){
        $(".box").addClass("showup");
    })
    $("#go").click(function(){
        $(".box").removeClass("showup");
    })
    
})
