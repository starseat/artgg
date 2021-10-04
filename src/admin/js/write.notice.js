$(document).ready(function() {
    initTextForm();

    const notice_seq = getNoticeSeq();
    if (notice_seq > 0) {
        getNoticeInfo(notice_seq);
    }
});

function initTextForm() {
    let option = getSummernoteDefaultOption();
    // option.toolbar[1][1] = ['link', 'table', 'hr', 'picture', 'video'];
    option.callbacks = {
        // onImageUpload: function(files, editor, welEditable) {
        //     sendImageFile(this, files[0], editor, welEditable);
        // }
    };
    option.placeholder = '공지사항 내용을 입력해 주세요.';
    console.log('[initTextForm] option:: ', option);
    $('#notice_contents').summernote(option);
}

function getNoticeSeq() {
    const seq = getParameter('seq');
    if (isEmpty(seq) || !isNumeric(seq)) {
        return 0;
    }

    return seq;
}

function getNoticeInfo(notice_seq) {
    $.ajax({
        type: 'get',
        data: { seq: notice_seq },
        url: './action/notice_get.php',
        success: function(result) {
            //console.log('[getNoticeInfo] result:: ', result);
            const resultObj = JSON.parse(result);
            //console.log('[getNoticeInfo] resultObj:: ', resultObj);
            setNoticeInfo(resultObj.notice_info);
        },
        error: function(xhr, status, error) {
            console.error('[getNoticeInfo] ajax error:: ', error);
        },

    });
}

function setNoticeInfo(noticeInfo) {
    $('#notice_form_reset_btn').hide();
    $('#notice_form_delete_btn').show();

    $('#notice_date_box').show();
    $('#notice_created_at').val(noticeInfo.created_at);
    $('#notice_updated_at').val(noticeInfo.updated_at);

    $('#notice_seq').val(noticeInfo.seq);
    $('#notice_title').val(noticeInfo.title);
    $('#notice_level').val(noticeInfo.level);
    $('#notice_contents').summernote('code', noticeInfo.contents);
}

function doReset(event) {
    event.preventDefault();
    event.stopPropagation();

    $('#notice_title').val('');
    $('#notice_level').val('1');
    $('#notice_contents').summernote('reset');
}

function doSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    const notice_seq = parseInt($('#notice_seq').val(), 10);
    const notice_level = parseInt($('#notice_level').val(), 10);
    const notice_title = $('#notice_title').val();
    if (notice_title == '') {
        alert('공지사항 제목을 입력해주세요.');
        return false;
    }
    if ($('#notice_contents').summernote('isEmpty')) {
        alert('공지사항 내용을 입력해주세요.');
        return false;
    }
    const notice_contents = $('#notice_contents').summernote('code');

    $.ajax({
        type: 'post',
        url: './action/notice_submit.php',
        data: { seq: notice_seq, level: notice_level, title: notice_title, contents: notice_contents },
        dataType: 'json',
        success: function(result) {
            console.log('[doSubmit] result:: ', result);
            alert(result.message);
            location.href = './write.php';
        },
        error: function(xhr, status, error) {
            console.error('[doSubmit] ajax error:: ', error);
        },

    });
}

function doDelete(event) {
    event.preventDefault();
    event.stopPropagation();

    if (!confirm('정말 삭제하시겠습니까?')) {
        return false;
    }

    const notice_seq = parseInt($('#notice_seq').val(), 10);
    if (notice_seq == 0) {
        alert('잘못된 접근 입니다.');
        location.href = './write.php';
        return false;
    }

    if (confirm('공지사항글을 정말로 삭제하시겠습니까?')) {
        $.ajax({
            type: 'post',
            url: './action/notice_delete.php',
            data: { seq: notice_seq },
            dataType: 'json',
            success: function(result) {
                console.log('[doDelete] result:: ', result);
                alert(result.message);
                location.href = './write.php';
            },
            error: function(xhr, status, error) {
                console.error('[doDelete] ajax error:: ', error);
            },

        });
    }
}

function sendImageFile(element, file, editor, welEditable) {
    const formData = new FormData();
    formData.append('uploadImage', file);

    const _url = '/admin/action/notice_image_submit.php';
    $.ajax({
        data: formData,
        type: 'post',
        url: _url,
        cache: false,
        processData: false,
        contentType: false,
        enctype: 'multipart/form-data',
        // contentType: 'multipart/form-data',
        success: function(resultData) {
            const resultObj = JSON.parse(resultData);

            if (resultObj.result) {
                $(element).summernote('insertImage', resultObj.data);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.lot('[sendImageFile] ajax error :: ', textStatus + ' ' + errorThrown);
        }
    });


}