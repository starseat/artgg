<?php
defined('BASEPATH') or exit('No direct script access allowed');
include_once(APPPATH . 'controllers/administrator/AdminController.php');

class Main extends AdminController
{
	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		log_message('artgg', '[admin.main] enter..');
		$this->load->view('admin/main');
	}
}
