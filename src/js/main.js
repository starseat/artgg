$(document).ready(function() {
    init();
});

$('#nav').hide();

function init() {
    AOS.init();

    initFullpage();
    initNaviEvent();
    initNoticeEvent();

    getInstargramData();
}

function initFullpage() {
    $('#fullpage').fullpage({
        css3: true,
        navigation: true,
        keyboardScrolling: true,
        fitToSection: true,
        sectionSelector: '.fullpage-section',
        onLeave: function(origin, destination, direction) {
            if (destination == 1) {
                $('#nav').hide();
            } else {
                $('#nav').fadeIn();
            }

            _activateLeftNav(destination);
            // if(direction == 'up') {
            //     $('.section ').height(window.innerHeight); $('.fp-tableCell').height(window.innerHeight);
            // }
            console.log('[fullpage.onLeave] origin: ', origin);
            console.log('[fullpage.onLeave] destination: ', destination);
            console.log('[fullpage.onLeave] direction: ', direction);
        },
        afterLoad: function(origin, destination, direction) {},
        // afterRender: function(){ $('.section ').height(window.innerHeight); $('.fp-tableCell').height(window.innerHeight); console.log('[afterRender]');},
        afterResize: function(width, height) { console.log('[afterResize]'); },
        afterReBuild: function() { console.log('[afterReBuild]'); },
        afterResponsive: function(isResponsive) { console.log('[afterResponsive]'); },
    });
}

function initNaviEvent() {
    //모바일 lnb오픈
    $('.btn_allmenu').on('click', function() {
        $('.common_lnb_w').toggleClass('gnb_open');
        $(this).addClass('btn_gnb_close');
    });
}

function initNoticeEvent() {
    // 게시판 상세 팝업
    $('.board_list_inner tr').on('click', function() {
        $('body').addClass('board_popup');
    });
    // 게시판 팝업 닫기
    $('.popup_close').on('click', function() {
        $('body').removeClass('board_popup');
    });
}

function getInstargramData() {
    var token = "IGQVJYZAk5jQnRBTmFPZAkl6dEt0MTVnTkFGd3gzRGtxcm5nTkVpVk5FRzJkUENZAa0ROSVVIbUNKR3lTRlNSVVVPemJmelNiVFhmMTQzN3RfLTYyZAHNmUThtSkpQeVZAmckFFZA1JCU0h5TFFhTDNVeUhnbAZDZD";
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://graph.instagram.com/me/media?access_token=" + token + "&limit=1&fields=id,caption,media_type,media_url,thumbnail_url,permalink,username,timestamp",
        success: function(response) {
            if (response.data != undefined && response.data.length > 0) {
                var item = response.data[0];
                // console.log('[instargram] item: ', item);
                var image_url = '';

                if (item.media_type === "VIDEO") {
                    image_url = item.thumbnail_url;
                } else {
                    image_url = item.media_url;
                }

                $('#instargram-link').attr('href', item.permalink);
                $('#instargram-media').attr('src', image_url);
                $('#instargram-text').text(item.caption);

                // item.caption: 인스타 게시글 내용
                // image_url: 이미지 url / 이미지,영상에 따라 분리하려고 따로 변수 만듦.
                // permalink: 인스타 게시글 링크 (인스타그램으로 이동)
            }
        },
        error: function() {}

    });
}

function _activateLeftNav(index) {
    $('.slnb_inner').removeClass('active');
    $('#slnb-' + index).addClass('active');
}

function moveFullpage(index) {
    console.log('[moveFullpage] index: ', index);
    _activateLeftNav(index);
    $.fn.fullpage.moveTo(index);
}

function downFullpage(index) {
    _activateLeftNav(index);
    $.fn.fullpage.moveSectionDown();
}