// Pesan selamat datang
window.onload = function() {
    alert("Selamat datang di halaman web sederhana!");
};

// Validasi form
document.getElementById("contactForm").addEventListener("submit", function(event) {
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();

    if (nama === "" || email === "") {
        alert("Harap isi semua data pada form kontak!");
        event.preventDefault();
    } else {
        alert("Terima kasih telah mengirim pesan, " + nama + "!");
    }
});
