<?php
include_once('./action/login_check.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>공지사항 글쓰기 | 2021 아트경기</title>

    <link href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet">
    <style>
        .notice-box {
            margin-left: 10px;
            margin-right: 10px;
        }
    </style>
</head>
<body>



<div class="container">
    <div class="notice-box">
        <h1 class="mt-4 mb-4">공지사항</h1>
        <div class="card mt-2">
            <div class="card-body">
                <form id="notice_from" name="notice_from">                        
                    <input type="hidden" id="notice_seq" name="notice_seq" value="0">
                    <br><hr><br>
                    <div class="form-group row" id="notice_date_box">
                        <div class="form-group row">
                            <div class="col-md-3"><label for="notice_created_at" class="col-form-label">최초 등록일</label></div>
                            <div class="col-md-9"><input type="text" class="form-control" id="notice_created_at" readonly></div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-3"><label for="notice_updated_at" class="col-form-label">마지막 수정일</label></div>
                            <div class="col-md-9"><input type="text" class="form-control" id="notice_updated_at" readonly></div>
                        </div>
                        <hr>
                    </div>

                    <div class="form-group row">
                        <div class="form-group col-md-8">
                            <label for="notice_title">* 제목</label>
                            <input type="text" class="form-control" id="notice_title" name="notice_title" placeholder="공지사항 제목을 입력해주세요.">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="notice_level">중요도</label>
                            <select class="form-control" id="notice_level" name="notice_level">
                                <option value="1">일반</option>
                                <option value="2">중요</option>
                                <option value="3">긴급</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="notice_contents">* 공지사항 내용</label>
                        <div id="notice_contents" class="form-control"></div>
                    </div>
                    <div class="row">
                        <div class="col-xs-6 text-left">
                            <button class="btn btn-secondary" id="notice_form_reset_btn" onclick="doReset(event)">초기화</button>
                            <!-- <button class="btn btn-danger" id="notice_form_delete_btn" onclick="doDelete(event)">삭제</button> -->
                        </div>
                        <div class="col-xs-6 text-right">
                            <button class="btn btn-primary" onclick="doSubmit(event)">저장</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>    
</div>


<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/lang/summernote-ko-KR.min.js"></script>
<script src="./js/common.js"></script>
<script src="./js/write.notice.js"></script>
</body>
</html>





