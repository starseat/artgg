<?php

include('../admin/common.php');
include('../admin/db_conn.php');

header('Content-Type: text/html; charset=UTF-8');

$result_array = array();

$notice_seq = 0;
$is_access = false;
if ($_SERVER['QUERY_STRING'] != '') {
    $notice_seq = $_GET['seq'];
    if (!isEmpty($notice_seq) && is_numeric($notice_seq)) {
        $is_access = true;
    }
}

if (!$is_access) {
    mysqli_close($conn);
    flush();

    $result_array['title'] = '';
    $result_array['contents'] = '잘못된 접근입니다.';
    $result_array['result'] = 0;

    echo json_encode($result_array, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
}

$notice_seq = intval(mysqli_real_escape_string($conn, $notice_seq));

$sql  = "SELECT seq, level, title, contents, view_count, created_at, updated_at FROM artgg_notice WHERE seq = $notice_seq";
$sql .= " Limit 1";
$result = mysqli_query($conn, $sql) or exit(mysqli_error($conn));
$notice_info = $result->fetch_assoc();
$result->free();

$result_array = $notice_info;
$result_array['result'] = 1;

// 조회수 처리
$notice_view_cookie_name = 'notice_view_' . $notice_seq;
if (!isset($_COOKIE[$notice_view_cookie_name]) || empty($_COOKIE[$notice_view_cookie_name])) {
    $sql  = 'UPDATE artgg_notice set view_count = view_count + 1 WHERE seq = ' . $notice_seq;
    $result = mysqli_query($conn, $sql) or exit(mysqli_error($conn));
    setcookie($notice_view_cookie_name, 1, time() + (60 * 60 * 24), '/');  // 1 day
}

mysqli_close($conn);
flush();

echo json_encode($result_array, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

?>
