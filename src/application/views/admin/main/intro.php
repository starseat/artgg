<main class="main-content bgc-grey-100">
	<div id="mainContent">
		<div class="container-fluid">
			<h4 class="c-grey-900 mT-10 mB-10">인트로 이미지</h4>
			<div class="row">
				<div class="text-end m-10">
					<button type="button" class="btn btn-primary mR-10" onclick="showInsertImageModal()">이미지 추가</button>
					<button type="button" class="btn btn-secondary mR-10" onclick="showUpdateContentsModal()">컨텐츠 관리</button>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="bgc-white bd bdrs-3 p-20 mB-20">

						<div class="swiper-container swiper-youtube-container">
							<div class="swiper-wrapper">
								<?php
								if (!empty($intros) && count($intros) > 0) {
									foreach ($intros as $item) {
								?>
										<div class="swiper-slide">
											<img class="swiper-lazy" src="<?= $item['upload_path'] . $item['save_name']; ?>" alt="<?= $item['real_name']; ?>">
										</div>
								<?php
									}
								}
								?>
							</div>

							<!-- Add Pagination -->
							<div class="swiper-pagination"></div>
							<!-- Add Navigation -->
							<div class="swiper-button-prev swiper-button-color"></div>
							<div class="swiper-button-next swiper-button-color"></div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</main>

<div class="modal fade" id="insertImageModal" tabindex="-1" aria-labelledby="insertImageModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="insertImageModalLabel">이미지 추가</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<?php
				// csrf 
				$attributes = array(
					'id' => 'insertImageModalForm',
					'name' => 'insertImageModalForm',
					'enctype' => 'multipart/form-data'
				);

				echo form_open('/administrator/main/intro/upload', $attributes);
				?>
				<div class="form-group">
					<div id="intro_images"></div>
				</div>
				</form>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
				<button type="button" class="btn btn-primary" onclick="submitIntroImage(event)">추가</button>
			</div>
		</div>
	</div>
</div>

<div class="modal fade" id="updateContentsModal" tabindex="-1" aria-labelledby="updateContentsModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
	<div class="modal-dialog modal-dialog-centered modal-xl">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="updateContentsModalLabel">컨텐츠 관리</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<div id="item-contents-box">
					<?php
					if (!empty($intros) && count($intros) > 0) {
						foreach ($intros as $item) {
					?>
							<div class="row item-box">
								<input type="hidden" id="item-seq-<?= $item['seq']; ?>" class="item-seq" value="<?= $item['seq']; ?>">
								<div class="col-2"><img class="w-100 h-100" src="<?= $item['upload_path'] . $item['save_name']; ?>" alt="<?= $item['real_name']; ?>"></div>
								<div class="col-8"><input type="text" class="form-control w-100" id="item-link-<?= $item['seq']; ?>"></div>
								<div class="col-2"><button class="btn btn-danger w-100" onclick="deleteContents(event, <?= $item['seq']; ?>);">삭제</div>
							</div>
					<?php
						}
					}
					?>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
				<button type="button" class="btn btn-primary">적용</button>
			</div>
		</div>
	</div>
</div>

<script src="https://code.jquery.com/ui/1.13.0-alpha.1/jquery-ui.min.js" integrity="sha256-ahTP8JLHwIplWgufAohh+E04ayoLEUBEwcH04eUmIdA=" crossorigin="anonymous"></script>
<script src="/public/admin/js/main/intro.js"></script>

<style>
	.item-box { border: solid 1px #cecece; margin: 1rem; }
</style>
