 document.addEventListener("DOMContentLoaded", function () {
            const guestbookForm = document.getElementById("guestbook-form");
            guestbookForm.addEventListener("submit", function (e) {
                e.preventDefault();

                // Mengambil nilai-nilai dari input
                const namaLengkap = document.getElementById("nama_lengkap").value;
                const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
                const alamat = document.getElementById("alamat").value;
                const email = document.getElementById("email").value;
                const facebook = document.getElementById("facebook").checked ? "Ya" : "Tidak";
                const twitter = document.getElementById("twitter").checked ? "Ya" : "Tidak";
                const instagram = document.getElementById("instagram").checked ? "Ya" : "Tidak";
                const path = document.getElementById("path").checked ? "Ya" : "Tidak";
                const info = document.getElementById("info").value;
                const pesan = document.getElementById("pesan").value;

                // Di sini Anda dapat mengirim data ke server atau melakukan tindakan lain sesuai kebutuhan
                // Misalnya, Anda bisa mengirim data ini ke server dengan menggunakan teknologi seperti AJAX atau Fetch API

                // Menampilkan pesan konfirmasi
                alert("Terima kasih atas pengisian buku tamu!");

                // Mereset formulir
                guestbookForm.reset();
            });
        });