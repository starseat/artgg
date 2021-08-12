<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Member_model extends Base_Model
{
	const MEMBER_TYPE_ADMIN = 'A';
	const MEMBER_TYPE_MANAGER = 'M';
	const MEMBER_TYPE_BASIC = 'B';
	
	public function __construct()
	{
		parent::__construct();
	}

	public function login($loginData)
	{
		$result_data = null;

		$sql = "SELECT seq, user_id, email, name, password, member_type FROM artgg_members WHERE user_id = ? AND deleted_at IS NULL";

		$query_result = $this->db->query($sql, array($loginData['user_id']));

		if ($query_result->num_rows() > 0) {
			$userInfo = $query_result->row_array();
			if ($this->password_matches($loginData['password'], $userInfo['password'])) {
				$result_data = makeResultSuccess(array_diff($query_result->row_array(), array('password')));
			} else {
				$result_data = makeResultError('비밀번호가 일치하지 않습니다.');
			}
		} else {
			$result_data = makeResultError('사용자를 찾을 수 없습니다.');
		}

		return $result_data;
	}

	public function getPassword($userData) {
		$result_data = null;

		$sql = "SELECT password FROM artgg_members WHERE seq = ? AND user_id = ? AND deleted_at IS NULL";
		$query_result = $this->db->query($sql, array($userData['seq'], $userData['user_id']));

		if ($query_result->num_rows() > 0) {
			$result_data = makeResultSuccess($query_result->row()->password);
		} else {
			$result_data = makeResultError('비밀번호를 찾을 수 없습니다.');
		}
		
		return $result_data;
	}

	public function changePassword($userData) {
		$sql = "UPDATE artgg_members SET password = ? WHERE seq = ? AND user_id = ? AND deleted_at IS NULL";

		$this->db->trans_start();
		$this->db->query($sql, array(
			$this->password_encrypt($userData['new_password']), $userData['seq'], $userData['user_id']
		));
		$this->db->trans_complete();
	}


	public function password_encrypt($password)
	{
		return password_hash($password, PASSWORD_DEFAULT /*, $option */);
	}

	public function password_matches($password, $hashed_password)
	{
		return password_verify($password, $hashed_password /*, options */);
	}
}
