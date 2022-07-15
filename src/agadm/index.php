<?php
include_once('./action/login_check.php');
?>

<?php
if (isset($_SESSION['is_login']) && !empty($_SESSION['is_login']) && $_SESSION['is_login'] == 1) {
    echo '<meta http-equiv="refresh" content="0 url=../index.php" />';
}
?>