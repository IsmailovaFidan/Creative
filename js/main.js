$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('#mainNav').addClass('fixed-header');
       
    }
    else {
        $('#mainNav').removeClass('fixed-header');
        
    }
});