<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<!-- <script type="text/javascript" src="./vendor/fullPage.js-2.9.7/dist/jquery.fullpage.js"></script> -->
<script type="text/javascript" src="./vendor/fullPage.js-2.9.7/dist/jquery.fullpage.copy.js"></script>
<!-- <script src="https://cdn.jsdelivr.net/npm/fullpage.js@2.9.7/dist/jquery.fullpage.min.js"></script> -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<script src="./js/artgg.infoWindow.js"></script>
<script src="./js/artgg.map.control.js"></script>

<script>
    $('#nav').hide();
    var __fullPage = null;
    $(document).ready(function() {
        AOS.init();
        
        __fullPage = $('#fullpage').fullpage({
            css3: true, 
            navigation: true,
            keyboardScrolling: true,
            fitToSection: true, 
            sectionSelector: '.fullpage-section',
            onLeave: function (origin, destination, direction) {
                if(destination == 1) {
                    $('#nav').hide();
                }
                else {
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
            afterLoad: function(origin, destination, direction){},
            // afterRender: function(){ $('.section ').height(window.innerHeight); $('.fp-tableCell').height(window.innerHeight); console.log('[afterRender]');},
            afterResize: function(width, height){ console.log('[afterResize]');},
            afterReBuild: function(){ console.log('[afterReBuild]');},
            afterResponsive: function(isResponsive){ console.log('[afterResponsive]');},
        });


        // 게시판 상세 팝업
        $('.board_list_inner tr').on('click', function (){
            $('body').addClass('board_popup');
        });
        // 게시판 팝업 닫기
        $('.popup_close').on('click', function (){
            $('body').removeClass('board_popup');
        });
        //모바일 lnb오픈
        $('.btn_allmenu').on('click', function (){
            $('.common_lnb_w').toggleClass('gnb_open');
            $(this).addClass('btn_gnb_close');
        });
    });

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

    // function _setFitFullpage() {
    //     $.fn.fullpage.setFitToSection(__isFitSection);
    // }
    
</script>
