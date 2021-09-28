(function(global, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function($) {
            return factory($, global, global.document, global.Math);
        });
    } else if (typeof exports === "object" && exports) {
        module.exports = factory(require('jquery'), global, global.document, global.Math);
    } else {
        factory(jQuery, global, global.document, global.Math);
    }
})(typeof window !== 'undefined' ? window : this, function($, window, document, Math, undefined) {
    'use strict';

    var $window = $(window);
    var $document = $(document);


    var anchors = [];
    var total_section = 0; //전체 원페이지 수
    var current_idx = 0;
    var screen_h = 0; // 화면 높이
    var page_h = 0;
    var last_y = 0; // 스크롤 마지막 하단 높이
    var onpage_on = true;
    var isScroll = false;
    var scrollId = 0;
    var resizeId = 0;

    // var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
    // var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));

    console.log(1);
    $.fn.jwPageScroll = function(options) {
        console.log('2-1');
        // common jQuery objects
        var $htmlBody = $('html, body');
        var $body = $('body');
        var $container = $(this);

        var FP = $.fn.jwPageScroll;

        if ($(this).length) {
            console.log('2-2');
            init();

        }

        function init() {
            console.log('[init] enter..');
            $(document).ready(function() {
                resizeHandler();

                total_section = $container.find('[jw-data-anchor]').length;
                console.log('[init] total_section : ', total_section);
                last_y = page_h * total_section;
                console.log('[init] last_y : ', last_y);

                bindEvents();
            });
        }

        function bindEvents() {
            console.log('[bindEvents] enter..');
            $body.on('scroll touchmove mousewheel DOMMouseScroll', scrollHandler);
            console.log('[bindEvents] before resize..');
            $window.resize(resizeHandler);
        }

        function scrollHandler(event) {
            if (last_y > $("html").scrollTop() && !onpage_on) {
                onpage_on = true;
                isScroll = false;
            }

            if (!onpage_on) return;

            event.preventDefault();
            event.stopPropagation();
            if (isScroll) return;
            isScroll = true;

            var y = 0;
            var direction = event.originalEvent.wheelDelta;

            if (direction > 0) {
                // up
                current_idx--;
                if (current_idx < 0) {
                    current_idx = -1;
                }
                y = current_idx * page_h;
            } else {
                // down
                current_idx++;
                if (current_idx > total_section) {
                    current_idx = total_section;
                    onpage_on = false;
                    return;
                }

                y = current_idx * page_h;
            }

            clearTimeout(scrollId);
            scrollId = setTimeout(function() {
                $body.animate({
                    scrollTop: y
                }, 500, function() {
                    isScrolling = false;
                });
            }, 100);
        }
    }

    function resizeHandler() {
        clearTimeout(resizeId);
        resizeId = setTimeout(function() {
            screen_h = document.body.clientHeight;
            console.log('[resizeHandler] screen_h: ', screen_h);
            page_h = screen_h;
            console.log('[resizeHandler] page_h: ', page_h);
            $('[jw-data-anchor]').height(page_h);
        }, 350);
    }
});