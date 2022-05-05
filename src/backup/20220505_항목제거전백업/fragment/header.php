<?php
require_once('head.php');
?>

<!-- body 클래스 추가
1. section2갔을때 클래스추가 fixed
2. 지도갔을때클래스추가 scroll-map
3.
-->

<body class="fixed">

    <!--  GNB -->
    <nav id="nav" class="common_lnb_w">
        <!-- 모바일 gnb 오픈 gnb_open -->
        <?php if (isset($_SESSION['is_login']) && !empty($_SESSION['is_login']) && $_SESSION['is_login'] == 1) { ?>
            <button class="admin_popup" onclick="javascript: location.href='./admin/popup.php';">팝업</button>
            <button class="admin_logout" onclick="javascript: location.href='./admin/action/logout.php';">로그아웃</button>
        <?php } ?>
        <h1 class="h1_logo">ㅤ <!-- 자동점검도구로 empty string 경고 떠서 특수문자 공백 추가  -->
            <a href="" class="logo_link">
                <span class="icon_logo_gnb">
                    <svg id="gnb_logo" width="160" height="50" viewBox="0 0 160 50">
                        <g id="group_g" data-name="group_g" transform="translate(0 0)">
                            <path id="group_g_path" data-name="group_g_path" d="M11.5,23A11.5,11.5,0,1,1,23,11.5,11.514,11.514,0,0,1,11.5,23Zm0-14.786A3.286,3.286,0,1,0,14.786,11.5,3.29,3.29,0,0,0,11.5,8.214Z" />
                        </g>
                        <path id="path01" data-name="path01" d="M135.6,1186.738v-34.2h8.454v7.96h7.12v7.471h-7.12v10.749Z" transform="translate(-108.561 -1152.535)" />
                        <path id="path02" data-name="path02" d="M150.419,1152.4h16.642v7.8h-8.9v5.52h8.271v7.073h-8.271v5.971h8.9v7.841H150.419Z" transform="translate(-99.248 -1151.748)" />
                        <path id="path03" data-name="path03" d="M150.419,1176.451h30.465l-8.06,8.06h-22.4Z" transform="translate(-99.267 -1135.495)" />
                        <path id="path04" data-name="path04" d="M166.47,1160.242v-7.784h18.464v18.08h-8.058v-10.3Z" transform="translate(-89.161 -1151.709)" />
                        <path id="path05" data-name="path05" d="M190.972,1160.085H180.738v-7.618h18.011v27.653h-7.776v-7.531H180.738v-7.28h10.234Z" transform="translate(-80.191 -1151.703)" />
                        <g id="group01" data-name="group02" transform="translate(102.639 27)">
                            <path id="path11" data-name="path11" d="M11.5,23A11.5,11.5,0,1,1,23,11.5,11.513,11.513,0,0,1,11.5,23Zm0-14.786A3.286,3.286,0,1,0,14.786,11.5,3.291,3.291,0,0,0,11.5,8.214Z" />
                        </g>
                        <path id="path06" data-name="path06" d="M166.47,1160.242v-7.784h18.464v18.08h-8.058v-10.3Z" transform="translate(-40.356 -1136.487)" />
                        <path id="path07" data-name="path07" d="M0,8.06H30.465L22.4,0H0Z" transform="translate(151.94 34.063) rotate(-90)" />
                    </svg>
                </span>
            </a>
        </h1>
        <h2 class="common_allmenu_w">
            <button type="button" class="btn_allmenu btn_toggle"><span class="line">open/close</span></button>
        </h2>
        <div class="common_inner">
            <div class="common_lnb_inner">
                <ul class="common_lnb">
                    <li class="slnb_inner" id="slnb-2">
                        <a href="javascript:void(0);" class="slnb_link" onclick="moveFullpage(2);">
                            <span class="slnb_txt_box">
                                <span class="slnb_txt">아트경기</span>
                            </span>
                        </a>
                    </li>
                    <li class="slnb_inner" id="slnb-3">
                        <a href="javascript:void(0);" class="slnb_link" onclick="moveFullpage(3);">
                            <span class="slnb_txt_box">
                                <span class="slnb_txt">아트경기 소개</span>
                            </span>
                        </a>
                    </li>
                    <li class="slnb_inner" id="slnb-4">
                        <a href="javascript:void(0);" class="slnb_link" onclick="moveFullpage(4);">
                            <span class="slnb_txt_box">
                                <span class="slnb_txt">온라인 갤러리</span>
                            </span>
                        </a>
                    </li>
                    <li class="slnb_inner" id="slnb-5">
                        <a href="javascript:void(0);" class="slnb_link" onclick="moveFullpage(5);">
                            <span class="slnb_txt_box">
                                <span class="slnb_txt">행사일정</span>
                            </span>
                        </a>
                    </li>
                    <li class="slnb_inner" id="slnb-6">
                        <a href="javascript:void(0);" class="slnb_link" onclick="moveFullpage(6);">
                            <span class="slnb_txt_box">
                                <span class="slnb_txt">E-도록</span>
                            </span>
                        </a>
                    </li>
                    <li class="slnb_inner" id="slnb-7">
                        <a href="javascript:void(0);" class="slnb_link" onclick="moveFullpage(7);">
                            <span class="slnb_txt_box">
                                <span class="slnb_txt">이벤트 참여</span>
                            </span>
                        </a>
                    </li>
                    <li class="slnb_inner" id="slnb-8">
                        <a href="javascript:void(0);" class="slnb_link" onclick="moveFullpage(8);">
                            <span class="slnb_txt_box">
                                <span class="slnb_txt">공지사항</span>
                            </span>
                        </a>
                    </li>
                </ul>
                <!--
                <button type="button" class="btn_allmenu_x">
                    <span class="icon_close">
                        <svg width="15.213" height="14.222" viewBox="0 0 15.213 14.222">
                            <g transform="translate(0.677 0.736)">
                                <line x1="13.859" y2="12.75" fill="none" stroke="#fff" stroke-width="2" />
                                <line x1="13.859" y1="12.75" fill="none" stroke="#fff" stroke-width="2" />
                            </g>
                        </svg>
                    </span>
                </button>
                -->
            </div>
        </div>
        <i class="snb_bg"></i>
    </nav>