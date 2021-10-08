<?php
include_once('./action/login_check.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>팝업 | 2021 아트경기</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">
    <link href="vendor/image-uploader/dist/image-uploader.min.css" type="text/css" rel="stylesheet">
    <style>
        .popup-notice-list-box {
            height: 340px;
            overflow-y: auto;
            border: 1px solid black;
            margin-top: 10px;
            margin-bottom: 10px;
        }

        .popup-submit-box {
            text-align: right;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">첫번째 팝업 추가</h5>
                <br>
                <hr><br>
                <div class="card-text">
                    <form id="popup1Form" name="popup1Form" method="post" action="./action/popup.php" enctype="multipart/form-data">
                        <div class="form-group">
                            <div id="popup1_images"></div>
                        </div>
                        <br>
                        <div class="form-group popup1-group" id="popup1-group-link">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="popup1-use">
                                <label class="form-check-label" for="popup1-use">사용여부</label>
                            </div>
                        </div>
                        <br>
                        <div class="form-group popup1-group" id="popup1-group-link">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="popup1-type" id="popup1-radio-link" value="link" checked>
                                <label class="form-check-label" for="popup1-radio-link">
                                    link
                                </label>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="popup1-text-link" placeholder="link 정보 입력">
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="form-group popup1-group" id="popup1-group-notice">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="popup1-type" id="popup1-radio-notice" value="notice">
                                <label class="form-check-label" for="popup1-radio-notice">
                                    공지사항
                                </label>
                                <div class="input-group">
                                    <button class="btn btn-outline-secondary" type="button">선택된 공지사항</button>
                                    <input type="text" class="form-control" placeholder="" aria-describedby="button-addon1" id="popup1-text-notice" readonly>
                                    <input type="hidden" id="popup1-text-notice-seq" value="0">
                                </div>
                                <div class="form-group">
                                    <div class="popup-notice-list-box">
                                        <table class="table table-hover">
                                            <thead class="thead-dark">
                                                <tr>
                                                    <th scope="col">제목</th>
                                                    <!-- <th scope="col">등록일</th> -->
                                                </tr>
                                            </thead>
                                            <tbody class="popup-notice-list" id="popup1-notice-list">
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="hidden" id="popup1-type" value="">
                        <div class="form-group popup-submit-box">
                            <button type="submit" class="btn btn-primary" onclick="submitPopup1(event)">적용</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ" crossorigin="anonymous"></script>
    <script src="vendor/image-uploader/dist/image-uploader.min.js"></script>
    <script src="./js/common.js"></script>
    <script src="./js/popup2.js"></script>
</body>

</html>