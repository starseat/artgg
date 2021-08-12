<?php
defined('BASEPATH') or exit('No direct script access allowed');

function makeResultSuccess($data = '') {
	$resultArray = [
		'result' => TRUE, 
		'message' => 'success'
	];

	if( isset($data) && !empty($data)) {
		$resultArray['data'] = $data;
	}

	return $resultArray;
}

function makeResultSuccessOnData($data) {
	return [
		'result' => TRUE,
		'message' => 'success', 
		'data' => $data
	];
}

function makeResultError($msg = '') {
	return [
		'message' => $msg,
		'result' => FALSE
	];
}


function makeResult($result, $msg = '', $data = '') {
	return [
		'result' => $result, 
		'message' => $msg,
		'data' => $data
	];
}


function makeResultErrorNotLogin($msg = 'Not logged in.') {
	return makeResultError($msg);
}

function makeResultErrorNotAllowedHttpMethod($msg = 'Not allowed http method.') {
	return makeResultError($msg);
}

function makeResultErrorParam($msg = 'Invalid parameter.') {
	return makeResultError($msg);
}
