document.addEventListener('DOMContentLoaded', function() {
    const getVoucherBtn = document.getElementById('getVoucherBtn');
    const voucherForm = document.getElementById('voucherForm');

    if (getVoucherBtn) {
        getVoucherBtn.addEventListener('click', function() {
            document.body.classList.add('modal-open'); // Tambahkan kelas saat dialog muncul
            Swal.fire({
                title: 'Selamat!',
                text: 'Anda mendapatkan voucher!',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then((result) => {
                document.body.classList.remove('modal-open'); // Hapus kelas saat dialog ditutup
                if (result.isConfirmed) {
                    window.location.href = 'form.html';
                }
            });
        });
    }

    if (voucherForm) {
        voucherForm.addEventListener('submit', function(event) {
            event.preventDefault();
            Swal.fire({
                title: 'Berhasil!',
                text: 'Data Anda telah disubmit.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'voucher.html';
                }
            });
        });
    }
});