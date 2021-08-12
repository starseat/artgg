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
		$requestUrl = $this->uri->segment(4);
		if(!empty($requestUrl) && $requestUrl == 'upload') {
			if($this->input->method() != 'post') {
				return redirect('/administrator/main/intro');
			}

			$result_data = $this->_uploadImage('intro');
			$alert_message = '';
			if($result_data['result']) {
				$alert_message = '이미지가 등록되었습니다.';
			}
			else {
				$alert_message = $result_data['message'];
			}
			return alert($alert_message, base_url('/administrator/main/intro'));
		}
		else {

			$this->load->view('admin/main/intro');
		}
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

	private function _uploadImage($target) {
		$this->load->model('file_model');

		$result_data = $this->file_model->multiUploadImages($target);
		log_message('artgg', '[Main._uploadImage] result_data:: ' . json_encode($result_data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
		if(!$result_data['result']) {
			return $result_data;
		}

		$uploadFiles = $result_data['data'];
		$uploadCount = count($uploadFiles);
		$insertInfo = array(
			'target_seq' => 0, 
			'target' => $target, 
			'type' => File_model::TYPE_IMAGE, 
			'storage_type' => File_model::IMAGE_STORAGE_TYPE_LOCAL
		);

		for($i=0; $i<$uploadCount; $i++) {
			$this->file_model->insertFile($insertInfo, $uploadFiles[$i]);
		}

		return makeResultSuccess();
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
