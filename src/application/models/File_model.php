<?php
defined('BASEPATH') or exit('No direct script access allowed');

class File_model extends Base_Model
{
	const TYPE_IMAGE = 'I';
	const TYPE_VIDEO = 'V';
	const TYPE_FILE  = 'F';
	const TYPE_THUMBNAIL = 'T';
	const IMAGE_STORAGE_TYPE_WEB = 'W';
	const IMAGE_STORAGE_TYPE_LOCAL = 'L';


	public function __construct()
	{
		parent::__construct();
	}

	// ----------------------------------------------------------------------------------------------------
	// DB 처리
	// ----------------------------------------------------------------------------------------------------



	/**
	 * 파일 업로드
	 * storage_type 이 web 일 경우 upload_path 만. local 경우 upload_path + save_name 사용
	 * 
	 * @param [type] $insertInfo = ['target_seq', 'target', 'type', 'storage_type']
	 * @param [type] $fileInfo = ['name', 'saved_name', 'upload_path']
	 * @return void
	 */
	public function insertFile($insertInfo, $fileInfo)
	{
		$sql = "
		INSERT INTO artgg_file (target_seq, target, sort, type, storage_type, real_name, save_name, upload_path) 
		VALUES (?, ?, (select (ifnull(max(taf.sort), 0) + 1) as nsort from artgg_file taf where taf.target = ?), ?, ?, ?, ?, ?)
		";

		$this->db->trans_start();
		// $this->db->escape() 
		$insertResult = $this->db->query($sql, array(
			$insertInfo['target_seq'], $insertInfo['target'], $insertInfo['target'], $insertInfo['type'], $insertInfo['storage_type'], 
			$fileInfo['name'], $fileInfo['saved_name'], $fileInfo['upload_path']
		));
		$newFileSeq = 0;
		if ($insertResult) {
			$newFileSeq = intVal($this->db->insert_id());
		}
		$this->db->trans_complete();

		return makeResultSuccess($newFileSeq);
	}

	public function getFiles($target) {

		$sql = "
		SELECT seq, target_seq, target, sort, real_name, save_name, upload_path, caption1, caption2, caption3, type, storage_type 
		FROM artgg_file 
		WHERE target = ?
		ORDER BY sort ASC
		";

		$query_result = $this->db->query($sql, array($target));
		$file_data_list = $query_result->result_array();
		if($file_data_list = null || count($file_data_list) == 0) {
			$file_data_list = [];
		}
		return makeResultSuccessOnData($file_data_list);
	}



	// ----------------------------------------------------------------------------------------------------
	// Upload 처리
	// ----------------------------------------------------------------------------------------------------
	public function uploadImage($target) {
		
		if (empty($_FILES['uploadFile']['name'])) {
			return makeResultError('empty file name.');
		}

		return $this->_uploadImageAction($target);
	}

	public function multiUploadImages($target) {
		$files = $_FILES;
		$count = count($_FILES['uploadFiles']['name']);

		// log_message('artgg', '[File_model.multiUploadImages] target: ' . $target . ' / count: ' . $count);

		$result_data = array();

		if ($count == 0) {
			return makeResultError('empty file name.');
		}

		for($i=0; $i<$count; $i++) {
			$_FILES['uploadFile']['name'] = $files['uploadFiles']['name'][$i];
			$_FILES['uploadFile']['type'] = $files['uploadFiles']['type'][$i];
			$_FILES['uploadFile']['tmp_name'] = $files['uploadFiles']['tmp_name'][$i];
			$_FILES['uploadFile']['error'] = $files['uploadFiles']['error'][$i];
			$_FILES['uploadFile']['size'] = $files['uploadFiles']['size'][$i];

			$temp_result = $this->_uploadImageAction($target);
			// log_message('artgg', '[File_model.multiUploadImages] upload... ' . $i . '/' . ($count-1) . ' :: ' . json_encode($temp_result, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
			if($temp_result['result']) {
				array_push($result_data, $temp_result['data']);
			}
			else {
				return makeResultError('이미지 업로드 중 오류가 발생하였습니다.');
			}
		}

		return makeResultSuccess($result_data);
	}

	private function _getUploadImageOption($target)
	{
		$today = date("Ymd");
		$upload_path = 'public/upload/' . $target . '/' . $today . '/';
		if (!is_dir($upload_path)) {
			mkdir($upload_path, 0755, true);
		}

		return array(
			'upload_path' => $upload_path,
			'db_upload_path' => '/' . $upload_path,
			'allowed_types' => 'gif|png|jpg|jpeg',
			'encrypt_name' => TRUE,
			'max_size' => (1024 * 10)  // (kb)
		);
	}

	private function _uploadImageAction($target)
	{
		$uploadOption = $this->_getUploadImageOption($target);
		$this->load->library('upload', $uploadOption);

		if (!$this->upload->do_upload('uploadFile')) {
			return makeResult(false, 'upload image failed.', $this->upload->display_errors());
		}

		$uploadResultData = $this->upload->data();

		$uploadImageInfo = array(
			'target' => $target,
			'name' => $uploadResultData['orig_name'],
			'saved_name' => $uploadResultData['file_name'],
			'upload_path' => $uploadOption['db_upload_path'],
			'saved_path' => $uploadResultData['file_path']
		);

		return makeResultSuccess($uploadImageInfo);
	}
}
