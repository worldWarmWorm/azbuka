$(function () {

    $('.slider-block-inner').slick({
        prevArrow: '<button type="button" class="slick-prev slick-btn"></button>',
        nextArrow: '<button type="button" class="slick-next slick-btn"></button>',
    });

    $('.menu ul li').hover(
        function () {
            $(this).find('.slide-content').stop(false, true).fadeIn(300);
        },
        function () {
            $(this).find('.slide-content').stop(false, true).fadeOut(300);
        }
    );

    $('.main-list li').find('.open').click(function (evt) {
        evt.preventDefault();
        $(this).next().slideToggle(300);
        $(this).toggleClass('close');
    });

});