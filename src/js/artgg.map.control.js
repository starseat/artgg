//맵 컨트롤
$(document).ready(function() {
    var mapControl = new MapControl();
});


var MapControl = (function() {
    var mapData = [{
            photo: './img/event/업클로즈02.jpg',
            title: '업클로즈02',
            date: '5.19 - 5.23 (11:00 ~ 22:00)',
            cooperation: '주관 : ㈜아트플레이스',
            place: {
                label: '안다즈 서울 강남 스카이테라스 펜트하우스',
                urls: [{ label: 'URL', url: 'http://naver.me/xXrEcDvc' }],
                places: []
            },
            about: '작년에 이어 두번째로 개최되었던 &lt;업클로즈(UPCLOSE) 02&gt;는 1973년 뉴욕현대미술관(MoMA) 펜트하우스에서 열렸던 전시 &lt;IMAGES&gt;에서 영감을 받아 안다즈호텔 펜트하우스에서 진행되었습니다.<br>아트경기 작가 6인의 작품이 호텔의 감각적인 인테리어와 어우러져 탄생한 아트하우스에서 특별한 예술체험을 만끽할 수 있었습니다.',
            tip: [],
            more: "https://www.ggcf.kr/archives/exhibit/2021-아트경기-팝업갤러리"
        },
        {
            photo: './img/event/아트로드77.PNG',
            title: '아트경기 x 아트로드77',
            date: '10.7 - 10.17 (10:00 ~ 17:00), 월요일 휴관',
            cooperation: '주관 : 올댓큐레이팅<br>후원 : (사)헤이리, 범우재, 바른손',
            place: {
                label: '파주 헤이리 예술마을',
                urls: [{ label: 'URL', url: 'http://naver.me/FyerVVNh' }],
                places: ['갤러리더차이', 'K-스페이스', '헤이리갤러리움', '카메라타갤러리', '갤러리소소', '범우재', '동화나라']
            },
            about: '파주 자유로 국도에서 이름을 딴 "아트로드77"은 2009년 시작해 올해로 13회를 맞이하는 예술축제입니다.<br>예술로 하나가 되는 세상을 꿈꾸는 &lt;아트경기 x 아트로드77&gt;은 아트경기와 두 해째 함께하며 아트경기를 대표하는 미술장터로 자리 잡았습니다.',
            tip: [
                { label: '1. 아트경기의 아이덴티티', info: '아트경기 작가 42인 전원이 참여하는 미술장터에서 아트경기란 어떤 사업인지 경험해보세요.' },
                { label: '2. 각양 각색의 일곱 갤러리', info: '헤이리 예술마을 내 갤러리 7곳이 각각 풍기는 특유의 분위기를 느껴보세요.' },
                { label: '3. 다채로운 부대행사', info: '아트마켓과 미술전문가 강연 등, 미술장터를 특별하게 만들어주는 부대행사들에 자유롭게 참여보세요.' },
            ],
            more: ''
        },
        {
            photo: './img/event/신장동 할로윈 아트페어.png',
            title: '신장동 할로윈 아트마켓',
            date: '<br>10.20 - 10.31 10:00 ~ 18:00 (금, 토: ~ 20:00)',
            cooperation: '주관 : 생강컴퍼니',
            place: {
                label: '평택 송탄 국제시장 내 전시공간',
                urls: [{ label: 'URL', url: 'http://naver.me/IgT5iaxE' }],
                places: []
            },
            about: '용산 미군기지가 평택으로 이전하면서 송탄 신장동은 다양한 문화가 공존하는 공간이 되었습니다.<br> 이곳 송탄 국제시장에서, 아트경기는 미술장터 &lt;신장동 할로윈 아트마켓&gt;을 선보입니다.<br> 아트경기 작가 42인의 작품들과 함께 할로윈 분위기 물씬 풍기는 미술장터를 즐겨보세요.',
            tip: [
                { label: '1. 전시장으로 탈바꿈한 대안공간', info: '기존 전시공간에서 벗어나, 대안공간 한치각을 포함해 신장동 내 다양한 공간에 전시된 작품들을 만나보세요.' },
                { label: '2. 경기도의 이태원, 그리고 할로윈', info: '인접한 미군 부대로 다양한 문화가 공존하는 신장동에서, 아트마켓, 거리 공연 등 다채로운 할로윈 축제를 느껴보세요.' }
            ],
            more: ''
        },
        {
            photo: './img/event/Art For Ur FLEX.jpg',
            title: 'Art For Ur FLEX',
            date: '10.1 - 10.14 (10:30 ~ 22:00)',
            cooperation: '주관 : KAN<br>협력 : 현대백화점',
            place: {
                label: '현대백화점 중동점 유플렉스 1층 ',
                urls: [{ label: 'URL', url: 'http://naver.me/501eqyRW' }],
                places: []
            },
            about: '어느덧 문화로 자리잡은 ‘플렉스(FLEX)’, 이제는 미술작품으로 ‘플렉스’ 해보세요. 소품 및 판화 그리고 아트포스터까지,  비교적 저렴한 가격의 아트상품을 소장하거나, 사랑하는 누군가에게 선물해보세요. ',
            tip: [
                { label: '1. 백화점에서 만나는 미술', info: '미술이 비싸고 부담스러웠다면, 현대백화점 중동점에서 쇼핑하듯 편안하게 미술작품을 소장해보세요.' },
                { label: '2. 작품이 담긴 굿즈를 내 곁에', info: '아트경기 작가의 작품이 판화와 아트포스터, 다양한 아트굿즈로 여러분을 찾아갑니다.' },
                { label: '3. 리빙과 아트의 만남', info: '전시공간 내 가구와 인테리어 속에 자연스럽게 녹아든 미술품을 만나보세요.' },
            ],
            more: ''
        },
        {
            photo: './img/event/업클로즈03.jpg',
            title: '업클로즈03',
            date: '10.21 - 11.1 (11:00 ~ 19:00)',
            cooperation: '주관 : ㈜아트플레이스',
            place: {
                label: '플랫폼엘(Platform-L)',
                urls: [{ label: 'URL', url: 'http://naver.me/5JJQT6dz' }],
                places: []
            },
            about: '미술작품을 손으로 만져보듯 생생하게 대면한다는 의미의 <업클로즈(UPCLOSE) 03>은 작년에 이어 서울내 규모의 전시공간 플랫폼엘(Platform- L)에서 세번째 전시를 이어갑니다. 멋들어진 전시로 생생한 미적체험을 경험함과 동시에 합리적인 가격으로 신규 컬렉터가 되어보세요.',
            tip: [
                { label: '1. 신(新)과 구(舊)의 연결고리', info: '협력사 추천 중견작가와 아트경기 작가가 공존하는 전시로 시대별 작가간 교류의 장을 경험해보세요.' },
                { label: '2. 미술시장 산책하기', info: '미술계 전문가가 들려주는 미술시장 이야기를 통해 한 발짝 더 미술시장에 다가가 보세요.' },
                { label: '3. 다채로운 형식의 작품', info: '평면 뿐아니라 조각과 미디어아트에 이르는 다채로운 작품들이 빚어내는 럭셔리한 전시를 감상해보세요.' },
            ],
            more: ''
        },
        {
            photo: './img/event/DMZ아트페어.PNG',
            title: 'DMZ 아트페어',
            date: '10.28 - 10.31 (10:00 ~ 17:00)',
            cooperation: '주관 : 스튜디오 끼',
            place: {
                label: '스튜디오 끼, 문학수첩',
                urls: [{ label: '끼URL', url: 'http://naver.me/Fn2iCiP5' }, { label: '문학수첩URL', url: 'http://naver.me/xNdHXrkp' }],
                places: []
            },
            about: 'DMZ 접경지역인 파주는 예로부터 경기 북부 문화예술의 중심지였습니다.<br>&lt;DMZ 아트페어&gt;는 파주를 기점으로 원로 작가와 아트경기 작가 간의 교류의장을 형성해 경기 북부 지역 문화예술을 재조명합니다.<br>지역 문화생태계가 집중되는 예술축제가 여러분들을 찾아갑니다.',
            tip: [
                { label: '1. 아트와 플리마켓', info: '전시와 함께 지역상인들의 플리마켓 “끼마켓”을 즐겨보세요.' },
                { label: '2. 작가와의 토크쇼', info: '원로 작가와 아트경기 작가 사이에 오가는 진솔한 이야기를 들어보세요. (유튜브 라이브도 진행한답니다!)' },
                { label: '3. 아트DMZ 포럼', info: '저명한 학예사와 평론가들이 한데 모여 경기 북부 예술의 전망을 주제로 토론 및 강연을 진행합니다.' }
            ],
            more: ''
        },
        {
            photo: './img/event/공공기관임대.jpeg',
            title: '공공기관 미술품 임대 전시',
            date: '2021. 9월 - 12월',
            cooperation: '주관 : KAN',
            place: {
                label: '경기도 내 공공기관 및 기업',
                urls: [],
                places: []
            },
            about: '2021 아트경기 사업의 일환으로 도내 공공기관 내에 아트경기 작가의 미술작품 임대 및 전시합니다.<br> 공기관으로 미술품 수요를 확장하여 지속 가능한 예술 문화를 만들어가는 것을 목표로 합니다.<br>각 공간에 적합한 큐레이팅을 통해 회화, 판화뿐 아니라 조각, 공예, 영상에 이르는 다양한 장르의 작품이 전시될 예정입니다.<br>동시에 작가에게는 판매 위주의 비연속적 마케팅 위주의 시장에서 지속 가능한 거래의 방향으로 지속적인 수입을 창출을 돕습니다.',
            tip: [],
            more: ''
        },
        {
            photo: './img/event/이광기의live경매쇼.png',
            title: '이광기의 Live 경매쇼 – 아트경기 선정작가',
            date: '<br>8.9 - 12.8 격주 월요일 (21:00 ~ )',
            cooperation: '주관 : 스튜디오 끼',
            place: {
                label: '유튜브 "이광기의 광끼채널"',
                urls: [{ label: 'URL', url: ' https://www.youtube.com/channel/UCn9fY6_xBi7EV3K4hR14lWA' }],
                places: []
            },
            about: '작년부터 꾸준히 이어온 &lt;이광기의 Live 경매쇼&gt;, 매 경매쇼마다 동시접속자 수는 꾸준히 증가하여 코로나19 이후 비대면 시대 미술시장의 저변을 확대하고 있습니다.<br>격주 월요일마다 유튜브 “이광기의 광끼채널” 에서 실시간으로 진행되는 경매쇼, 채팅을 통해 아트경기 작가의 작품을 입찰해보세요.',
            tip: [{ label: '1. 침대에서 참여하는 경매', info: '경매를 위해 집을 떠날 필요 없이 어떤 장소에서든 편하게 입찰에 참여해보세요.' },
                { label: '2. 작가를 영상으로 만나다', info: '매 경매쇼 전주 에 작가 인터뷰가 업로드되고, 작가와 요리하며 대화를 나누는 “작가의 레시피” 코너 또한 준비되어있습니다.' },
                { label: '3. 컬렉터 및 작가와의 네트워킹', info: '경매쇼를 찾아온 다른 컬렉터 그리고 작가와 자유롭게 채팅하며 관계를 쌓아가보세요.' }
            ],
            more: 'https://www.ggcf.kr/archives/139962'
        },
        {
            photo: './img/event/아트경기x오픈갤러리.jpg',
            title: '아트경기 x 오픈갤러리',
            date: '9.27 - 11.30',
            cooperation: '제휴 : 오픈갤러리',
            place: {
                label: '오픈갤러리 홈페이지',
                urls: [{ label: 'URL', url: 'https://www.opengallery.co.kr' }],
                places: []
            },
            about: '오픈갤러리는 미술품 렌탈 전문 플랫폼으로, 원화를 렌탈하여 자신의 공간에 손쉽게 걸어둘 수 있습니다.<br> 9월 말부터 아트경기 작가의 작품을 대상으로 할인 프로모션을 진행합니다.<br>저렴한 가격에 아트경기 작가의 미술작품으로 집을 꾸며보세요.',
            tip: [{ label: '1. 작가 인터뷰', info: '오픈갤러리 SNS와 네이버 포스트에서 작가의 작업과정과 작품세계를 접해보세요.' },
                { label: '2. 언제든 만날 수 있는 작품', info: '좋아하는 작가의 전시를 기다릴 필요 없이 수많은 작품을 오픈갤러리 웹사이트에서 골라 대면해보세요.' },
            ],
            more: ''
        },
        {
            photo: './img/event/제로베이스x아트경기.png',
            title: 'ZEROBASE x 아트경기',
            date: '2021. 12.17 – 12.22',
            cooperation: '제휴 : 서울옥션<br>후원 : 페르노리카 코리아',
            place: {
                label: '서울옥션 홈페이지',
                urls: [{ label: 'URL', url: 'https://www.seoulauction.com' }],
                places: []
            },
            about: '국내 최대 미술품 경매기업 "서울옥션"과의 제휴사업으로 온라인 경매 &lt;ZEROBASE x 아트경기&gt;를 진행합니다.<br>"제로베이스" 는 0원부터 시작하는 경매로, 경매에 참여하는 아트경기 작가 8인의 작품을 원하는 가격에 수월하게 입찰해볼 수 있습니다. 특히 올해는 페르노리카 코리아의 후원으로 더욱 풍성한 경매가 이루어질 예정입니다.',
            tip: [{ label: '1. 자유롭게 참여하는 입찰', info: '0원부터 순차적으로 올라가는 입찰가로 부담없이 경매에 참여할 수 있습니다.' },
                { label: '2. 프리뷰 전시', info: '경매전, 프리뷰 전시로 서울옥션 강남센터에서 작품을 실물로 만나볼 수 있으니 놓치지 마세요.' },
                { label: '3. 작가 인터뷰', info: '서울옥션에서 제작한 빼어난 영상미의 작가 인터뷰 영상도 꼭 감상해보세요!' }
            ],
            more: ''
        },
        {
            photo: './img/event/대구아트페어.png',
            title: '2021 대구아트페어',
            date: '<br>11.4 - 11.7 11:00 ~ 19:30 (일요일~18:00)',
            cooperation: '주관 : 올댓큐레이팅',
            place: {
                label: '대구컨벤션센터',
                urls: [{ label: 'URL', url: 'http://naver.me/xgauzKyf' }],
                places: []
            },
            about: '아트페어는 미술작품이 새로운 컬렉터를 만날수있는 아주 좋은 통로인데요, 그래서 아트경기는 화랑미술제와 KIAF 등, 매년 아트페어에 참가해왔습니다.<br>올해는 대구컨벤션센터에서 개최되는 대구아트페어에서 아트경기부스를 만나볼 수 있습니다.',
            tip: [],
            more: ''
        },
    ];
    //상세정보 창
    $(".btn-area").on("click", function() {
        var index = $(this).data("index");
        $("body").infoWindow({
            info: mapData[index]
        });
        //모바일인 경우에만 스크롤 히든 처리
        var w = $(window).width();
        if (w <= 720) $("body").addClass("scroll_hidden");

    });
    //전체일정 닫기(사이드창 닫기)
    $(".btn_info_close").on("click", function() {
        // if (!$(".map_info").hasClass("use_ani")) $(".map_info").addClass("use_ani");
        // $(".map_info").removeClass("active");
        // $("body").removeClass("scroll_hidden map_fixed");

        closeEventMapAllPopup();
    });
    //전체일정 열기(사이드창 열기)
    $(".btn_daily_info").on("click", function() {
        // var w = $(window).width();
        // if (!$(".map_info").hasClass("use_ani")) $(".map_info").addClass("use_ani");

        // $(".map_info").addClass("active");
        // if (w <= 720) $("body").addClass("scroll_hidden map_fixed");

        openEventMapAllPopup();
    });
    //맵 사이즈 조정
    $(window).on("resize", function() {
        if ($(".map_info").hasClass("use_ani")) $(".map_info").removeClass("use_ani");
        setTimeout(function() {
            var w = $(window).width();
            if (w <= 720) {
                $("#map_whole").attr("viewBox", "0 0 620 870")
                if ($(".map_info").hasClass("active")) $("body").addClass("scroll_hidden map_fixed");
            } else {
                $("#map_whole").attr("viewBox", "0 0 708 870");
                $("body").removeClass("scroll_hidden map_fixed");
            }

            if (w > 768) {
                $("body").removeClass("scroll_hidden map_fixed");
                $(".map_info").removeClass("active");

            }
        }, 100);
    });

    $(window).trigger("resize");
});