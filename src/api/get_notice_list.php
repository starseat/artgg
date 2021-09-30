<?php

include('../admin/common.php');
include('../admin/db_conn.php');

header('Content-Type: text/html; charset=UTF-8');

$page = 1;
$is_access = false;
if ($_SERVER['QUERY_STRING'] != '') {
    $page = $_GET['page'];
    if (isEmpty($page) || !is_numeric($page)) {
        $page = 1;
    }
}

$page = mysqli_real_escape_string($conn, $page);
$page = isset($page) ? intval(trim($page)) : 1;


// 게시굴 수
$item_row_count = 5;
// 하단 페이지 block 수 (1, 2, 3, 4, ...  이런거)
$page_block_count = 5;

$sql = "SELECT COUNT(*) FROM artgg_notice WHERE created_at >= str_to_date('2021-01-01', '%Y-%m-%d') AND deleted_at IS NULL ";
$result = mysqli_query($conn, $sql) or exit(mysqli_error($conn));
$total_count = mysqli_fetch_array($result);
$total_count = intval($total_count[0]);
$result->free();

// 현재 페이지
$page = isset($_GET['page']) ? trim($_GET['page']) : 1;

$paging_info = getPagingInfo($page, $total_count, $item_row_count, $page_block_count);


$sql  = "
    SELECT notice_page.* FROM ( 
        SELECT @rownum:=@rownum-1 as num, notice.seq, notice.level, notice.title, notice.view_count, notice.created_at 
        FROM artgg_notice notice, 
            (SELECT @rownum:=(select count(*) FROM artgg_notice WHERE created_at >= str_to_date('2021-01-01', '%Y-%m-%d') AND deleted_at IS NULL)+1) rownum_temp 
        WHERE notice.created_at >= str_to_date('2021-01-01', '%Y-%m-%d') AND notice.deleted_at IS NULL ORDER BY notice.seq DESC 
    ) notice_page LIMIT " . $paging_info['page_db'] . ", $item_row_count
";

$result = mysqli_query($conn, $sql) or exit(mysqli_error($conn));
$notice_length = $result->num_rows;
$notice_list = array();

$result_array = array();

if ($notice_length > 0) {    
    while ($row = $result->fetch_array()) {
        array_push($notice_list, [
            'seq' => $row['seq'],
            'no' => $row['num'], 
            'title' => getNoticeListViewTitme(intval($row['level']), $row['title']), 
            'created_at' => $row['created_at'], 
            'view_count' => intval($row['view_count'])
        ]);
    }
}


$result->free();

$result_array['notice_list'] = $notice_list;
$result_array['paging_info'] = $paging_info;
$result_array['result'] = 1;

mysqli_close($conn);
flush();

echo json_encode($result_array, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

?>
