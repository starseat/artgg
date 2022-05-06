<?php require_once('./fragment/header.php'); ?>

<div id="fullpage">
    <div id="section1" class="section fullpage-section">
        <!-- s:팝업 -->
        <div class="common_popup_w popup1" id="main-popup1">
            <div class="common_popup_inner" onclick="actionPpopup1()">
                <img src="./img/temp_img.png" alt="아트경기 첫번째 팝업 이미지">
            </div>
            <button type="button" class="popup_close" title="팝업 닫기" onclick="closeMainPopup1();">
                <span class="icon_close_x">
                    <svg width="20.707" height="20.707" viewBox="0 0 20.707 20.707">
                        <path id="close_x1" data-name="close_x1" d="M10,10,0,20,10,10,0,0,10,10,20,0,10,10,20,20Z" transform="translate(0.354 0.354)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1" />
                    </svg>
                </span>
            </button>
        </div>
        <div class="common_popup_w popup2" id="main-popup2">
            <div class="common_popup_inner" onclick="actionPpopup2()">
                <img src="./img/temp_img.png" alt="아트경기 두번째 팝업 이미지">
            </div>
            <button type="button" class="popup_close" title="팝업 닫기" onclick="closeMainPopup2();">
                <span class="icon_close_x">
                    <svg width="20.707" height="20.707" viewBox="0 0 20.707 20.707">
                        <path id="close_x2" data-name="close_x2" d="M10,10,0,20,10,10,0,0,10,10,20,0,10,10,20,20Z" transform="translate(0.354 0.354)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1" />
                    </svg>
                </span>
            </button>
        </div>
        <!-- E:팝업 -->

        <div class="section1_cont_w">
            <div class="intro_artgg_visual">
                <div class="section_inner">
                    <i class="sectionDim zoomIn"></i><!-- 뒷배경 커지는 dim -->
                    <div class="intro_logo">
                        <div class="slideUp">
                            <!-- 로고 slide up / data-aos="fade-up" data-aos-duration="3000" data-aos-anchor-placement="top-bottom"  -->
                            <img src="./img/intro_logo.png" alt="아트경기" class="intro_artgg_img">
                        </div>
                    </div>
                </div>
            </div>

            <a href="javascript:void(0);" class="icon_scroll_mouse" onclick="downFullpage(2);">
                <span class="icon_mouse">
                    <svg id="scroll1" xmlns="http://www.w3.org/2000/svg" width="28" height="74" viewBox="0 0 28 74">
                        <g id="intro_group1" data-name="intro_group1" transform="translate(-993 -937)" opacity="0.8">
                            <rect id="intro_svg_rect" data-name="intro_svg_rect" width="28" height="74" transform="translate(993 937)" fill="none" />
                            <g id="intro_svg_g" data-name="intro_svg_g" transform="translate(993 938)" fill="none" stroke="#000" stroke-width="2">
                                <rect width="28" height="48" rx="14" stroke="none" />
                                <rect x="1" y="1" width="26" height="46" rx="13" fill="none" />
                            </g>
                            <line id="intro_svg_line" data-name="intro_svg_line" y2="6" transform="translate(1007 948)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2" />
                            <g id="intro_svg_g2_1" data-name="intro_svg_g2_1" transform="translate(998 991.303) rotate(-45)">
                                <rect id="intro_svg_g2_1_rect01" data-name="intro_svg_g2_1_rect01" width="2" height="13" rx="1" transform="translate(0)" />
                                <rect id="intro_svg_g2_1_rect02" data-name="intro_svg_g2_1_rect02" width="2" height="13" rx="1" transform="translate(13.157 11.157) rotate(90)" />
                            </g>
                            <g id="intro_svg_g3_1" data-name="intro_svg_g3_1" transform="translate(998 1001.303) rotate(-45)">
                                <rect id="intro_svg_g3_1_rect01" data-name="intro_svg_g3_1_rect01" width="2" height="13" rx="1" transform="translate(0)" />
                                <rect id="intro_svg_g3_1_rect02" data-name="intro_svg_g3_1_rect02" width="2" height="13" rx="1" transform="translate(13.157 11.157) rotate(90)" />
                            </g>
                        </g>
                    </svg>
                </span>
            </a>
        </div>
    </div>

    <!-- S2: 아트경기 -->
    <div id="section2" class="section fullpage-section">
        <div class="section2_cont_w">
            <div class="intro_artgg_visual">
                <div class="section_inner">
                    <div class="intro_logo">
                        <img src="./img/intro_logo.png" alt="아트경기" class="intro_artgg_img">
                    </div>
                </div>
            </div>
            <div class="section2_title_w">
                <p class="section2_title_txt">
                    24시간<br />
                    365일<br />
                    오프라인에서 온라인까지<br />
                    경기도 작가의 미술품을<br />
                    <span class="text_marker">당신의 일상과 잇다</span>
                </p>
                <a href="javascript:void(0);" class="btn_quick_online page-move" onclick="moveFullpage(4);">
                    2021 아트경기<br />온라인 전시관<br />바로가기
                </a>
            </div>
            <a href="javascript:void(0);" class="icon_scroll_mouse" onclick="downFullpage(3);">
                <span class="icon_mouse">
                    <svg id="scroll2" xmlns="http://www.w3.org/2000/svg" width="28" height="74" viewBox="0 0 28 74">
                        <g id="intro_group2" data-name="intro_group2" transform="translate(-993 -937)" opacity="0.8">
                            <g id="intro_svg_g2_2" data-name="intro_svg_g2_2" transform="translate(998 991.303) rotate(-45)">
                                <rect id="intro_svg_g2_2_rect01" data-name="intro_svg_g2_2_rect01" width="2" height="13" rx="1" transform="translate(0)" />
                                <rect id="intro_svg_g2_2_rect02" data-name="intro_svg_g2_2_rect02" width="2" height="13" rx="1" transform="translate(13.157 11.157) rotate(90)" />
                            </g>
                            <g id="intro_svg_g3_2" data-name="intro_svg_g3_2" transform="translate(998 1001.303) rotate(-45)">
                                <rect id="intro_svg_g3_2_rect01" data-name="intro_svg_g3_2_rect01" width="2" height="13" rx="1" transform="translate(0)" />
                                <rect id="intro_svg_g3_2_rect02" data-name="intro_svg_g3_2_rect02" width="2" height="13" rx="1" transform="translate(13.157 11.157) rotate(90)" />
                            </g>
                        </g>
                    </svg>
                </span>
            </a>
        </div>

    </div>

    <!-- S3: 아트경기소개 -->
    <div id="section3" class="section fullpage-section">
        <div class="section3_cont_w">
            <div class="section_inner">
                <div class="section_cont">
                    <strong class="section_title">
                        <span>경기 미술품 활성화 사업</span>아트경기 소개
                    </strong>
                    <div class="article_introduce_w">
                        <!-- 좌측 : 텍스트 영역 -->
                        <div class="introduce_text_group">
                            <div class="text_group">
                                <strong>예술가의 창작 활동을 지원합니다</strong>
                                <p>
                                    경기도와 경기문화재단이 주최하는 경기 미술품 활성화 사업(아트경기)
                                    은 경기도 예술가의 지속적인 창작 활동과 건강한 미술시장의 발전을
                                    위합니다. 2022 아트경기는 경기도 지역에서 활발하게 활동 중인 시각
                                    예술분야 작가 50인을 선정, 경기도 내외 오프라인부터 온라인까지 다양한
                                    행사를 통해 작품을 선보입니다.
                                </p>
                            </div>
                            <div class="text_group">
                                <strong>건강한 미술시장을 희망합니다</strong>
                                <p>
                                    아트경기는 미술시장을 구성하는 창작, 유통, 향유 세 분야의 순환에
                                    주목하여 예술이 일상이 되는 경기도를 만들어가고자 합니다.
                                    “위대한 작품은 탄생하는 것이 아니라 인위적으로 만들어진다”라는
                                    예술사회학자 세라 손튼(Sarah Thornton)의 말처럼, 세대를 걸쳐
                                    사랑받는 작품이 등장하기에는 미술시장의 역할이 무엇보다 중요합니다.
                                </p>
                            </div>
                            <div class="text_group">
                                <strong>우리의 일상을 예술로 이어줍니다</strong>
                                <p>
                                    미술장터, 팝업갤러리, 공공기관 미술품 임대전시, 아트페어, 온라인
                                    사업으로 구성된 이번 아트경기 는 경기도 내외 다양한 지역에서
                                    경기도 작가의 작품을 선보입니다. 경기도 예술인의 작품이 개인의 곁에
                                    스며들어 예술과 함께하는 삶이 될 수 있기를 기대합니다.
                                </p>
                            </div>
                        </div>
                        <!-- 우측 : 폼,영상 -->
                        <div class="introduce_form_w">
                            <!-- <div class="introduce_form"></div> -->
                            <div class="introduce_btn">
                                <a href="javascript:void(0);" class="introduce_btn_link" id="introduceDetailBtn" onclick="openIntroducePopup()">
                                    <img src="./img/section3_introduce_btn.png" alt="자세히보기">
                                </a>
                            </div>
                            <div class="introduce_player" id="target_youtube_box">
                                <!-- <iframe id="target_youtube_view" width="510" height="300" src="https://www.youtube.com/embed/3riELB0MHYM?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                                <iframe id="target_youtube_view" width="510" height="300" src="https://www.youtube.com/embed/iU_LGwV5xPs?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <a href="javascript:void(0);" class="icon_scroll_mouse" onclick="downFullpage(4);">
                        <span class="icon_mouse">
                            <svg id="scroll3" xmlns="http://www.w3.org/2000/svg" width="28" height="74" viewBox="0 0 28 74">
                                <g id="intro_group3" data-name="intro_group3" transform="translate(-993 -937)" opacity="0.8">
                                    <g id="intro_svg_g2_3" data-name="intro_svg_g2_3" transform="translate(998 991.303) rotate(-45)">
                                        <rect id="intro_svg_g2_3_rect01" data-name="intro_svg_g2_3_rect01" width="2" height="13" rx="1" transform="translate(0)" />
                                        <rect id="intro_svg_g2_3_rect02" data-name="intro_svg_g2_3_rect02" width="2" height="13" rx="1" transform="translate(13.157 11.157) rotate(90)" />
                                    </g>
                                    <g id="intro_svg_g3_3" data-name="intro_svg_g3_3" transform="translate(998 1001.303) rotate(-45)">
                                        <rect id="intro_svg_g3_3_rect01" data-name="intro_svg_g3_3_rect01" width="2" height="13" rx="1" transform="translate(0)" />
                                        <rect id="intro_svg_g3_3_rect02" data-name="intro_svg_g3_3_rect02" width="2" height="13" rx="1" transform="translate(13.157 11.157) rotate(90)" />
                                    </g>
                                </g>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <!-- 모바일 레이어 팝업 -->
        <div class="layer_popup_w detail_popup">
            <div class="detaile_view_w">
                <div class="introduce_text_group">
                    <div class="text_group">
                        <strong>예술가의 창작 활동을 지원합니다</strong>
                        <p>
                            경기도와 경기문화재단이 주최하는 경기 미술품 활성화 사업(아트경기)
                            은 경기도 예술가의 지속적인 창작 활동과 건강한 미술시장의 발전을
                            위합니다. 2022 아트경기는 경기도 지역에서 활발하게 활동 중인 시각
                            예술분야 작가 50인을 선정, 경기도 내외 오프라인부터 온라인까지 다양한
                            행사를 통해 작품을 선보입니다.
                        </p>
                    </div>
                    <div class="text_group">
                        <strong>건강한 미술시장을 희망합니다</strong>
                        <p>
                            아트경기는 미술시장을 구성하는 창작, 유통, 향유 세 분야의 순환에
                            주목하여 예술이 일상이 되는 경기도를 만들어가고자 합니다.
                            “위대한 작품은 탄생하는 것이 아니라 인위적으로 만들어진다”라는
                            예술사회학자 세라 손튼(Sarah Thornton)의 말처럼, 세대를 걸쳐
                            사랑받는 작품이 등장하기에는 미술시장의 역할이 무엇보다 중요합니다.
                        </p>
                    </div>
                    <div class="text_group">
                        <strong>우리의 일상을 예술로 이어줍니다</strong>
                        <p>
                            미술장터, 팝업갤러리, 공공기관 미술품 임대전시, 아트페어, 온라인
                            사업으로 구성된 이번 아트경기 는 경기도 내외 다양한 지역에서
                            경기도 작가의 작품을 선보입니다. 경기도 예술인의 작품이 개인의 곁에
                            스며들어 예술과 함께하는 삶이 될 수 있기를 기대합니다.
                        </p>
                    </div>
                </div>
                <div class="introduce_form"></div>
            </div>
            <button type="button" class="popup_close" title="팝업 닫기" onclick="closeIntroducePopup()">
                <span class="icon_close_x">
                    <svg width="20.707" height="20.707" viewBox="0 0 20.707 20.707">
                        <path id="close_x3" data-name="close_x3" d="M10,10,0,20,10,10,0,0,10,10,20,0,10,10,20,20Z" transform="translate(0.354 0.354)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1" />
                    </svg>
                </span>
            </button>
        </div>
    </div>

    <!-- S4 : 온라인 전시관 -->
    <div id="section4" class="section fullpage-section">
        <div class="section4_cont_w">
            <div class="section_inner">
                <div class="article_gallery_w">
                    <a href="./gallery" class="online_gallery_inner" target="_blank">
                        <div class="online_gallery_cont">
                            <div class="spinner-block">
                                <span class="gallery_enter">온라인 전시관<br />입장하기</span>
                                <div class="spinner spinner-3"></div>
                            </div>
                            <strong>2021 아트경기 작가의 작품을 <br />실감형 온라인 전시관에서 만나보세요.</strong>
                        </div>
                    </a>
                    <a href="https://ebooknara.com/ebook/artgg/09/" id="section4-ebook-link" target="_blank">E-도록 보기</a>
                </div>
                <a href=" javascript:void(0);" class="icon_scroll_mouse" onclick="downFullpage(5);">
                    <span class="icon_mouse">
                        <svg id="scroll4" xmlns="http://www.w3.org/2000/svg" width="28" height="74" viewBox="0 0 28 74">
                            <g id="intro_group4" data-name="intro_group4" transform="translate(-993 -937)" opacity="0.8">
                                <g id="intro_svg_g2_4" data-name="intro_svg_g2_4" transform="translate(998 991.303) rotate(-45)">
                                    <rect id="intro_svg_g2_4_rect01" data-name="intro_svg_g2_4_rect01" width="2" height="13" rx="1" transform="translate(0)" />
                                    <rect id="intro_svg_g2_4_rect02" data-name="intro_svg_g2_4_rect02" width="2" height="13" rx="1" transform="translate(13.157 11.157) rotate(90)" />
                                </g>
                                <g id="intro_svg_g3_4" data-name="intro_svg_g3_4" transform="translate(998 1001.303) rotate(-45)">
                                    <rect id="intro_svg_g3_4_rect01" data-name="intro_svg_g3_4_rect01" width="2" height="13" rx="1" transform="translate(0)" />
                                    <rect id="intro_svg_g3_4_rect02" data-name="intro_svg_g3_4_rect02" width="2" height="13" rx="1" transform="translate(13.157 11.157) rotate(90)" />
                                </g>
                            </g>
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    </div>

    <!-- S7 : 이벤트참여 -->
    <div id="section7" class="section fullpage-section">
        <div class="section7_cont_w">
            <div class="section_inner">
                <div class="section_cont">
                    <div class="slick_slide_list">
                        <div class="slick_list_inner">
                            <a href="https://www.instagram.com/p/CUlmZjahsgJ/?utm_medium=copy_link" class="slick_list_cont event-box" target="_blank">
                                <div class="module_box_w_type1">
                                    <div class="mb_image_w section7-media-box">
                                        <div class="mb_image_inner">
                                            <img src="./img/event_post.jpg" class="mb_image" alt="이벤트 포스트">
                                        </div>
                                    </div>
                                    <div class="mb_info_w">
                                        <div class="mb_infoline_inner">
                                            <!-- <span class="label_dott bgcolor_pink"></span> -->
                                            <div class="mbif_text">
                                                ↑ 클릭하면 아트경기 인스타그램으로 이동합니다. ↑
                                            </div>
                                            <span class="mbif_date">
                                                <!--2020.10.23~11.1-->
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="javascript:void(0);" class="slick_list_cont" id="instargram-link" target="_blank">
                                <span class="slick_slide_stext">아트경기 인스타그램(@artgg_official)</span>
                                <div class="module_box_w_type1">
                                    <div class="mb_image_w section7-media-box">
                                        <div class="mb_image_inner">
                                            <img id="instargram-media" src="./img/instagram_icon.png" class="mb_image" alt="artgg instargram image">
                                        </div>
                                        <!-- 인스타 아이콘 -->
                                        <div class="sns_icon_instar">
                                            <svg width="24" height="24" viewBox="0 0 24 24">
                                                <g id="svg_instar_g" data-name="svg_instar_g" transform="translate(-3248.661 -6977.979)">
                                                    <g id="svg_instar_g2" data-name="svg_instar_g2" transform="translate(3248.661 6977.979)" fill="none" stroke="#fff" stroke-width="1.5">
                                                        <rect width="24" height="24" rx="6" stroke="none" />
                                                        <rect x="0.75" y="0.75" width="22.5" height="22.5" rx="5.25" fill="none" />
                                                    </g>
                                                    <g id="svg_instar_g3" data-name="svg_instar_g3" transform="translate(3255.661 6984.979)" fill="none" stroke="#fff" stroke-width="1.5">
                                                        <circle cx="5" cy="5" r="5" stroke="none" />
                                                        <circle cx="5" cy="5" r="4.25" fill="none" />
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="mb_info_w">
                                        <div class="mb_infoline_inner">
                                            <div class="mbif_text" id="instargram-text"></div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <a href="javascript:void(0);" class="icon_scroll_mouse" onclick="downFullpage(8);">
                    <span class="icon_mouse">
                        <svg id="scroll7" xmlns="http://www.w3.org/2000/svg" width="28" height="74" viewBox="0 0 28 74">
                            <g id="intro_group7" data-name="intro_group7" transform="translate(-993 -937)" opacity="0.8">
                                <g id="intro_svg_g2_7" data-name="intro_svg_g2_7" transform="translate(998 991.303) rotate(-45)">
                                    <rect id="intro_svg_g2_7_rect01" data-name="intro_svg_g2_7_rect01" width="2" height="13" rx="1" transform="translate(0)" />
                                    <rect id="intro_svg_g2_7_rect02" data-name="intro_svg_g2_7_rect02" width="2" height="13" rx="1" transform="translate(13.157 11.157) rotate(90)" />
                                </g>
                                <g id="intro_svg_g3_7" data-name="intro_svg_g3_7" transform="translate(998 1001.303) rotate(-45)">
                                    <rect id="intro_svg_g3_7_rect01" data-name="intro_svg_g3_7_rect01" width="2" height="13" rx="1" transform="translate(0)" />
                                    <rect id="intro_svg_g3_7_rect02" data-name="intro_svg_g3_7_rect02" width="2" height="13" rx="1" transform="translate(13.157 11.157) rotate(90)" />
                                </g>
                            </g>
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    </div>

    <!-- S8 : 공지사항 -->
    <div id="section8" class="section fullpage-section">
        <div class="section8_cont_w">
            <div class="section_inner">
                <div class="board_list_w">
                    <?php if (isset($_SESSION['is_login']) && !empty($_SESSION['is_login']) && $_SESSION['is_login'] == 1) { ?>
                        <a href="./admin/write.php" class="admin_writer" target="_blank">글쓰기</a>
                    <?php } ?>
                    <div class="board_list_inner">
                        <table id="notice-table">
                            <colgroup>
                                <col />
                                <col />
                                <col />
                                <col />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">제목<span>/등록일</span> </th>
                                    <th scope="col">등록일</th>
                                    <th scope="col">조회수</th>
                                </tr>
                            </thead>
                            <tbody id="notice-list">
                            </tbody>
                        </table>
                    </div>
                    <div class="board_list_paging" id="notice-paging">
                    </div>

                    <!-- board layer popup -->
                    <div class="layer_popup_w">
                        <strong class="popup_title" id="notice-detail-title"></strong>
                        <div class="popup_date_w">
                            <span class="date_text" id="notice-detail-createdat"></span>
                            <span class="date_text">/</span>
                            <span class="date_text" id="notice-detail-updatedat"></span>
                            <span class="date_text">/</span>
                            <span class="date_text" id="notice-detail-view"></span>
                            <?php if (isset($_SESSION['is_login']) && !empty($_SESSION['is_login']) && $_SESSION['is_login'] == 1) { ?>
                                <span class="date_text">/</span>
                                <button type="button" class="date_text" id="notice-update">수정하기</button>
                            <?php } ?>
                        </div>
                        <input type="hidden" id="notice-detail-seq" value="0">
                        <div class="popup_text_w">
                            <div class="popup_text" id="notice-detail-content"></div>
                        </div>
                        <button type="button" class="popup_close" title="팝업 닫기" onclick="closeNoticePopup();">
                            <span class="icon_close_x">
                                <svg width="20.707" height="20.707" viewBox="0 0 20.707 20.707">
                                    <path id="close_x4" data-name="close_x4" d="M10,10,0,20,10,10,0,0,10,10,20,0,10,10,20,20Z" transform="translate(0.354 0.354)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- S9 : 푸터 -->
    <div id="section9" class="fp-auto-height fullpage-section">
        <!-- fullpage-section -->
        <!-- footer 영역 -->
        <div class="footer" id="footer">
            <div class="footer_list_w">
                <div class="footer_logo_list">
                    <a href="javascript:void(0);" class="footer_logo_cont">
                        <span class="flc_01"><img src="./img/logo_gyeonggi.png" alt="새로운경기,공정한세상"></span>
                    </a>
                    <a href="javascript:void(0);" class="footer_logo_cont">
                        <span class="flc_02"><img src="./img/logo_ggcf.png" alt="경기문화재단"></span>
                    </a>
                </div>
                <div class="footer_text_list">
                    <div class="footer_text_cont">
                        <span class="ftc_01">문의 T.031-231-7237~8</span>
                    </div>
                    <div class="footer_text_cont">
                        <span class="ftc_01">artgg@ggcf.or.kr</span>
                    </div>
                    <div class="copy">
                        <span class="footer_text_cont">Copyright ⓒ 아트경기</span>
                        <span class="footer_text_cont">Art Gyeonggi</span>
                    </div>
                </div>
                <!-- sns -->
                <div class="footer_sns_list">
                    <a href="https://www.facebook.com/artgg.official" class="footer_sns_cont" target="_blank">
                        <span class="icon_sns_facebook">
                            <svg width="32" height="32" viewBox="0 0 32 32">
                                <g id="Facebook-f_Logo-Blue-Logo.wine" transform="translate(0 -3)">
                                    <rect id="svg_fb_rect" data-name="svg_fb_rect" width="32" height="32" transform="translate(0 3)" fill="none" />
                                    <path id="svg_fb_path" data-name="svg_fb_path" d="M415.507,281.1l.712-4.643h-4.455v-3.013a2.321,2.321,0,0,1,2.617-2.508h2.025v-3.953a24.7,24.7,0,0,0-3.6-.314c-3.669,0-6.067,2.224-6.067,6.249v3.539h-4.078V281.1h4.078v11.224a16.236,16.236,0,0,0,5.019,0V281.1h3.742" transform="translate(-393.667 -260.667)" fill="#fff" />
                                </g>
                            </svg>
                        </span>
                    </a>
                    <a href="https://www.instagram.com/artgg_official" class="footer_sns_cont" target="_blank">
                        <span class="icon_sns_instargram">
                            <svg width="32" height="32" viewBox="0 0 32 32">
                                <g id="svg_instargram_group" data-name="svg_instargram_group" transform="translate(-3254.661 -6989.661)">
                                    <rect id="svg_instargram_rect" data-name="svg_instargram_rect" width="32" height="32" transform="translate(3254.661 6989.661)" fill="none" />
                                    <g id="svg_instargram_g" data-name="svg_instargram_g" transform="translate(3254.661 6989.661)" fill="none" stroke="#fff" stroke-width="2">
                                        <rect width="32" height="32" rx="10" stroke="none" />
                                        <rect x="1" y="1" width="30" height="30" rx="9" fill="none" />
                                    </g>
                                    <g id="svg_instargram_g2" data-name="svg_instargram_g2" transform="translate(3263.661 6998.661)" fill="none" stroke="#fff" stroke-width="2.5">
                                        <circle cx="7" cy="7" r="7" stroke="none" />
                                        <circle cx="7" cy="7" r="5.75" fill="none" />
                                    </g>
                                    <circle id="svg_instargram_circle" data-name="svg_instargram_circle" cx="1.5" cy="1.5" r="1.5" transform="translate(3277.661 6995.661)" fill="#fff" />
                                </g>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <!-- footer 끝 -->
    </div>
</div>


<?php require_once('./fragment/footer.php'); ?>

<?php if (isset($_SESSION['is_login']) && !empty($_SESSION['is_login']) && $_SESSION['is_login'] == 1) { ?>
    <script>
        $(document).ready(function() {
            $('#notice-update').on('click', function() {
                var url = './admin/write.php?seq=' + $('#notice-detail-seq').val();
                window.open(url, '_blank');
            });
        });
    </script>
<?php } ?>
<?php require_once('./fragment/tail.php'); ?>