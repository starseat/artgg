<?php
defined('BASEPATH') or exit('No direct script access allowed');

class AdminController extends Base_Controller {
	public function __construct()
	{
		parent::__construct();

		$this->load->library(array('session', 'form_validation'));
		$this->load->helper(array('form', 'result', 'alert'));

		if (!$this->session->userdata('is_login')) {
			$url1 = $this->uri->segment(2);
			if (empty($url1) || $url1 != 'auth') {
				return redirect('/administrator/auth/login');
			}
			else {
				$url2 = $this->uri->segment(3);
				if(empty($url2) || !($url2 == 'login' || $url2 == 'logout') ) {
					return redirect('/administrator/auth/login');
				}
			}			
		}
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
