$(document).ready(function() {
    init();
});

$('#nav').hide();

function init() {
    AOS.init();

    initFullpage();
    initEvent();

    getInstargramData();
    getNoticeList(1);

    getIntroduceInfo();
    getPopupInfo();

    resizeEventMap();
    $(window).resize(function() {
        resizeEventMap();
        if ($('#notice-detail-content').width() <= 640) {
            $('#notice-detail-content .note-video-clip').css('width', '100%');
        }
    });
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

                // if (destination == 3) {
                //     setIntroduceYoutubeAutoPlay();
                // }

                if (destination == 6) {
                    setTimeout(function() {
                        $('#tmpContainer #fbToolBar .button.right').on('click', function() { console.log('test'); });
                    }, 2000);
                }
            }
            
            _activateLeftNav(destination);
            // console.log('[fullpage.onLeave] origin: ', origin);
            // console.log('[fullpage.onLeave] destination: ', destination);
            // console.log('[fullpage.onLeave] direction: ', direction);
        }
    });
}

function initEvent() {
    // 모바일 lnb오픈
    $('.btn_allmenu').on('click', function() {
        $('.common_lnb_w').toggleClass('gnb_open');
        $(this).addClass('btn_gnb_close');
    });
}

function getIFrameYoutubeLink(youtube_id) {
    // return 'https://www.youtube.com/embed/' + youtube_id + '?rel=0';
    return 'https://www.youtube.com/embed/' + youtube_id + '?autoplay=1';
}

var __isYoutubeAutoPlay = false;

function getIntroduceInfo() {
    // view 에 직접 src 추가
    // $('#target_youtube_view').attr('src', getIFrameYoutubeLink('3riELB0MHYM'));
}

function setIntroduceYoutubeAutoPlay() {
    if (__isYoutubeAutoPlay) return;

    var _link = $('#target_youtube_view').attr('src');
    _link += '&amp;autoplay=1';
    $('#target_youtube_view').attr('src', _link);
    __isYoutubeAutoPlay = true;

}

function getInstargramData() {
    // https://blog.naver.com/PostView.naver?blogId=gocathy&logNo=222053516256
    // Generate Token 에서 토큰만 갱신
    // https://developers.facebook.com/apps/264515868907394/instagram-basic-display/basic-display/?business_id=403629573607353
    var token = 'IGQVJVOU1NTEFfZAXA0NnFTeVIxQ2lmdUVZAY3dZAM1pDb2NQUk4tQkVBeUx5QVRNRkFsam1fMmFCOVZANMFdoSFVQWkhTUW9tY0ZAqTUpOU0RoQnM0ejFRY2doSVpFS3FyM3kzdkJTVkNpQlM5OTFTc3FOMgZDZD';
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
    // 20220505 수정사항 반영. (온라인 전시관, 행사일정 영역 삭제)
    if(index > 4) {
        index += 2;
    }
    $('.slnb_inner').removeClass('active');
    $('#slnb-' + index).addClass('active');
}

function moveFullpage(index) {
    _activateLeftNav(index);
    $('#nav').removeClass('gnb_open');
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
        url: './api/get_notice_list.php',
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

function getNoticeView(seq) {
    $.ajax({
        type: "GET",
        data: { seq: seq },
        url: './api/get_notice.php',
        success: function(resultData) {
            // console.log('[getNoticeView] resultData: ', resultData);
            var resultObj = JSON.parse(resultData);
            $('#notice-detail-title').text(resultObj.title);
            $('#notice-detail-content').html(resultObj.contents);

            $('#notice-detail-createdat').text('등록일 : ' + resultObj.created_at);
            $('#notice-detail-updatedat').text('수정일 : ' + resultObj.updated_at);
            $('#notice-detail-view').text('조회수 : ' + resultObj.view_count);

            $('#notice-detail-seq').val(resultObj.seq);

            openNoticePopup();
        },
        error: function() {}
    });
}

function openNoticePopup() {
    clearPopup();
    $('body').addClass('board_popup');
    $.fn.fullpage.setAllowScrolling(false);
}

function closeNoticePopup() {
    $('body').removeClass('board_popup');
    $.fn.fullpage.setAllowScrolling(true);
}

function openIntroducePopup() {
    clearPopup();
    $('body').addClass('section3_popup');
    $.fn.fullpage.setAllowScrolling(false);
}

function closeIntroducePopup() {
    $('body').removeClass('section3_popup');
    $.fn.fullpage.setAllowScrolling(true);
}

function clearPopup() {
    $('body').removeClass('section3_popup');
    $('body').removeClass('board_popup');
}

function openEventMapAllPopup() {
    var w = $(window).width();
    if (!$(".map_info").hasClass("use_ani")) $(".map_info").addClass("use_ani");

    $(".map_info").addClass("active");
    if (w <= 720) $("body").addClass("scroll_hidden map_fixed");

    $.fn.fullpage.setAllowScrolling(false);
}

function closeEventMapAllPopup() {
    if (!$(".map_info").hasClass("use_ani")) $(".map_info").addClass("use_ani");
    $(".map_info").removeClass("active");
    $("body").removeClass("scroll_hidden map_fixed");

    $.fn.fullpage.setAllowScrolling(true);
}

function resizeEventMap() {
    // if (window.innerWidth <= 768) {
    //     // 지도만
    //     var tempWidth = window.innerWidth * 10;
    //     var tempHeight = window.innerHeight * 7;
    //     if (tempWidth > tempHeight) {
    //         if (!(window.innerWidth > ($('.svg_wrap').width() + 30))) {
    //             var tempGap = tempWidth - tempHeight;
    //             var per = parseInt((tempGap + '').substr(0, 2), 10) + 10;
    //             var oriWidth = $('.svg_wrap').width();
    //             $('.svg_wrap').width(oriWidth - ((oriWidth * per) / 100));
    //         } else {
    //             $('.svg_wrap').width(window.innerWidth - 20);
    //         }

    //     } else {
    //         $('.svg_wrap').width(window.innerWidth - 20);
    //     }

    // } else {
    //     // 지도 + 일정

    // }
}

function getPopupInfo() {
    $.ajax({
        type: "GET",
        url: './api/get_popup.php',
        success: function(resultData) {
            // console.log('[getPopupInfo] resultData:: ', resultData);
            var resultObj = JSON.parse(resultData);
            // console.log('[getPopupInfo] resultObj:: ', resultObj);
            setPopupView(resultObj.popup)
        },
        error: function() {}
    });
}

var actionPpopup1 = function() {};
var actionPpopup2 = function() {};

function setPopupView(popupList) {
    for (let i = 0; i < popupList.length; i++) {
        let _item = popupList[i];
        let _index = i + 1;

        if (_item.use_yn == '1') {
            $('#main-popup' + _index + ' img').attr('src', _item.upload_path + _item.img_name_save);
            $('#main-popup' + _index + ' img').attr('download', _item.img_name);

            if (_index == 1) {
                if (_item.type == 'link') {
                    actionPpopup1 = function() { window.open(_item.param, '_blank'); };
                } else {
                    _popup1NoticeSeq = parseInt(_item.param, 10);
                    actionPpopup1 = popup1moveAndShowNotice;
                }
            } else {
                if (_item.type == 'link') {
                    actionPpopup2 = function() { window.open(_item.param, '_blank'); };
                } else {
                    _popup2NoticeSeq = parseInt(_item.param, 10);
                    actionPpopup2 = popup2moveAndShowNotice;
                }
            }

            $('#main-popup' + _index).show();
        } else {
            $('#main-popup' + _index + ' img').attr('src', '');
            $('#main-popup' + _index).hide();

            if (_index == 1) {
                actionPpopup1 = function() {};
            } else {
                actionPpopup2 = function() {};
            }
        }
    }
}

var _popup1NoticeSeq = 0;
var _popup2NoticeSeq = 0;

function popup1moveAndShowNotice() {
    closeMainPopup1();
    _moveAndShowNotice(_popup1NoticeSeq);
}

function popup2moveAndShowNotice() {
    closeMainPopup2();
    _moveAndShowNotice(_popup2NoticeSeq);
}

function _moveAndShowNotice(seq) {
    moveFullpage(8);

    setTimeout(function() {
        getNoticeView(seq);
    }, 1000);
}

function closeMainPopup1() {
    $('#main-popup1').hide();
}

function closeMainPopup2() {
    $('#main-popup2').hide();
}