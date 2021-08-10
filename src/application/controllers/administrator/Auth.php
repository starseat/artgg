<?php
defined('BASEPATH') OR exit('No direct script access allowed');
include_once(APPPATH . 'controllers/administrator/AdminController.php');

class Auth extends AdminController {
	public function __construct()
	{
		parent::__construct();
		$this->load->helper('form');
	}

	public function index() {
		if ($this->session->userdata('is_login')) {
			// log_message('artgg', '[auth] login ok');
			return redirect('/administrator/main');
		}
		else {
			// log_message('artgg', '[auth] is not login.. go to login()');
			return $this->login();
		}
	}

	public function login() {
		$this->load->helper('alert');
		log_message('artgg', '[Auth.login] enter..');
		if ($this->session->userdata('is_login')) {
			log_message('artgg', '[Auth.login] login ok');
			return redirect('/administrator/main');
		}

		log_message('artgg', '[Auth.login] is not login..');
		if($this->input->method() == 'post') {
			return $this->_loginAction();
		}
		else { // if($this->input->method() == 'get') {
			log_message('artgg', '[Auth.login] show login page.');
			return $this->_loginView();
		}
	}

	private function _loginAction()
	{
		$this->load->library('form_validation');
		$this->load->helper('alert');

		$this->form_validation->set_rules('userId', 'User ID', 'trim|required|min_length[4]|max_length[12]');
		$this->form_validation->set_rules('userPwd', 'Password', 'trim|required|min_length[4]|max_length[12]');

		echo '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />';

		if ($this->form_validation->run()) {
			$login_data = array(
				'user_id' => $this->input->post('userId', TRUE),
				'password' => $this->input->post('userPwd', TRUE)
			);

			$this->load->model('member_model');
			$login_result = $this->member_model->login($login_data);

			if ($login_result['result']) {
				$session_data = array(
					'is_login' => true,
					'user_id' => $login_result['data']['user_id'],
					'email' => $login_result['data']['email'],
					'name' => $login_result['data']['name'],
					'member_type' => $login_result['data']['member_type']
				);

				$this->session->set_userdata($session_data);

				// 로그인 후에 원래 보던 페이지로 이동하는거 추가 필요
				return alert('로그인에 성공하였습니다.', '/administrator/main');
			} else {
				return alert($login_result['message'], base_url('/administrator/auth/login'));
			}
		} else {
			return alert('ID 또는 비밀번호를 정확히 입력해 주세요.', base_url('/administrator/auth/login'));
		}
	}

	private function _loginView() {
		return $this->load->view('admin/login');
	}	

	public function logout() {
		$this->load->helper('alert');
		$this->session->sess_destroy();

		return alert('로그아웃 되었습니다.', base_url('/'));
	}
}
