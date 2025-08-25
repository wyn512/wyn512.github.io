// 下拉菜单移动端支持
document.querySelectorAll('.dropdown > a').forEach(function(el) {
    el.addEventListener('click', function(e) {
        if (window.innerWidth < 900) {
            e.preventDefault();
            var menu = this.nextElementSibling;
            if (menu.style.display === 'block') {
                menu.style.display = 'none';
            } else {
                document.querySelectorAll('.dropdown-menu').forEach(function(m) {
                    m.style.display = 'none';
                });
                menu.style.display = 'block';
            }
        }
    });
});

// 气泡动画
function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = Math.random() * 40 + 20;
    bubble.style.width = bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.background = `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},0.3)`;
    bubble.style.animationDuration = (Math.random() * 4 + 6) + 's';
    document.querySelector('.bubble-container').appendChild(bubble);
    setTimeout(() => bubble.remove(), 8000);
}
setInterval(createBubble, 500);

// 个人简介渐显动画
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);