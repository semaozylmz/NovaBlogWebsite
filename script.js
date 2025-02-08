// Sayfa içi bağlantılara yumuşak kaydırma (Smooth Scroll)
document.querySelectorAll('.post-read-more').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const postContent = this.closest('.post-content');
        const fullContent = postContent.querySelector('.post-full-content');
        const excerpt = postContent.querySelector('.post-excerpt');
        
        fullContent.classList.toggle('active');
        excerpt.classList.toggle('hidden');
        
        this.textContent = fullContent.classList.contains('active') ? 'Read Less' : 'Read More';
    });
});

// Navbar'ı aşağı kaydırınca stil değiştirme
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
