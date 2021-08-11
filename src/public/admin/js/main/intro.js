$(document).ready(function () {
    JWSwiper.initSwiper('youtube');
    initImageForm();
});

function initImageForm() {
    let image_option = getImageUploadDefaultOption();
    image_option.imagesInputName = 'main_images';
    image_option.label = '메인화면 이미지를 업로드 해주세요.';
    image_option.maxFiles = undefined;

    $('#main_images').imageUploader(image_option);
}

function showInsertImageModal() {
    $('#insertImageModal').modal('show');
}
