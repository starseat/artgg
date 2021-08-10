<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends Base_Controller {
	public function __construct()
	{
		parent::__construct();
	}

	public function index() {

		$this->load->view('index');
	}

	/**
	 * 사이트 해더, 푸터 자동 추가
	 */
	public function _remap($method)
	{
		// 해더
		$this->_header();

		if (method_exists($this, $method)) {
			$this->{"${method}"}();
		}

		// 푸터
		$this->_footer();
	}

}
