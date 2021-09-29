/**
 * artgg.infoWindow.js
 * 지역별 정보창
 */

function InfoWindow(
    selector,
    info
) {
    this.selector = $(selector);
    this.popLayer = "";
    this.info = info;
    this.bg = ""
    this.closeBtn = "";

    this.init();
}

(function($) {
    $.setInfoWindowOptions = {
        info: {}
    };
    $.fn.infoWindow = function(options) {
        options = $.extend(null, $.setInfoWindowOptions, options);
        this.each(function(index) {
            var infoWindow = new InfoWindow(
                this,
                options.info
            );

        });
        return this;
    };
})(jQuery);

$.extend(InfoWindow.prototype, {
    init: function() {
        this.drawLayout();
        this.addEvent();
    },
    drawLayout: function() {
        var dom = '<div class="layer_pop">'
        dom += '<div class="layer_bg"></div>'
        dom += '<div class="container">'
        dom += '<span class="btn_close">Close</span>'
        dom += '<div class="container_info">'
        dom += '<div class="photo">'
        dom += '<img src="' + this.info.photo + '" alt="img">'
        dom += '</div>'
        dom += '<div class="info_box">'
        dom += '<div class="infos">'
        dom += '<div class="info-row info_title"><span class="title">' + this.info.title + '</span><span class="date">' + this.info.date + '</span></div>'
        dom += '<div class="info-row info_area">' + this.info.place.label
        if (this.info.place.urls.length > 0) {
            for (var i = 0; i < this.info.place.urls.length; i++) {
                dom += '<span class="link">(' + this.info.place.urls[i].label + ' : <a href="' + this.info.place.urls[i].url + '" target="_blank">' + this.info.place.urls[i].url + '</a>)</span>'
            }
        }
        if (this.info.place.places.length > 0) {
            dom += '<div class="info_area_list">'
            dom += '<ol>'
            for (var i = 0; i < this.info.place.places.length; i++) {
                dom += '<li>' + this.info.place.places[i] + '</li>'
            }
            dom += '</ol>'
            dom += '</div>'
        }
        dom += '</div>'
        dom += '<div class="info-row cooperation">' + this.info.cooperation + '</div>'
        dom += '<div class="info-row detail_info about">'
        dom += '<div class="info">' + this.info.about + '</div>'
        dom += '</div>'
        if (this.info.tip.length > 0) {
            dom += '<div class="info-row detail_info tip">'
            dom += '<div class="title">즐겨보기 TIP!</div>'
            dom += '<div class="info">'
            dom += '<ol>'
            for (var i = 0; i < this.info.tip.length; i++) {
                dom += '<li><strong>' + this.info.tip[i].label +
                    '</strong>' + this.info.tip[i].info + '</li>'
            }
            dom += '</ol>'
            dom += '</div>'
            dom += '</div>'
        }
        if (this.info.more !== '') {
            dom += '<div class="info-row detail_info more_link">'
            dom += '(더보기) <a href="' + this.info.more + '" target="_blank">' + this.info.more + '</a>'
            dom += '</div>'
        }
        dom += '</div></div></div></div></div>'

        $("body").append(dom);
        this.popLayer = this.selector.find(".layer_pop");
        this.bg = this.selector.find(".layer_bg");
        this.closeBtn = this.selector.find(".btn_close");
    },
    remove: function() {
        this.selector.find(".container").addClass("remove");
        $("body").removeClass("scroll_hidden");
        this.popLayer.fadeOut(400, function() {
            $(this).remove();
        });
    },
    addEvent: function() {
        var _this = this;
        this.bg.on('click', function() {
            _this.remove();
        });
        this.closeBtn.on('click', function() {
            _this.remove();
        });
    },
});