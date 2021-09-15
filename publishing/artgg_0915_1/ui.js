/** 퍼블리셔용 **/

$(function(){
    init();
    //listSlick();
    introLogo();
    popupAction();
});

function init(){
    create();
    addEvent();
}

var _w;
var _sections = [];
var _isInSections = [];
var _pagination;
var _allPagination;

var _navHei;

function create(){
    _w = $(window);

    _pagination = $(".common_lnb_inner>ul");
    _allPagination = $(".common_allmenu_inner .slnb_inner");

    _sections = $( ".section");
    _sections.each( function( $index ){
        _isInSections[ $index ] = false;
    }); 

}

function addEvent(){
    pageMove('.page-move');

    mobileGnb();

    _w.on('resize', resizeEvent);
    resizeEvent();

    _w.on('scroll', scrollEvent);
    scrollEvent();

    _pagination.find("li").on("click", function(){
        var idx = $(this).index();
        pagination(idx);
    });

    _allPagination.on("click", function(){
        var idx = $(this).index();

        $('.common_lnb_w').removeClass('gnb_open');
        allPagination(idx);
    });

};

// lnb 메뉴
function commonLnb() {
    //호버했을때 이벤트
    $('.slnb_inner').hover(
        function () {
            $('.slnb_inner').addClass('menu_hover');
            //클릭한 놈lnb의 자식 snb찾기
            snbHeight = $(this).children('.common_snb').outerHeight();
            $('.common_snb').css('height', snbHeight);
            //snbBgHeight();
        }, function () {
            //아웃했음
            $('.slnb_link').parents('.slnb_inner').removeClass('menu_hover');
        }
    );
}

// gnb 스크롤 Sticky
function gnbSticky(){
    $(window).scroll(function () {
        var scrollHeight = $(document).scrollTop();
        if (scrollHeight > 158) {
            $('.common_gnb_w').addClass('sticky');
        } else if (scrollHeight < 157) {
            $('.common_gnb_w').removeClass('sticky');
        }
    });
}

// intro logo Motion
function introLogo(){
    $(window).scroll(function () {
        var scrollHeight = $(document).scrollTop();
        if (scrollHeight > 2) {
            $('.intro_logo').addClass('intro_logo_s');
            $('.intro_artgg_visual').addClass('logo_motion');
        }else if(scrollHeight < 1){
            $('.intro_logo').removeClass('intro_logo_s');
            $('.intro_artgg_visual').removeClass('logo_motion');
            $('.wrap').removeClass('scolling');
        }
    });
}


function mobileGnb(){
    $('.btn_allmenu').click( function() {
        $('.common_lnb_w').toggleClass('gnb_open');
        $(this).addClass('btn_gnb_close');

        var idx = _pagination.find("li.active").index();
        allPagination(idx);
    } );

    $('.snb_bg').click( function() {
        $('.common_lnb_w').removeClass('gnb_open');
    });

}

function mobilelnbOpen(){
    $('.slnb_link').click( function() {
        $('.slnb_link').parents('.slnb_inner').removeClass('menu_hover');
        $(this).parents('.slnb_inner').addClass('menu_hover');
    } );
}

function resizeEvent(){
    _navHei =  $("#nav").height();
    var mql = window.matchMedia("screen and (max-width: 1080px)");
    if (mql.matches) {
        console.log("화면의 너비가 720px 보다 작습니다.");
        mobilelnbOpen();
    } else {
        console.log("화면의 너비가 720px 보다 큽니다.");
        commonLnb();
        gnbSticky();
    }
}



function scrollEvent( $e ){
    var sT = _w.scrollTop();

    if(sT > $("#section2").offset().top - 2){
        $("#nav").addClass("fixed");
        $(".wrap").addClass("scrolling");
    }else{
        $("#nav").removeClass("fixed");
        _allPagination.removeClass("active");
        _pagination.find("li").removeClass("active");
        $(".wrap").removeClass("scrolling");
    }

    _sections.each( function ( $index ){
        
     if(sT > $(this).offset().top - 2){
        if( _isInSections[ $index ] == true ) return;

        var idx = $index+1;
        pagination($index);
       
        _isInSections[ $index ] = true;

      }else{
        if( _isInSections[ $index ] == false ) return;

        var idx = $index+1;  
        pagination($index-1);
       
        _isInSections[ $index ] = false;

      }
    });
}

function pagination($idx){
    var idx = $idx;
    if(idx != -1){
        _pagination.children("li").removeClass("active");
        _pagination.children("li").eq(idx).addClass("active");
    }else{
        _pagination.children("li").removeClass("active");
    }
}

function allPagination($idx){
    var idx = $idx;

    if(idx != -1){
        _allPagination.removeClass("active");
        _allPagination.eq(idx).addClass("active");
    }else{
        _allPagination.removeClass("active");
    }
}

function pageMove($selector, $position){
	if($position == undefined) $position = 0;

	var selector = $selector;
	$(selector).on('click', function (e) {
		e.preventDefault();

		var _top = $($(this).attr('href'));
		var $target = _top.offset().top;

		$('html,body').animate({
			scrollTop: $target+$position
		}, 500);
	});
}

/*
function listSlick(){
    $('.slick_list_inner').slick({
        dots: false,
        arrows:true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2
    });
}
*/
function popupAction(){
    $('.board_list_inner tr').on('click', function (){
        $('.section8_cont_w').addClass('board_popup');
    });

    $('.popup_close').on('click', function (){
        $('.section8_cont_w').removeClass('board_popup');
    });
}
