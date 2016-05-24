$(document).ready(function() {
    $(".about").click(function() {
        $(".overlay").fadeToggle(200);
        $(".button a").toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.button a').on('click', function() {
    $(".overlay").fadeToggle(200);
    $("button a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});
