<?php
defined('BASEPATH') or exit('No direct script access allowed');

class AdminController extends Base_Controller {
	public function __construct()
	{
		parent::__construct();

		$this->load->library('session');
	}
}
