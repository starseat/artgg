/**
 * 네비게이션 지원 유틸리티 클래스
 * @static
 */
class STUDIO_NAVIGATION_UTIL {
  static navigate(targetUrl) {
    if(typeof targetUrl === 'string') {
      location.href = targetUrl;

      return false;
    }
    else {
      throw new TypeError('매개변수 타입이 String이 아닙니다.');
    }
  }

  static open(targetUrl, name, option) {
    if(typeof targetUrl === 'string' && typeof name === 'string' && typeof option === 'string') {
      window.open(targetUrl, name, option);
    }
    else {
      throw new TypeError('매개변수 타입이 String이 아닙니다.');
    };
  };

  static getHash() {
    return location.hash.substring(1);
  };

  static setHash(hash) {
    if (typeof hash === 'string') {
      location.hash = hash.length > 0 ? `#${hash}` : '';
    }
    else {
      throw new TypeError('매개변수 타입이 String이 아닙니다.');
    };
  };

  static getUrlParameterValue(key) {
    key = key.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");

    let regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
    let results = regex.exec(location.search);

    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, " "));
  };
};