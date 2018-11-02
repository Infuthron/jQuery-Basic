/*
$(document).ready( function () {
    $('h1').hide(3000).delay(1000).show(500);
});
*/

$(document).ready( function () {

    //Mouse events
    $('figure img').mouseenter( function () {
        $(this).fadeTo(600, .1);
    }).mouseleave( function () {
       $(this).fadeTo(600, 1);
    }).click( function () {
        $(this).next().toggle(400);
    });

    //Footer
    $('footer').click( function () {
       $(this).animate({
          top: '-=50px',
          opacity: '-=.2'
       }, 500);
    }).dbclick( function () {
       $(this).animate({
           top: '0',
           opacity: '1'
       }, 500);
    });

});