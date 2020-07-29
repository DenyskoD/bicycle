$(function() {

    // fixed header    vars --> header , offset , scrollPosition

    let header = $("#header");
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    let offset = 150;
    let scrollPosition = $(window).scrollTop();

    checkScroll(scrollPosition, offset);

    $(window).on("scroll", function(){
        scrollPosition = $(this).scrollTop();
        checkScroll(scrollPosition, offset);
    });

    function checkScroll(scrollPosition, offset) {
        if(scrollPosition >= offset) { 
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }      

    // nav toggle   vars --> nav , navToggle , header
    

    navToggle.on("click", function(event) {
        event.preventDefault();
        header.toggleClass("mobile");
        nav.toggleClass("show");
    });

});




