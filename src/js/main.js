
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
    initProgramBackground();
    
    getInstargramData();
}

function initPopup(){
    //전시개요 보기
    $(".overviewLink").on('click', function() {
        $(".overview_right").addClass('mobileShow');
        _disableFullPageScrolling();
    });
    //전시개요 보기 X
    $(".btnClose").on('click', function() {
        $(this).parents(".overview_right").removeClass('mobileShow');
        _enableFullPageScrolling();
    });

    // map-list 팝업
    // $(".mapInfoList_cont").on('click', function() {
    $(".map-list-item").on('click', function() {
        _hideMapPopupContents();

        let artGroupIndex = parseInt($(this).attr('art-group-index'), 10);
        let artItemIndex = parseInt($(this).attr('art-item-index'), 10);        
        console.log('map art item click! group: ', artGroupIndex, ', index: ', artItemIndex);
        _makeMapPopupContents(artGroupIndex, artItemIndex);

        $(".artistArea_w").addClass('mobileShow');
        _disableFullPageScrolling();
    });
    // map-list 팝업 X
    $(".map-popup-close-btn").on('click', function() {
        _hideMapPopupContents();
        // $(this).parents(".artistArea_w").removeClass('mobileShow');
        _enableFullPageScrolling();
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
        const groupIndex = parseInt($(this).attr('art-group-index'));
        __mapItemActive(groupIndex);
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
        const groupIndex = parseInt($(this).attr('art-group-index'));
        __mapItemActive(groupIndex);
    });
}

function __mapItemDefault() {
    $('.map-list-item').removeClass('active');
    $('.map-marker').removeClass('active');
}
function __mapItemActive(groupIndex) {
    $('.map-list-group-' + groupIndex).addClass('active');
    $('.map-marker.map-marker-group-' + groupIndex).addClass('active');
}

let swiper;
function initSwiper() {
    // swiper
    const length = $(".sec4 .swiper-slide").length;
    swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: false,
        autoplay: false,
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

let isItemScroll = false;
function initFullPage() {
    $('#yraf-navi').hide();
    const fullPageOption = {
        sectionsColor: ['#ffffff', '#8ABADA', '#ffffff', '#777777'],
        anchors: ['sec1', 'sec2', 'sec3', 'sec4', 'sec5'],
        menu: '#menu',
        scrollingSpeed: 1000,
        scrollOverflow: true,
    //      scrollBar: true,
        onLeave: function(origin, destination, direction) {
            // console.log('[fullPage] onLeave - origin: ', origin, ' / destination: ', destination, ' / direction: ', direction);
            if (destination == 1) {
                $('#yraf-navi').hide();
            } else {
                $('#yraf-navi').show();
            }

            // 빠른전환으로 이벤트중복시 fullpage와 swiper전환시점 분리막기
            $('#fullpage').on('scroll touchmove mousewheel', function(event) {
                // console.log('[fullPage] onLeave - #fullpage scroll touchmove mousewheel event: ', event);
                event.preventDefault();
                event.stopPropagation();
                return false;
            });
            swiper.mousewheel.disable();
        },
        afterLoad: function(anchorLink, index) {
            // console.log('[fullPage] afterLoad - #fullpage anchorLink: ',  anchorLink, ' / index: ', index);
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
        },
        beforeLeave: function(origin, destination, direction, trigger) {
            console.log('[fullPage] beforeLeave() argumnets: ', arguments);
        },
        afterRender: function() {
            console.log('[fullPage] afterRender() argumnets: ', arguments);
        }, 
        afterResize: function(width, height) {
            console.log('[fullPage] afterResize() argumnets: ', arguments);
        },
        afterReBuild: function() {
            console.log('[fullPage] afterReBuild() argumnets: ', arguments);
        },
        afterResponsive: function(isResponsive) {
            console.log('[fullPage] afterResponsive() argumnets: ', arguments);
        },
        afterSlideLoad: function(section, origin, destination, direction, trigger) {
            console.log('[fullPage] afterSlideLoad() argumnets: ', arguments);
        },
        onSlideLeave: function(section, origin, destination, direction, trigger) {
            console.log('[fullPage] onSlideLeave() argumnets: ', arguments);
        },
        onScrollOverflow: function(section, slide, position, direction) {
            console.log('[fullPage] onScrollOverflow() argumnets: ', arguments);
        }
    };
    $('#fullpage').fullpage(fullPageOption);

    $('.scrollStyle').on('mouseenter mouseover', function(event) {
        $.fn.fullpage.setAllowScrolling(false);
    });
    $('.scrollStyle').on('mouseleave mouseout', function(event) {
        $.fn.fullpage.setAllowScrolling(true);
    });
}

function _enableFullPageScrolling() {
    $.fn.fullpage.setAllowScrolling(true);
}

function _disableFullPageScrolling() {
    $.fn.fullpage.setAllowScrolling(false);
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

let programTourBgInterval;
let programTourBgIndex = 1;
function initProgramBackground() {
    programTourBgInterval = setInterval(() => {
        programTourBgIndex++;
        if(programTourBgIndex > 6) {
            programTourBgIndex = 1;
        }
        // console.log('[initProgramBackground] bg index: ', programTourBgIndex);
        $('#program-tour-bg-img').attr('src', './img/programTour_bg0' + programTourBgIndex + '.png');
    }, 4000);
    
}

function getInstargramData() {
    $('#instargram-link').attr('href', 'https://www.instagram.com/yraf_2023/?hl=ko');

    // Generate Token 에서 토큰만 갱신
    // https://developers.facebook.com/apps/1357941785153009/instagram-basic-display/basic-display/
    var token = 'IGQWRQR0EyN21YRndFbnhVLV9zWk54THNGcGF5ZAEQybUNUeGw0V05VRFVSbG9RdmZANWmg5dm1WQmp2YnNwUDNYeTAwR3pIZAFdkNWhrYWNpRWdfUE1vR3hqRjE2MWMwLXBzM3hBc2ZAvbW1MNHdubk5EakppSGgteXcZD';
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
    console.log('[joinClick] index: ', index);
    switch (index) {
        case 1: window.open('https://forms.gle/Hg6zVLfHVZGRdYi8A', '', '_blank'); break;
        case 2: window.open('https://forms.gle/g5zDFsJPGKFhLDdE7', '', '_blank'); break;
        case 3: window.open('https://forms.gle/yut5wzPQrNDt7Ecj6', '', '_blank'); break;
        case 4: alert('학술 세미나 참석 및 문의사항은 yeongsanart2023@gmail.com 으로 연락바랍니다.'); break;
        default:
            break;
    }
}

function _makeMapPopupContents(groupIndex, itemIndex) {
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
    switch (groupIndex) {
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
    if(groupIndex != '') {
        $popup.addClass(groupIndex);
    }

    $('.art-item-wrap').hide();
    $('#popup-art-item-' + itemIndex).show();
};

function _hideMapPopupContents() {
    console.log('_hideMapPopupContents');
    $('.map-popup-close-btn').parents(".artistArea_w").removeClass('mobileShow');
}