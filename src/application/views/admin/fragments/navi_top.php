<!-- #Main ============================ -->
<div class="page-container">
	<!-- ### $Topbar ### -->
	<div class="header navbar">
		<div class="header-container">
			<ul class="nav-left">
				<li><a id="sidebar-toggle" class="sidebar-toggle" href="javascript:void(0);"><i class="ti-menu"></i></a>
			</ul>
			<ul class="nav-right">
				<li class="dropdown">
					<a href="" class="dropdown-toggle no-after peers fxw-nw ai-c lh-1" data-bs-toggle="dropdown" style="margin-right: 1rem;">
						<div class="peer">
							<span class="fsz-sm c-grey-900">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
									<path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
								</svg>
							</span>
						</div>
					</a>
					<ul class="dropdown-menu fsz-sm">
						<li>
							<a href="<?= base_url('/administrator/main/changepw'); ?>" class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
								<i class="ti-user mR-10"></i>
								<span>비밀번호 변경</span>
							</a>
						</li>
						<li role="separator" class="divider"></li>
						<li>
							<a href="<?= base_url('/administrator/auth/logout'); ?>" class="d-b td-n pY-5 bgcH-grey-100 c-grey-700" id='btn-admin-logout'>
								<i class="ti-power-off mR-10"></i>
								<span>Logout</span>
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
