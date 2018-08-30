var action = 'pause';
var btnClass = 'fa-pause';
$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#mycarousel').unbind('mouseenter mouseleave');
    $('#carouselButton').click(function () {
        $('#mycarousel').carousel(action);
        $('#carouselButton').children('span').removeClass(btnClass);
        action = ((action == 'cycle') ? 'pause' : 'cycle');
        btnClass = ((action == 'cycle') ? 'fa-play' : 'fa-pause');
        $('#carouselButton').children('span').addClass(btnClass);
    });
    $('#reserveBtn').click(function () {
        $('#ReserveModal').modal('show');
    });

    $('#reserveModalClose').click(function () {
        $('#ReserveModal').modal('hide');
    });

    $('#reserveModalCancel').click(function () {
        $('#ReserveModal').modal('hide');
    });

    $('#loginOpen').click(function () {
        $('#loginModal').modal('show');
    });

    $('#loginModalClose').click(function () {
        $('#loginModal').modal('hide');
    });

    $('#loginModalCancel').click(function () {
        $('#loginModal').modal('hide');
    });
});