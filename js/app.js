/* ==================================================
   SMOOTH INTERACTIVE JS - PROFESSIONAL PERFORMANCE
   ================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.content');

    // Menggunakan requestAnimationFrame agar animasi sangat halus
    let xTarget = 0, yTarget = 0;
    let xCurrent = 0, yCurrent = 0;

    document.addEventListener('mousemove', (e) => {
        // Menghitung posisi kursor relatif terhadap tengah layar
        xTarget = (e.clientX / window.innerWidth - 0.5) * 20;
        yTarget = (e.clientY / window.innerHeight - 0.5) * 20;
    });

    function animate() {
        // Efek "easing" agar gerakan tidak kaku
        xCurrent += (xTarget - xCurrent) * 0.1;
        yCurrent += (yTarget - yCurrent) * 0.1;

        card.style.transform = `perspective(1000px) rotateY(${xCurrent}deg) rotateX(${-yCurrent}deg)`;
        
        requestAnimationFrame(animate);
    }

    // Reset posisi saat mouse keluar
    document.addEventListener('mouseleave', () => {
        xTarget = 0;
        yTarget = 0;
    });

    animate();
});