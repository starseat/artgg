
let swiper;

$(document).ready(function() {  
    init();
});

function init() {
    initPopup(); //팝업
    allMenu();//모바일 전체메뉴

    initMap();
    initSwiper();
    initFullPage();
}

function initPopup(){
    //전시개요 보기
    $(".overviewLink").on('click', function() {
        $(".overview_right").addClass('mobileShow');
    });
    //전시개요 보기 X
    $(".btnClose").on('click', function() {
        $(this).parents(".overview_right").removeClass('mobileShow');
    });
    //map 팝업
    $(".mapInfoList_cont").on('click', function() {
        _hideMapPopupContents();

        let artItemIndex = parseInt($(this).attr('art-item-index'), 10);
        console.log('map art item click! index: ', artItemIndex);
        _makeMapPopupContents(artItemIndex);

        $(".artistArea_w").addClass('mobileShow');        
    });
    //map 팝업 X
    $(".map-popup-close-btn").on('click', function() {
        _hideMapPopupContents();
        // $(this).parents(".artistArea_w").removeClass('mobileShow');
    });    
}

//모바일 전체메뉴
function allMenu(){ 
    $(".hamburger").on('click', function() {
        $(".menuList_w").toggleClass('menuOpen');
        $(".hamburger").toggleClass('is-active');
    });
    
}

function initMap() {
    _initMarker();
}

function _initMarker() {
    // $('.map-marker').hover(function() {
    //     $('.map-marker').removeClass('active');
    //     $(this).addClass('active');
    // });

    $('.map-marker').mouseout(function() {
        $('.map-marker').removeClass('active');
    });
    $('.map-marker').mouseover(function() {
        $(this).addClass('active');
    });
}

function initSwiper() {
    // swiper
    const length = $(".sec4 .swiper-slide").length;
    swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: false,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        mousewheel: true,
        on: {
            slideChange: function(){
                var idx = this.activeIndex;
                // 처음과 마지막 슬라이드가 아닐경우 fullpage전환 막기
                if(this.activeIndex != 0 && idx != length) $.fn.fullpage.setAllowScrolling(false);
                if(length == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false) //슬라이드가 2개밖에 없을때
                // console.log('즉시 : ' + idx);
            },
            slideChangeTransitionEnd: function(){
                var idx = this.activeIndex;
                // 처음과 마지막 슬라이드일 경우 fullpage전환 풀기
                if(idx == 0 || idx >= length-1) {
                    $.fn.fullpage.setAllowScrolling(true);
                // console.log('전환후 : ' + idx);
                }
            },
            touchMove: function(e) {
                var startY = e.touches.startY;
                setTimeout(function(){
                if(startY > e.touches.currentY) {
                    swiper.slideNext();
                }
                else {
                    swiper.slidePrev();
                }
            }, 100);
            },
        },
    });
}

function initFullPage() {
    $('#fullpage').fullpage({
        sectionsColor: ['#ffffff', '#8ABADA', '#ffffff', '#777777'],
        anchors: ['sec1', 'sec2', 'sec3', 'sec4', 'sec5'],
        menu: '#menu',
        scrollingSpeed: 1000,
        scrollOverflow: true,
    //      scrollBar: true,
        onLeave: function(origin, destination, direction) {
            if (destination == 1) {
                $('#yraf-navi').hide();
            } else {
                $('#yraf-navi').show();
            }

            // 빠른전환으로 이벤트중복시 fullpage와 swiper전환시점 분리막기
            $('#fullpage').on('scroll touchmove mousewheel', function(event) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            });
            swiper.mousewheel.disable();
        },
        afterLoad: function(anchorLink, index) {
            // 전환이 끝난후 이벤트풀기
            $('#fullpage').off('scroll mousewheel');
            if(!$(".fp-completely .swiper-wrapper").length > 0) {
                $('#fullpage').off('touchmove'); // 모바일분기
            }
            if(swiper) {
                swiper.mousewheel.enable();
            }
            if(!$(".sec2").hasClass("active")) {
                $.fn.fullpage.setAllowScrolling(true); // 슬라이드 섹션을 벗어나면 휠풀어주기
            }
        }
    });
}

function joinClick(index) {
    console.log('joinclick - ', index);
    alert('준비중 입니다.');
}

function _makeMapPopupContents(index) {
    index = 0;

    $('.art-item-wrap').hide();
    $('.art-item-' + index).show();

};

function _hideMapPopupContents() {
    console.log('_hideMapPopupContents');
    $('.map-popup-close-btn').parents(".artistArea_w").removeClass('mobileShow');
}