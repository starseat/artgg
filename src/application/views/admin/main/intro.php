<main class="main-content bgc-grey-100">
	<div id="mainContent">
		<div class="container-fluid">
			<h4 class="c-grey-900 mT-10 mB-10">인트로 이미지</h4>
			<div class="row">
				<div class="text-end m-10">
					<button type="button" class="btn btn-primary mR-10" onclick="showInsertImageModal()">이미지 추가</button>
					<button type="button" class="btn btn-secondary mR-10" onclick="showModifyContentsModal()">컨텐츠 관리</button>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="bgc-white bd bdrs-3 p-20 mB-20">

						<div class="swiper-container swiper-youtube-container">
							<div class="swiper-wrapper">

								<div class="swiper-slide"><img class="swiper-lazy" src="/public/admin/temp/1.png"></div>
								<div class="swiper-slide"><img class="swiper-lazy" src="/public/admin/temp/2.png"></div>
								<div class="swiper-slide"><img class="swiper-lazy" src="/public/admin/temp/3.png"></div>
								<div class="swiper-slide"><img class="swiper-lazy" src="/public/admin/temp/4.png"></div>

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
					<input type="hidden" id="insert_type_image" name="insert_type" value="image" />
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


<script src="/public/admin/js/main/intro.js"></script>
