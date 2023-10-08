/**
 * 개발 환경 지원 유틸리티 생성자
 * @static
 */
class STUDIO_ENV_UTIL {
  static isLocalServer() {
    return location.href.indexOf('localhost') >= 0 || location.href.indexOf('127.0.0.1') >= 0;
  };

  static isTestServer() {
    return location.href.indexOf('developers') >= 0;
  };

  static isRealServer() {
    return location.href.indexOf('s-studio.co.kr') >= 0;
  };

  static isInIframe() {
    try {
      return window.self !== window.top;
    }
    catch(error) {
      return true;
    };
  };

  static isMobile() {
    if(STUDIO_NAVIGATION_UTIL.getUrlParameterValue('agent') == 'mobile') {
      return true;
    }
    return ['Android', 'iOS'].indexOf(platform.os.family) >= 0;
  };

  static isAndroid() {
    return ['Android'].indexOf(platform.os.family) >= 0;
  };

  static isIOS() {
    return ['iOS'].indexOf(platform.os.family) >= 0;
  };

  static isEng() {
    return location.pathname.indexOf('/en/') >= 0;
  };
};