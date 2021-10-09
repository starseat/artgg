<?php

include('../admin/common.php');
include('../admin/db_conn.php');

header('Content-Type: text/html; charset=UTF-8');

$sql  = "
    SELECT seq, use_yn, type, param, img_name, img_name_save, upload_path, updated_at
    FROM artgg_popup ORDER BY seq
";
$result = mysqli_query($conn, $sql) or exit(mysqli_error($conn));
$popup_length = $result->num_rows;
$popup_list = array();

$result_array = array();

if ($popup_length > 0) {    
    while ($row = $result->fetch_array()) {
        array_push($popup_list, [
            'index' => $row['seq'],
            'use_yn' => $row['use_yn'],
            'type' => $row['type'],
            'param' => $row['param'],
            'img_name' => $row['img_name'],
            'img_name_save' => $row['img_name_save'],
            'upload_path' => $row['upload_path'],
            'updated_at' => $row['updated_at']
        ]);
    }
}

$result_array = [
    'result' => 1, 
    'popup' => $popup_list
];

$result->free();

mysqli_close($conn);
flush();

echo json_encode($result_array, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

?>
