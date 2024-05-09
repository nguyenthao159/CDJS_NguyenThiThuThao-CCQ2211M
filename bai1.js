document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('studentForm');
    const errorMessages = document.getElementById('errorMessages');

    form.addEventListener('submit', function(event) {
        errorMessages.innerHTML = '';
        const maSVInput = document.getElementById('maSV');
        const hoTenInput = document.getElementById('hoTen');
        const emailInput = document.getElementById('email');
        const dienThoaiInput = document.getElementById('dienThoai');
        const lopInput = document.getElementById('lop');

        if (!maSVInput.checkValidity()) {
            errorMessages.innerHTML += '<p class="error">Mã SV không hợp lệ</p>';
            event.preventDefault();
        }

        if (!hoTenInput.checkValidity()) {
            errorMessages.innerHTML += '<p class="error">Họ Tên không được để trống</p>';
            event.preventDefault();
        }

        if (!emailInput.checkValidity()) {
            errorMessages.innerHTML += '<p class="error">Email không hợp lệ</p>';
            event.preventDefault();
        }

        if (!dienThoaiInput.checkValidity()) {
            errorMessages.innerHTML += '<p class="error">Số điện thoại không hợp lệ</p>';
            event.preventDefault();
        }

        if (!lopInput.checkValidity()) {
            errorMessages.innerHTML += '<p class="error">Lớp không hợp lệ</p>';
            event.preventDefault();
        }
    });
});