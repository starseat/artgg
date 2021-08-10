<?php
defined('BASEPATH') or exit('No direct script access allowed');

class AdminController extends Base_Controller {
	public function __construct()
	{
		parent::__construct();

		$this->load->library('session');

		// $this->load->helper('url');
		// if (!$this->session->userdata('is_login')) {
		// 	redirect('/administrator/auth/login');
		// }
	}
}
