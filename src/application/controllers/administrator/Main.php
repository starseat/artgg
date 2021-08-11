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
		$this->load->view('admin/index');
	}

	public function changepw() {
		if($this->input->method() == 'post') {
			$this->_changePasswordAction();
		}
		else { // if($this->input->method() == 'get') {
			$this->load->view('admin/main/change_password');
		}		
	}

	public function intro() {
		$this->load->view('admin/main/intro');
	}

	public function image() {
		$this->load->view('admin/main/image');
	}

	private function _changePasswordAction() {
		$this->form_validation->set_rules('currentPassword', '현재 비밀번호', 'trim|required|min_length[4]|max_length[128]');
		$this->form_validation->set_rules('newPassword', '새로운 비밀번호', 'trim|required|min_length[4]|max_length[128]');

		echo '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />';

		if (!$this->form_validation->run()) {
			return alert('입력된 정보가 올바르지 않습니다.', base_url('/administrator/main/changepw'));
		}

		$currentPassword = $this->input->post('currentPassword', TRUE);
		$newPassword = $this->input->post('newPassword', TRUE);

		$this->load->model('member_model');
		$userData = array(
			'seq' => $this->session->userdata('seq'), 
			'user_id' => $this->session->userdata('user_id')
		);

		$password_result = $this->member_model->getPassword($userData);
		if (!$password_result['result']) {
			return alert($password_result['message'], base_url('/administrator/main/changepw'));
		}

		if (!$this->member_model->password_matches($currentPassword, $password_result['data'])) {
			return alert('현재 비밀번호가 일치하지 않습니다.', base_url('/administrator/main/changepw'));
		} 

		$userData['new_password'] = $newPassword;
		// log_message('artgg', '[Main._changePasswordAction] new userData:: ' . json_encode($userData, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
		$this->member_model->changePassword($userData);
		return alert('비밀번호가 변경되었습니다.', base_url('/administrator/main/changepw'));
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
