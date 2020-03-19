$(document).ready(function(){

    // navbar toggler btn
    $(".navbar-toggler").click(function(){
        $(".navbar-toggler").toggleClass("change")
    })

    // sticky navbar and less padding with css style
   $(window).scroll(function(){
       let position = $(this).scrollTop();

       if (position >= 10) {
           $(".navbar").addClass("navbar-background");
           $(".navbar").addClass("fixed-top");
       } else {
           $(".navbar").removeClass("navbar-background");
           $(".navbar").removeClass("fixed-top")
       }
   })

    // smooth scroll
    $(".nav-item a, .header-link, #back-to-top").click(function(link){
        link.preventDefault();
        let target = $(this).attr("href");

        $("html, body")
        .stop()
        .animate(
            {scrollTop: $(target).offset().top - 25},2000
        )
    })    

    // ripple effect
    $("#header").ripples({
        dropRadius: 80,
        // perturbance: 0.5
        
    })

    // magnific-popup
    $(".parent-container").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
        enabled: true
        }
    })
})