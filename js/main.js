

jQuery.noConflict();



jQuery(document).ready(function($) {

    var input = $('#container-input');

    input.on('click', function (e) {
       $(this).animate({'bottom':'-=100px'}, 150);
    });
    input.on('click', function (e) {
        $(this).animate({'top':'+=100px'}, 150);
    });
    input.on('click', function (e) {
        $(this).animate({'right':'+=100px'}, 150);
    });
    input.on('click', function (e) {
        $(this).animate({'right':'-=100px'}, 150);
    });
    input.on('click', function (e) {
        $(this).animate({'left':'+=100px'}, 150);
    });
    input.on('click', function (e) {
        $(this).animate({'left':'-=100px'}, 150);
    });
});