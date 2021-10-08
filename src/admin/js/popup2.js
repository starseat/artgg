$(document).ready(function () {
    initImageForm();

    $('#popup1-type').val('link');
    $('#popup1-notice-list').attr('disabled', true);
    $("input[name='popup1-type']:radio").change(function () {
        if(this.value == 'link') {
            $('#popup1-text-notice').attr('disabled', true);
            $('#popup1-text-link').removeAttr('disabled');
            $('#popup1-type').val('link');
        } else { // if(this.value == 'notice') {
            $('#popup1-text-link').attr('disabled', true);
            $('#popup1-notice-list').removeAttr('disabled');
            $('#popup1-type').val('notice');
        }
    });

    getNoticeList();
});

function initImageForm() {
    let image_option = getImageUploadDefaultOption();
    image_option.imagesInputName = 'popup1_images';
    image_option.label = '팝업 이미지를 업로드 해주세요.';
    image_option.maxFiles = undefined;

    $('#popup1_images').imageUploader(image_option);
}

function getNoticeList() {
    $.ajax({
        type: "GET",
        url: './action/get_notice_list_total.php',
        success: function(resultData) {
            // console.log('[getNoticeList] resultData:: ', resultData);
            var resultObj = JSON.parse(resultData);
            // console.log('[getNoticeList] resultObj:: ', resultObj);
            addNoticeView(resultObj.notice_list);
        },
        error: function() {}
    });
}

function addNoticeView(list) {
    for(var i=0; i<list.length; i++) {
        var data = list[i];
        var _item_popup1 = '<tr onclick="selectNoticeItem(1, ' + data.seq + ');" id="popup1-notice-item-' + data.seq + '">';
        var _item_popup2 = '<tr onclick="selectNoticeItem(2, ' + data.seq + ');" id="popup2-notice-item-' + data.seq + '">';
        var _item = '<td>' +  data.title + '</td></tr>';
        $('#popup1-notice-list').append(_item_popup1 + _item);
        // $('#popup2-notice-list').append(_item_popup2 + _item);
    }
}

function selectNoticeItem(popupIdx, noticeSeq) {
    if(popupIdx == 1 && $('#popup1-radio-notice').is(':checked')) {
        console.log('[selectNoticeItem] 1번 변환하장!! seq: ' + noticeSeq);
        $('#popup1-text-notice-seq').val(noticeSeq);
        $('#popup1-text-notice').val($('#popup1-notice-item-' + noticeSeq).children('td').text());
    }

    if(popupIdx == 2 && $('#popup2-radio-notice').is(':checked')) {
        console.log('[selectNoticeItem] 21번 변환하장!! seq: ' + noticeSeq);
    }
}

function submitPopup1(event) {
    event.preventDefault();
    event.stopPropagation();

    var popupImage = $('#popup1_images input[type=file]')[0].files[0] ? $('#popup1_images input[type=file]')[0].files[0] : null;
    var popupType = $('#popup1-type').val();
    var formData = new FormData();
    formData.append('popup_use_yn', $('#popup1-use').is(':checked'));
    formData.append('popup_image', popupImage);
    formData.append('popup_type', popupType);
    if(popupType == 'link') {
        formData.append('popup_param', $('#popup1-text-link').val());
    }
    else {
        formData.append('popup_param', $('#popup1-text-notice-seq').val());
    }

    var invalidResult = _invalidSubmitData(formData);
    if(!invalidResult.result) {
        alert(invalidResult.message);
        return false;
    }

    // _submitPopup(formData);
}

function _debugFormData(formData) {
    // console.log('[_debugFormData] formData: ', formData);
    // console.log('[_debugFormData] formData.entries(): ', formData.entries());
    for (var data of formData.entries()) { 
        console.log('[_debugFormData] detail >> ', data[0]+ ': ' + data[1]); 
    }

    // for (var key of formData.keys()) {
    //     console.log(key);
    // }

    // for (var value of formData.values()) {
    //     console.log(value);
    // }

    // console.log('[_debugFormData] has popup_image: ', formData.has('popup_image'));
    // console.log('[_debugFormData] has popup_param: ', formData.has('popup_param'));

    // console.log('[_debugFormData] get popup_image: ', formData.get('popup_image'));
    // console.log('[_debugFormData] get popup_param: ', formData.get('popup_param'));
}

function _invalidSubmitData(formData) {
    // _debugFormData(formData);
    var resultObj = { result: false, message: '' };
    
    if(!formData.get('popup_image') || formData.get('popup_image') == 'null') {
        resultObj.message = '팝업 이미지가 등록되지 않았습니다.';
        return resultObj;
    }

    if(formData.get('popup_param') == '') {
        resultObj.message = '팝업 정보가 존재하지 않습니다.';
        return resultObj;
    }

    resultObj.result = true;
    return resultObj;
}

function _submitPopup() {}