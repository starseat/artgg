/*
 * 퍼블리셔용
 */

//팝업
function modulePopup(){
    //전시개요 보기
    $(".overviewLink").on('click', function() {
        $(".overview_right").addClass('mobileShow');
    });
    $(".btnClose").on('click', function() {
        $(this).parents(".overview_right").removeClass('mobileShow');
    });
}
//모바일 전체메뉴
function allMenu(){ 
    $(".hamburger").on('click', function() {
        $(".menuList_w").toggleClass('menuOpen');
        $(".hamburger").toggleClass('is-active');
    });
    
}


