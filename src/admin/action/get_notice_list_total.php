<?php

include('../common.php');
include('../db_conn.php');

header('Content-Type: text/html; charset=UTF-8');

$sql  = "
    SELECT notice.seq, notice.level, notice.title, notice.created_at 
    FROM artgg_notice notice
    WHERE notice.created_at >= str_to_date('2021-01-01', '%Y-%m-%d') AND notice.deleted_at IS NULL ORDER BY notice.seq DESC 
";

$result = mysqli_query($conn, $sql) or exit(mysqli_error($conn));
$notice_length = $result->num_rows;
$notice_list = array();

$result_array = array();

if ($notice_length > 0) {    
    while ($row = $result->fetch_array()) {
        array_push($notice_list, [
            'seq' => $row['seq'],
            'title' => getNoticeListViewTitme(intval($row['level']), $row['title']), 
            'created_at' => $row['created_at']
        ]);
    }
}


$result->free();

$result_array['notice_list'] = $notice_list;
$result_array['result'] = 1;

mysqli_close($conn);
flush();

echo json_encode($result_array, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

?>
