// Tambahkan script ini tepat sebelum penutup </body>

<script>
    const h1 = document.querySelector('h1');

    // Efek: Teks sedikit membesar saat diarahkan kursor (Hover)
    h1.addEventListener('mouseover', () => {
        h1.style.transition = 'all 0.5s ease';
        h1.style.transform = 'scale(1.05)';
        h1.style.color = '#aaaaaa'; // Berubah warna menjadi abu-abu elegan saat dihover
    });

    // Efek: Kembali normal saat kursor menjauh
    h1.addEventListener('mouseout', () => {
        h1.style.transform = 'scale(1)';
        h1.style.color = '#ffffff';
    });
</script>