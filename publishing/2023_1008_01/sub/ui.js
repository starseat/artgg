/*
*
* 퍼블리셔용
*/



var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
var agent = navigator.userAgent.toLowerCase();
var trident = navigator.userAgent.match(/Trident\/(\d.\d)/i);

var _w;
var _breakpoint = 720;
var _breakpointDesktop = 1100;
var _wrap;
var _wid;

var _menu;
$(function(){
    frontInit();
});

function frontInit(){
    create();
    addEvent();
    gnbHover();
}

function create(){
    _w = $(window);
    _wrap = $('#wrap');
    _wid = _w.width();

 }

function addEvent(){
    _w.on("scroll", scrollEvent);
    scrollEvent();

}


function scrollEvent(){
    var st = $(window).scrollTop();
    var sh = $(window).height() / 1.2;
    var section = $('.section');

    section.each(function(i){
        if( st > section.eq(i).offset().top - sh){
            $(this).addClass('active');
        }
         else {
            $(this).removeClass('active');
        }
    });
    
    //scroll gnb fixed
    if(st > 100){
        $('.gnbMenu-w').addClass('scrollGnb');
    }
    else if(st < 99) {
        $('.gnbMenu-w').removeClass('scrollGnb');
    }

	
}




function mobileMenu(){
    $('.btnAllmenu').on('click',function(){
        $(this).parents('.gnbMenu-inner').toggleClass('allMenuOpen');
    });
}

function gnbHover(){
    $(".gnbMenu-w").mouseover(function(){
        $(this).addClass('hover');
    });
    $(".gnbMenu-w").mouseout(function(){
        $(this).removeClass('hover');
    });
}
