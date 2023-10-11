/*
 * 퍼블리셔용
 */

//팝업
function modulePopup(){
    //전시개요 보기
    $(".overviewLink").on('click', function() {
        $(".overview_right").addClass('mobileShow');
    });
    //전시개요 보기 X
    $(".btnClose").on('click', function() {
        $(this).parents(".overview_right").removeClass('mobileShow');
    });
    //map 팝업
    $(".mapInfoList_cont").on('click', function() {
        $(".artistArea_w").addClass('mobileShow');
    });
    //map 팝업 X
    $(".btnClose").on('click', function() {
        $(this).parents(".artistArea_w").removeClass('mobileShow');
    });
    
}
//모바일 전체메뉴
function allMenu(){ 
    $(".hamburger").on('click', function() {
        $(".menuList_w").toggleClass('menuOpen');
        $(".hamburger").toggleClass('is-active');
    });
    
}


