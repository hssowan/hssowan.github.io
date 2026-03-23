// =============================
// Global JavaScript for School Website
// High School Sowan, Dumraon, Buxar
// =============================

// Smooth Scrolling for Menu Links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Auto-slideshow Speed Control (Bootstrap based)
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#schoolCarousel');
    if (carousel) {
        const carouselObj = new bootstrap.Carousel(carousel, {
            interval: 3000, // change slide every 3 seconds
            pause: 'hover'
        });
    }
});

// Notice Highlight Animation
const noticeItems = document.querySelectorAll('#notices ul li');
noticeItems.forEach((item, index) => {
    item.style.opacity = 0;
    setTimeout(() => {
        item.style.transition = '0.6s';
        item.style.opacity = 1;
    }, index * 200);
});

// Back-to-top Button (optional feature)
const topBtn = document.createElement('button');
topBtn.innerText = "↑";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px 15px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "5px";
topBtn.style.background = "#ff9933";
topBtn.style.color = "#fff";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.fontSize = "20px";
document.body.appendChild(topBtn);

topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});
