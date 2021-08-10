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

	/**
	 * 파일 업로드
	 * storage_type 이 web 일 경우 upload_path 만. local 경우 upload_path + save_name
	 * 
	 * @param [type] $fileInfo
	 * @return void
	 */
	public function insertFile($fileInfo) {
		/*
		$fileInfo['target_seq'] = // 해당 seq
		$fileInfo['type'] = 
		$fileInfo['real_name'] = // 이미지 원래 이름 
		$fileInfo['save_name'] = // 저장 이름
		$fileInfo['upload_path'] = // 저장 경로
		*/
		$fileInfo['created_at'] = date('Y-m-d H:i:s');		

		$this->db->trans_start();
		// $this->db->escape() 
		$insertResult = $this->db->query($this->db->insert_string('artgg_file', $fileInfo));
		$newFileSeq = 0;
		if($insertResult) {
			$newFileSeq = intVal($this->db->insert_id());
		}
		$this->db->trans_complete();

		return $newFileSeq;
	}
}