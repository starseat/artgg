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
    getNoticeList(1);
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
            // console.log('[fullpage.onLeave] origin: ', origin);
            // console.log('[fullpage.onLeave] destination: ', destination);
            // console.log('[fullpage.onLeave] direction: ', direction);
        }
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

function getNoticeList(page) {
    if (!page) { page = 1; }

    $.ajax({
        type: "GET",
        data: { page: page },
        url: './api/get_notice.php',
        success: function(resultData) {
            var resultObj = JSON.parse(resultData);
            writeNoticeList(resultObj.notice_list);
            writeNoticePage(resultObj.paging_info, page);
        },
        error: function() {}
    });
}

function writeNoticeList(list) {
    var $noticeTable = $('#notice-list');
    $noticeTable.empty();
    for (var i = 0; i < list.length; i++) {
        var notice = list[i];

        var _item = '<tr onclick="getNoticeView(' + notice.seq + ');">';

        _item += '<td>' + notice.no + '</td>';
        _item += '<td><p>' + notice.title + '</p><span class="board_date">' + notice.created_at + '</span></td>';
        _item += '<td>' + notice.created_at + '</td>';
        _item += '<td>' + notice.view_count + '</td>';

        _item += '</tr>';

        $noticeTable.append(_item);
    }
}

function writeNoticePage(paging, current) {
    var $noticePaging = $('#notice-paging');
    $noticePaging.empty();

    var _item = '<ul class="paging_list">';
    for (var i = paging.page_start; i <= paging.page_end; i++) {
        if (i == current) {
            _item += '<li class="paging_cont paging_current">';
            _item += '<a href="javascript:void(0);" class="paging_btn"><span class="pgb_text">' + i + '</span></a>';
            _item += '</li>';
        } else {
            _item += '<li class="paging_cont">';
            _item += '<a href="javascript:void(0);" class="paging_btn" onclick="getNoticeList(' + i + ');" ><span class="pgb_text">' + i + '</span></a>';
            _item += '</li>';
        }
    }

    if (paging.page_prev > 0) {
        _item += '<button class="paging_move_l" title="이전목록" onclick="getNoticeList(' + paging.page_prev + '">';
        _item += '<span class="pg_move_cont">';
        _item += '<img src="./img/paging_arrow.png" alt="이전목록">';
        _item += '</span>';
        _item += '</button>';
    }

    if (paging.page_next < paging.page_total) {
        _item += '<button class="paging_move_r" title="다음목록" onclick="getNoticeList(' + paging.page_next + '">';
        _item += '<span class="pg_move_cont">';
        _item += '<img src="./img/paging_arrow.png" alt="다음목록">';
        _item += '</span>';
        _item += '</button>';
    }

    $noticePaging.append(_item);
}