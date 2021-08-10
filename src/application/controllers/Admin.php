<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Admin extends Base_Controller
{
	public function __construct()
	{
		parent::__construct();

		$this->load->library('session');
	}

	public function index()
	{
		log_message('artgg', '[admin] enter..');
		if ($this->session->userdata('is_login')) {
			// todo..
			log_message('artgg', '[admin] login ok');
			redirect('/administrator/main');
		}
		else {
			log_message('artgg', '[admin] is not login. redirect [/administrator/auth/login]');
			redirect('/administrator/auth/login');
		}
		
	}
}
