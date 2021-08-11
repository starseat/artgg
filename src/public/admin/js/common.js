
// document.querySelector('#btn-admin-logout').addEventListener('click', (e) => {
// 	e.preventDefault();
// 	e.stopPropagation();
// 	location.href = '/administrator/auth/logout';
// });

const JWSwiper = (function make_b64(){
    const initSwiper = function(mode) {
        const swiperOption = {
            // spaceBetween: 30,
            centeredSlides: true,
            lazy: true,
            loop: true,
            // loopFillGroupWithBlank: true,
            // autoplay: {
            //     delay: 2500,
            //     disableOnInteraction: false,
            // },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
    
            // Enable debugger
            //debugger: true,
        };
    
        var swiper = null;
        if (mode == 'youtube') {
            _initSwiper_youtube();
    
            swiper = new Swiper('.swiper-container', swiperOption).on('slideChange', function () {
                var isVideo = swiper.slides[swiper.previousIndex].querySelector('.swiper-video-container');
                if (isVideo) {
                    YT.get(isVideo.querySelector('iframe').id).stopVideo();
                    //console.log(isVideo.querySelector('iframe').id);
                }
            });
        } else {
            // Init Swiper
            swiper = new Swiper('.swiper-container', swiperOption);
        }

        return swiper;
    } // end of initSwiper()

    const _initSwiper_youtube = function() {
        // This code loads the IFrame Player API code asynchronously.
        let tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        var initPlayer = function (element) {
            var player = element.querySelector('.swiper-video-iframe');
            var button = element.querySelector('.swiper-video-play');
            var ytplayer = new YT.Player(player, {
                playerVars: {
                    'autoplay': 0,
                    'modestbranding': 1,
                    'controls': 0,
                    'rel': 0,
                },
                videoId: element.dataset.id
            });

            button.addEventListener('click', function () {
                //console.log(ytplayer);
                //console.log(ytplayer.getPlayerState());
                ytplayer.playVideo();
                switch (ytplayer.getPlayerState()) {
                    case 1: {
                        ytplayer.stopVideo();
                    }
                    break;
                default: {
                    ytplayer.playVideo();
                }
                break;
                }
            });
        };

        // This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        window.onYouTubePlayerAPIReady = function () {
            var container = document.querySelectorAll('.swiper-video-container');
            for (var i = 0; i < container.length; i++) {
                initPlayer(container[i])
            }
        };
    } // endof initSwiper_youtube();

	return {
		initSwiper: initSwiper, 
	};
})();

function readURL(input, previewElId) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#' + previewElId).attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
}

function getParameter(name) {
    var rtnval = '';
    var nowAddress = unescape(location.href);
    var parameters = (nowAddress.slice(nowAddress.indexOf('?') + 1, nowAddress.length)).split('&');

    for (var i = 0; i < parameters.length; i++) {
        var varName = parameters[i].split('=')[0];
        if (varName.toUpperCase() == name.toUpperCase()) {
            rtnval = parameters[i].split('=')[1];
            break;
        }
    }

    return rtnval;
}

function isEmpty(param) {
    // 일반적인 비어있는지 검사
    if (!param || param == null || param == undefined || param == '' || param.length == 0) {
        return true;
    }
    // Object 인데 비어 있을 수 있으므로 ( param = {}; )
    else {
        // object 형 이라면
        if (String(typeof param).toLowerCase() === 'object') {
            // key 를 추출하여 key length 검사
            if (Object.keys(param).length === 0) {
                return true;
            } else {
                return false;
            }
        }
    }
};

function isNumeric(num, opt) {
    // 좌우 trim(공백제거)을 해준다.
    num = String(num).replace(/^\s+|\s+$/g, "");

    if (typeof opt == "undefined" || opt == "1") {
        // 모든 10진수 (부호 선택, 자릿수구분기호 선택, 소수점 선택)
        var regex = /^[+\-]?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
    } else if (opt == "2") {
        // 부호 미사용, 자릿수구분기호 선택, 소수점 선택
        var regex = /^(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
    } else if (opt == "3") {
        // 부호 미사용, 자릿수구분기호 미사용, 소수점 선택
        var regex = /^[0-9]+(\.[0-9]+)?$/g;
    } else {
        // only 숫자만(부호 미사용, 자릿수구분기호 미사용, 소수점 미사용)
        var regex = /^[0-9]$/g;
    }

    if (regex.test(num)) {
        num = num.replace(/,/g, "");
        return isNaN(num) ? false : true;
    } else {
        return false;
    }
}

function getImageUploadDefaultOption() {
    return {
        extensions: [
            '.jpg', '.jpeg', '.png', '.gif',
            '.JPG', '.JPEG', '.PNG', '.GIF'
        ],
        mimes: ['image/jpeg', 'image/png', 'image/gif'],
        maxFiles: 1,
    };
}

function getSummernoteDefaultOption() {
    return {
        tabsize: 2,
        height: 200,
        toolbar: [
            ['style', ['style']],
            ['insert', ['link', 'table', 'hr']],
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough', 'superscript', 'subscript']],
            ['fontsize', ['fontsize']],
            // ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']]
        ],
        lang: 'ko-KR', 
        // fontSizes: [8, 9, 10, 11, 12, 14, 16, 18, 24, 28, 32, 36] // fontsize 제거 - 에디터가 고장남...
    };
}

function setActiveNavMenu(pageName) {
    const navList = $('.nav-link');
    for(let i=0; i<navList.length; i++) {
        let $targetNav = $(navList[i]);
        let navPageName = $targetNav.attr('href');
        if(navPageName == pageName) {
            $targetNav.addClass('active');
            break;
        }
    }
}

function getYoutubeId(url) {
    let retId = '';

    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const matchs = url.match(regExp);
    if (matchs) {
        retId = matchs[7];
    }
    return retId;
}
