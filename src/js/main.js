
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
    initArticlePlanningContents();
    
    getInstargramData();
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
    _initMapList();
    _initMapMarker();
}

function _initMapList() {
    $('.map-list-item').mouseout(function() {
        // $('.map-list-item').css('color', 'black').css('cursor', 'default');
        //$('.map-list-item').removeClass('active');
        __mapItemDefault();
    });
    $('.map-list-item').mouseover(function() {
        // $(this).css('color', 'red').css('cursor', 'pointer');
        // $(this).addClass('active');
        const number = parseInt($(this).attr('art-item-index'));
        __mapItemActive(number);
    });
}

function _initMapMarker() {
    // $('.map-marker').hover(function() {
    //     $('.map-marker').removeClass('active');
    //     $(this).addClass('active');
    // });

    $('.map-marker').mouseout(function() {
        //$('.map-marker').removeClass('active');
        __mapItemDefault();
    });
    $('.map-marker').mouseover(function() {
        // $(this).addClass('active');
        const number = parseInt($(this).attr('art-item-index'));
        __mapItemActive(number);
    });
}

function __mapItemDefault() {
    $('.map-list-item').removeClass('active');
    $('.map-marker').removeClass('active');
}
function __mapItemActive(number) {
    let index = 0;
    if(number && number > 0) {
        index = number - 1;
    }

    $($('.map-list-item')[index]).addClass('active');
    $($('.map-marker')[index]).addClass('active');
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

function initArticlePlanningContents() {
    $('#article-planning-contents-type-ko').on('click', function() {
        $('#article-planning-contents-type-en').removeClass('langCurrent');
        $(this).addClass('langCurrent');

        $('#article-planning-contents-box-en').hide();
        $('#article-planning-contents-box-ko').show();
    });

    $('#article-planning-contents-type-en').on('click', function() {
        $('#article-planning-contents-type-ko').removeClass('langCurrent');
        $(this).addClass('langCurrent');

        $('#article-planning-contents-box-ko').hide();
        $('#article-planning-contents-box-en').show();
    })
}

function getInstargramData() {
    // Generate Token 에서 토큰만 갱신
    // https://developers.facebook.com/apps/1357941785153009/instagram-basic-display/basic-display/
    var token = 'IGQWRPWFVOclhfbkxoanZAHbHMySGVCUjY0NmdlY2I4SHNUYks0Y1JrWEd1cl9PSWVYYkhoY0JyTzJuc0h2NVJQbDNmR2o2N0xMSHppTWQyRDBWQTVKVFpYNmhMem9CLW5oanp5SWtvVGZApcUJOUmFxdWxTNWlEMTQZD';
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://graph.instagram.com/me/media?access_token=" + token + "&limit=1&fields=id,caption,media_type,media_url,thumbnail_url,permalink,username,timestamp,followers_count,media_count,media",
        success: function(response) {
            console.log('[instargram] response: ', response);
            if (response.data != undefined && response.data.length > 0) {
                var item = response.data[0];
                console.log('[instargram] item: ', item);
                var image_url = '';

                if (item.media_type === "VIDEO") {
                    image_url = item.thumbnail_url;
                } else {
                    image_url = item.media_url;
                }

                $('#instargram-link').attr('href', item.permalink);
                $('#instargram-media').attr('src', image_url);
                $('#instargram-text').text(item.caption);
            }
        },
        error: function() {}

    });
}

function joinClick(index) {
    console.log('joinclick - ', index);
    alert('준비중 입니다.');
}

function _makeMapPopupContents(index) {
    const $popup = $('#map-art-popup');
    $popup.removeClass('line-yellow');
    $popup.removeClass('line-pink');
    $popup.removeClass('line-skyblue');
    $popup.removeClass('line-green');
    $popup.removeClass('line-dkOrange');
    $popup.removeClass('line-brown');
    $popup.removeClass('line-pupple');
    $popup.removeClass('line-orange');
    $popup.removeClass('line-darkgreen');
    $popup.removeClass('line-darkblue');

    let lineClass = '';
    switch (index) {
        case 1: lineClass = 'line-yellow'; break;
        case 2: lineClass = 'line-pink'; break;
        case 3: lineClass = 'line-skyblue'; break;
        case 4: lineClass = 'line-green'; break;
        case 5: lineClass = 'line-dkOrange'; break;
        case 6: lineClass = 'line-brown'; break;
        case 7: lineClass = 'line-pupple'; break;
        case 8: lineClass = 'line-orange'; break;
        case 9: lineClass = 'line-darkgreen'; break;
        case 10: lineClass = 'line-darkblue'; break;
    }
    if(lineClass != '') {
        $popup.addClass(lineClass);
    }

    $('.art-item-wrap').hide();
    $('.art-item-' + index).show();
};

function _hideMapPopupContents() {
    console.log('_hideMapPopupContents');
    $('.map-popup-close-btn').parents(".artistArea_w").removeClass('mobileShow');
}