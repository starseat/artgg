<?php
defined('BASEPATH') OR exit('No direct script access allowed');
include_once(APPPATH . 'controllers/administrator/AdminController.php');

class Auth extends AdminController {
	public function __construct()
	{
		parent::__construct();
	}

	public function index() {
		log_message('artgg', '[auth] enter..');
		if ($this->session->userdata('is_login')) {
			log_message('artgg', '[auth] login ok');
		}
		else {
			log_message('artgg', '[auth] is not login.. go to login()');
			$this->login();
		}
	}

	public function login() {
		log_message('artgg', '[auth.login] enter..');
		$this->load->view('admin/login');
	}

	public function logout() {
		// todo..
	}
}
