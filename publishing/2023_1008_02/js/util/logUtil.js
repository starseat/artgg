/**
 * 로그 지원 유틸리티 클래스
 * @static
 */
class STUDIO_LOG_UTIL {
  static log(message) {
    if(STUDIO_ENV_UTIL.isLocalServer() || STUDIO_ENV_UTIL.isTestServer()) {
      if(typeof message === 'string') {
        console.log(`[${new Date().toUTCString()}] program-front-pc: ${JSON.stringify(message)}`);
      }
    };
  };

  static alert(message) {
    if(STUDIO_ENV_UTIL.isLocalServer() || STUDIO_ENV_UTIL.isTestServer()) {
      if(typeof message === 'string') {
        alert(message);
      }
      else {
        alert(JSON.stringify(message));
      };
    };
  };
};