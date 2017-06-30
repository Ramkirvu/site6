

jQuery.noConflict();



jQuery(document).ready(function($) {

    //RELOAD PAGE
    $('#reload').click(function () {
       location.reload();
    });



    $('#slide-on').on('click', function (event) {
        $( "#slide" )
            .animate({
            width: "toggle",
            height: "toggle"
        }, {
            duration: 500,
            specialEasing: {
                width: "linear"
            }
        });
    });

    $('#box2').on('click', function () {
        var w = $('#width');
        w.animate({
            width : '15rem',
            height : '15rem'
        }, 500);
        w.animate({
            width : '3rem',
            height : '3rem'
        }, 500)
    });

    $('#box4').on('click', function () {
        $('#box4').animate({
            width: '4rem'
        });
    });

    $('#box4').on('click', function () {
        $('#box4').hide(700).animate({
            width: '3rem'
        });
    });


    $('#hideShow').on('click', function () {
        $("#box5").animate({height: "hide"}, 1000);
        $("#box5").animate({height: "show"}, 1000);
    });


    //DOWN ON CLICK
    $("#div-count").on('click', function () {
        $("#down-on").offset(function(i, val){
            return {top:val.top + 15, left:val.left};
        });
    });

    //TEXT IN BOX
    $("#div-count").click(function() {
       $(".count").html(+$(".count").html()+1);
    });

    //POSITION OF BOX
    $("#div-count").click(function(e) {
        var offset = $("#down-on").offset();
        var relativeX = (e.pageX - offset.left);
        var relativeY = (e.pageY - offset.top);

        $(".count-cor").html(" X: " + relativeX + "  Y: " + relativeY);
    });

    //HIDE SHOW TEXT ON FOOTER
    $(".toggle").click( function () {
         $("#hide").slideDown('fast');
    });

});




//DRAG N DROP ON JS

var getCoords = function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset,
    };

};

var move = document.getElementById("draggable");

move.onmousedown = function (e) {

    var coords = getCoords(move);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;

    move.style.position = 'absolute';
    moveAt(e);
    document.body.appendChild(move);
    // move.style.zIndex = 1000;

    function moveAt(e) {
        move.style.left = e.pageX - shiftX + 'px';
        move.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function(e) {
        moveAt(e);
    };

    move.onmouseup = function() {
        document.onmousemove = null;
        move.onmouseup = null;
    };
};

//отклюаем drag n drop html
move.ondragstart = function() {
    return false;
};



// ПОЛУЧАЕМ КООРДИНАТЫ КЛАССА BOX(МАССИВ) И ВЫВОДИМ В КОНСОЛЬ

var arrCords = document.querySelectorAll('.box');

for (var i = 0; i < arrCords.length; i++) {
    console.log(arrCords[i].getBoundingClientRect());
}


console.log(move.getBoundingClientRect());



















