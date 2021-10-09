$(document).ready(function() {
    initEvent();

    getNoticeList();
    getPopupInfo();
});

function initImageForm(index) {
    var popupId = '#popup' + index;
    var popupImageFormId = popupId + '_image_form';
    $(popupImageFormId).show();

    let image_option = getImageUploadDefaultOption();
    image_option.imagesInputName = 'popup' + index + '_image';
    image_option.label = '팝업 이미지를 업로드 해주세요.';
    image_option.maxFiles = undefined;

    $(popupImageFormId).imageUploader(image_option);
    $(popupId + '_image_is_upload').val('1');
}

function initEvent() {
    $('#popup1-type').val('link');
    $('#popup1-notice-list').attr('disabled', true);
    $("input[name='popup1-radio']:radio").on('change', function() {
        if (this.value == 'link') {
            $('#popup1-text-notice').attr('disabled', true);
            $('#popup1-text-link').removeAttr('disabled');
            $('#popup1-type').val('link');
        } else { // if(this.value == 'notice') {
            $('#popup1-text-link').attr('disabled', true);
            $('#popup1-notice-list').removeAttr('disabled');
            $('#popup1-type').val('notice');
        }
    });

    $('#popup2-type').val('link');
    $('#popup2-notice-list').attr('disabled', true);
    $("input[name='popup2-radio']:radio").on('change', function() {
        if (this.value == 'link') {
            $('#popup2-text-notice').attr('disabled', true);
            $('#popup2-text-link').removeAttr('disabled');
            $('#popup2-type').val('link');
        } else { // if(this.value == 'notice') {
            $('#popup2-text-link').attr('disabled', true);
            $('#popup2-notice-list').removeAttr('disabled');
            $('#popup2-type').val('notice');
        }
    });
}

function getPopupInfo() {
    $.ajax({
        type: "GET",
        url: '../api/get_popup.php',
        success: function(resultData) {
            // console.log('[getPopupInfo] resultData:: ', resultData);
            var resultObj = JSON.parse(resultData);
            // console.log('[getPopupInfo] resultObj:: ', resultObj);
            setPopupView(resultObj.popup);
        },
        error: function() {}
    });
}

function setPopupView(popupList) {
    for (var i = 0; i < popupList.length; i++) {
        var _item = popupList[i];
        var index = i + 1;
        var popupId = '#popup' + index

        if (_item.img_name != '') {
            $(popupId + '_saved_image_box').show();
            $(popupId + '_saved_image').attr('src', _item.upload_path + _item.img_name_save);
            $(popupId + '_saved_image').attr('download', _item.img_name);
            $(popupId + '_image_is_upload').val('0');
        } else {
            initImageForm(index);
        }

        $(popupId + '-type').val(_item.type);
        if (_item.type == 'link') {
            $(popupId + '-radio-link').prop('checked', true);
            $(popupId + '-text-link').val(_item.param);

            $(popupId + '-text-notice').attr('disabled', true);
            $(popupId + '-text-link').removeAttr('disabled');
        } else {
            $(popupId + '-radio-notice').prop('checked', true);
            $(popupId + '-text-notice-seq').val(_item.param);
            $(popupId + '-text-notice').val($(popupId + '-notice-item-' + _item.param).children('td').text());

            $(popupId + '-text-link').attr('disabled', true);
            $(popupId + '-text-notice').removeAttr('disabled');
        }

        var useYn = false;
        if (_item.use_yn == '1') {
            useYn = true;
        }
        $(popupId + '-use').prop('checked', useYn);
    }
}

function removePopupImage(event, index) {
    event.preventDefault();
    event.stopPropagation();

    var popupId = '#popup' + index;
    $(popupId + '_saved_image_box').hide();
    initImageForm(index);
}

function getNoticeList() {
    $.ajax({
        type: "GET",
        url: './action/notice_list_total.php',
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
    for (var i = 0; i < list.length; i++) {
        var data = list[i];
        var _item_popup1 = '<tr onclick="selectNoticeItem(1, ' + data.seq + ');" id="popup1-notice-item-' + data.seq + '">';
        var _item_popup2 = '<tr onclick="selectNoticeItem(2, ' + data.seq + ');" id="popup2-notice-item-' + data.seq + '">';
        var _item = '<td>' + data.title + '</td></tr>';
        $('#popup1-notice-list').append(_item_popup1 + _item);
        $('#popup2-notice-list').append(_item_popup2 + _item);
    }
}

function selectNoticeItem(popupIdx, noticeSeq) {
    if (popupIdx == 1 && $('#popup1-radio-notice').is(':checked')) {
        $('#popup1-text-notice-seq').val(noticeSeq);
        $('#popup1-text-notice').val($('#popup1-notice-item-' + noticeSeq).children('td').text());
    }

    if (popupIdx == 2 && $('#popup2-radio-notice').is(':checked')) {
        $('#popup2-text-notice-seq').val(noticeSeq);
        $('#popup2-text-notice').val($('#popup2-notice-item-' + noticeSeq).children('td').text());
    }
}

function submitPopup(event, index) {
    event.preventDefault();
    event.stopPropagation();

    if (index < 1 || index > 2) {
        alert('팝업 정보가 올바르지 않습니다.');
        return false;
    }

    _submitPopup(index);
}


function _debugFormData(formData) {
    // console.log('[_debugFormData] formData: ', formData);
    // console.log('[_debugFormData] formData.entries(): ', formData.entries());
    for (var data of formData.entries()) {
        console.log('[_debugFormData] detail >> ', data[0] + ': ' + data[1]);
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

    // if (!formData.get('popup_image') || formData.get('popup_image') == 'null') {
    //     resultObj.message = '팝업 이미지가 등록되지 않았습니다.';
    //     return resultObj;
    // }

    if (formData.get('popup_param') == '') {
        resultObj.message = '팝업 정보가 존재하지 않습니다.';
        return resultObj;
    }

    resultObj.result = true;
    return resultObj;
}

function _submitPopup(index) {
    var popupId = '#popup' + index;
    var popupImage = null;
    if ($(popupId + '_image_is_upload').val() == '1') {
        popupImage = $(popupId + '_image_form input[type=file]')[0].files[0] ? $(popupId + '_image_form input[type=file]')[0].files[0] : null;
    }
    var popupType = $(popupId + '-type').val();
    var param = '';
    if (popupType == 'link') {
        param = $(popupId + '-text-link').val();
    } else {
        param = $(popupId + '-text-notice-seq').val();
    }

    var formData = new FormData();
    formData.append('popup_image', popupImage);
    formData.append('popup_type', popupType);
    formData.append('popup_index', index);
    formData.append('popup_param', param);
    formData.append('popup_use_yn', $(popupId + '-use').is(':checked'));

    var invalidResult = _invalidSubmitData(formData);
    if (!invalidResult.result) {
        alert(invalidResult.message);
        return false;
    }

    $.ajax({
        url: './action/popup_update.php',
        contentType: 'multipart/form-data',
        type: 'POST',
        data: formData,
        dataType: 'json',
        mimeType: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success: function(resultData) {
            // console.log('[_submitPopup] ajax success: ', resultData);
            alert(index + '번 ' + resultData.message);
            location.reload();
        },
        error: function(jqXHR, status, errorn) {}
    });
}