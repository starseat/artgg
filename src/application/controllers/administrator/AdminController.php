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

	protected function _header() {
		$this->load->view('admin/fragments/head');
		$this->load->view('admin/fragments/header');

		$this->load->view('admin/fragments/navi');
		$this->load->view('admin/fragments/navi_top');
	}

	protected function _footer() {
		$this->load->view('admin/fragments/footer');
		$this->load->view('admin/fragments/tail');
	}
}
