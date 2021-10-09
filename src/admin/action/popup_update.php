<?php

// 로그인 체크
include('./login_check.php');

include('../common.php');
include('../db_conn.php');

header('Content-Type: text/html; charset=UTF-8');

$image_is_upload = false;
$image_info = null;
if (!empty($_FILES)) {
    $image = $_FILES['popup_image'];
    $image_info = uploadPopupImage($image);
    if ($image_info == null) {
        viewAlert('팝업 이미지 등록에 실패하였습니다.');
        mysqli_close($conn);
        exit;
    }
    $image_is_upload = true;
}
else {
    $image_info = [
        'file_name' => '', 
        'file_save_name' => '', 
        'upload_file_path' => ''
    ];
}


$image_name = $image_info['file_name'];
$image_name_save = $image_info['file_save_name'];
$upload_path = $image_info['upload_file_path'];

$index = mysqli_real_escape_string($conn, $_POST['popup_index']);
$use_yn = strtolower(mysqli_real_escape_string($conn, $_POST['popup_use_yn']));
$type = mysqli_real_escape_string($conn, $_POST['popup_type']);
$param = mysqli_real_escape_string($conn, $_POST['popup_param']);

if($use_yn == 'true') {
    $use_yn = '1';
}
else {
    $use_yn = '0';
}

$sql  = "UPDATE artgg_popup SET ";
$sql .= "use_yn = '" . $use_yn . "', ";
$sql .= "type = '" . $type . "', ";
$sql .= "param = '" . $param . "', ";
if ($image_is_upload) {
    $sql .= "img_name = '" . $image_name . "', ";
    $sql .= "img_name_save = '" . $image_name_save . "', ";
    $sql .= "upload_path = '" . $upload_path . "', ";
}
$sql .= "updated_at = now() ";
$sql .= " WHERE seq = " . $index;
$result = mysqli_query($conn, $sql) or exit(mysqli_error($conn));

$result_array = [
    'result' => 1, 
    'data' => $result, 
    'message' => '팝업 정보가 수정되었습니다.'
];

mysqli_close($conn);
flush();

echo json_encode($result_array, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

?>
