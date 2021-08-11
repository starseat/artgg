<main class="main-content bgc-grey-100">
    <div id="mainContent">
        <div class="container-fluid">
            <h4 class="c-grey-900 mT-10 mB-30">비밀번호 변경</h4>
            <div class="row">
                <div class="col-md-12">
                    <div class="bgc-white bd bdrs-3 p-20 mB-20">
                    <?php
                        // csrf 
                        $attributes = array(
                            'id' => 'changePasswordForm',
                            'name' => 'changePasswordForm'
                        );

                        echo form_open('/administrator/main/changepw', $attributes);
                    ?>
                            <div class="mb-3">
                                <label class="form-label" for="currentPassword">현재 비밀번호</label>
                                <input type="password" class="form-control" id="currentPassword" name="currentPassword" required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="newPassword">새로운 비밀번호</label>
                                <input type="password" class="form-control" id="newPassword" name="newPassword" required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="checkPassword">새로운 비밀번호 확인</label>
                                <input type="password" class="form-control" id="checkPassword" name="checkPassword" onkeyup="checkPasswordKeyUp(event)" required>
                                <div id="checkPassword-Feedback" class="invalid-feedback">비밀번호를 확인해 주세요.</div>
                            </div>
                            <button type="submit" class="btn btn-primary btn-color" onclick="submitChangePassword(event);">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<script>
    function submitChangePassword(event) {
        event.preventDefault();
        event.stopPropagation();

        if($('#newPassword').val() != $('#checkPassword').val()) {
            $('#checkPassword').addClass('is-invalid').focus();
            return false;
        }

        $('#changePasswordForm').submit();
    }

    function checkPasswordKeyUp(event) {
        var $checkPassword = $('#checkPassword');
        if($checkPassword.hasClass('is-invalid')) {
            $checkPassword.removeClass('is-invalid');
        }
    }
</script>