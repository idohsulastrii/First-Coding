const btn = document.getElementById('colorBtn');
btn.addEventListener('click', () => {
    const randomHue = Math.floor(Math.random() * 360);
    document.body.style.background = `linear-gradient(135deg, hsl(${randomHue}, 70%, 60%), hsl(${randomHue + 40}, 70%, 40%))`;
});