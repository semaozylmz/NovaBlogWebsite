// Dark Mode Toggle
const themeToggle = document.createElement('div');
themeToggle.className = 'theme-toggle';
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// LocalStorage'den tema durumunu yükle
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}
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
// Social Share Butonları
document.querySelectorAll('.share-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const platform = this.dataset.platform;
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        
        let shareUrl;
        switch(platform) {
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
                break;
            case 'whatsapp':
                shareUrl = `https://api.whatsapp.com/send?text=${title} ${url}`;
                break;
        }
        
        window.open(shareUrl, '_blank', 'width=600,height=400');
    });
});