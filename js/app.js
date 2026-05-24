document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.content');
    const headline = document.querySelector('.headline');

    // 1. Efek Parallax Halus saat Mouse Bergerak
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;
        
        card.style.transform = `perspective(1000px) rotateY(${xPos}deg) rotateX(${-yPos}deg)`;
    });

    // 2. Efek Reset saat Mouse Keluar dari Window
    document.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    });

    // 3. Menambahkan Interaksi Klik (Efek Ripple Sederhana)
    card.addEventListener('click', () => {
        headline.style.transition = 'all 0.3s ease';
        headline.style.transform = 'scale(0.98)';
        setTimeout(() => {
            headline.style.transform = 'scale(1)';
        }, 300);
    });
});