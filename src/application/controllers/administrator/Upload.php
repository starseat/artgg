<?php
defined('BASEPATH') OR exit('No direct script access allowed');
include_once(APPPATH . 'controllers/administrator/AdminController.php');

class Upload extends AdminController
{
	public function __construct() {
        parent::__construct();
	}

	public function test() {
		log_message('error', '[upload.test] start..');

		$result_array = [
			'result' => true,
			'code' => 1,
			'message' => 'test'
		];

		echo json_encode($result_array, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
	}

}