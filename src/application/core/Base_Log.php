<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Base_Log extends CI_Log
{
	/**
	 * Predefined logging levels
	 *
	 * @var array
	 */
	protected $_levels = array(
		// 'DISABLES' => 0, 
		'ERROR' => 1,
		'DEBUG' => 2,
		'INFO'  => 3,
		'ALL'   => 4,

		// Custom Log level
		'ARTGG'   => 5
	);

	public function __construct()
	{
		parent::__construct();
	}
}
