
document.querySelector('#btn-admin-logout').addEventListener('click', (e) => {
	e.preventDefault();
	e.stopPropagation();
	location.href = '/administrator/auth/logout';
});
