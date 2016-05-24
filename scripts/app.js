$(document).ready(function() {
    $(".about").click(function() {
        $(".overlay").fadeToggle(200);
        $(".button a").toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.overlay').live('click', function() {
    $(".overlay").fadeToggle(200);
    $(this).closest('.overlay').overlay('close');
    open = false;
});
