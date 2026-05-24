<!-- JavaScript Fungsional & Aman -->
    <script>
        // Memilih elemen judul
        const h1 = document.querySelector('h1');
        
        // Menambahkan event listener saat judul diklik
        h1.addEventListener('click', () => {
            // Mengganti tema gelap/terang di seluruh halaman
            document.body.classList.toggle('light-mode');
            
            // Opsional: Memberikan sedikit efek 'denyut' saat diklik 
            // agar terasa lebih responsif seperti tombol sungguhan
            h1.style.transform = 'scale(0.95)';
            setTimeout(() => {
                h1.style.transform = 'scale(1.05)';
            }, 150);
        });
    </script>