$(document).ready(function () {

    // menu

    /*
    $(".navi>li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown(500);
    });
    $(".navi>li").mouseout(function () {
        $(this).find(".submenu").stop().slideUp(500);
    });
*/

    $(".navi>li").mouseover(function () {
        $(".submenu").stop().slideDown(500);
    });
    $(".navi>li").mouseout(function () {
        $(".submenu").stop().slideUp(500);
    });

    // image
    var imgs = 2;
    var now = 0;

    start();

    function start() {
        $(".imgslide>a").eq(0).siblings().css({ "margin-left": "-1200px" });
        setInterval(function () { slide(); }, 3000);
    }

    function slide() {
        now = now == imgs ? 0 : now += 1;
        $(".imgslide>a").eq(now - 1).css({ "margin-left": "-1200px" });
        $(".imgslide>a").eq(now).css({ "margin-left": "0px" });
    }


    //tab 메뉴 설정(공지사항/갤러리)
    $(".tabmenu>li>a").click(function () {
        $(this).parent().addClass("active").siblings().removeClass("active");
    });

    // 레이어 팝업창
    $(".notice li:nth-of-type(1)").click(function () {
        $("#layer").addClass("active");
    });

    $(".btn").click(function () {
        $("#layer").removeClass("active");
    });

});