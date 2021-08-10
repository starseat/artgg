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
		if ($this->session->userdata('is_login')) {
			redirect('/administrator/main');
		}
		else {
			redirect('/administrator/auth/login');
		}		
	}
}
