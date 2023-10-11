/**
 * 스트립트 로더 함수 ( 스크립트 및 스타일 동적 로딩 )
 * Created by whfkdakf75@sbs.co.kr on 2019-01-31.
 * scriptLoader
 */
(function ($) {
  $.fn.scriptLoader = function (callback) {
    if (isIE () && isIE () < 9) {
      location.href = "//oops.cloud.sbs.co.kr/browser.html"
    }
    // debug check
    var degugValue = getUrlParameter('debug');
    var debug = degugValue === 'true' ? '' : '.min';

    //device check
    var device = ['Android', 'iOS'].indexOf(platform.os.family) >= 0 ? 'mobile' : 'pc';
    var agentValue = getUrlParameter('agent');
    if(agentValue != '') {
      agentValue = agentValue == 'mobile' ? 'mobile' : 'pc';
      device = agentValue;
    }
    //동적 주소
    var css = '/css/cnbc-front-' + device + '-1.0.0.min.css';
    var js = '/js/cnbc-front-' + device + '-1.0.0' + debug + '.js';

    // preload-css 정의
    var preload_css = document.createElement('link');
    preload_css.rel = 'preload';
    preload_css.href = css;
    preload_css.as = 'style';
    document.getElementsByTagName('head')[0].appendChild(preload_css);

    // preload-script 정의
    var preload_script = document.createElement('link');
    preload_script.rel = 'preload';
    preload_script.href = js;
    preload_script.as = 'script';
    document.getElementsByTagName('head')[0].appendChild(preload_script);

    // 동적 호출 ( 호출 완료 확인을 위한 onload 사용 )
    var style = document.createElement('link');
    style.href = css;
    style.type = 'text/css';
    style.rel = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild(style);
    style.onload = function () {
      var script = document.createElement('script');
      script.src = js;
      script.type = 'text/javascript';
      script.defer = true;
      document.getElementsByTagName('head')[0].appendChild(script);
      script.onload = function () {
        callback(device);
      };
    };

    function isIE () {
      var myNav = navigator.userAgent.toLowerCase();
      return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
    }

    function getUrlParameter(key) {
      var key = key.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
      var results = regex.exec(location.search);

      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
  };
})(jQuery);
