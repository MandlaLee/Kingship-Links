(function() {
    console.log("Kingship Christian Centre | The Thrive Generation — Link in Bio ready");
    
    // Logo fallback: show clean placeholder if logo.png is missing
    const logoImg = document.querySelector('.logo-img');
    const logoPlaceholder = document.querySelector('.logo-placeholder');
    if (logoImg && logoPlaceholder) {
        logoImg.addEventListener('error', function() {
            logoImg.style.display = 'none';
            if (logoPlaceholder) {
                logoPlaceholder.style.display = 'flex';
            }
        });
    }
    
    // Liquid glass parallax effect
    const card = document.querySelector('.glass-card');
    if (card) {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 0.02;
            const y = ((e.clientY - rect.top) / rect.height) * 0.02;
            card.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg)`;
            card.style.transition = 'transform 0.1s ease-out';
        });
        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
            card.style.transition = 'transform 0.3s ease';
        });
    }
    
    // Handle missing social images
    const imageSlots = document.querySelectorAll('.social-icon-img img');
    if (imageSlots.length) {
        imageSlots.forEach(img => {
            img.addEventListener('error', function() {
                console.log(`Image missing: ${img.src} — using Font Awesome fallback`);
            });
        });
    }
    
    // Thrive badge heartbeat
    const thriveBadge = document.querySelector('.thrive-badge');
    if (thriveBadge) {
        setInterval(() => {
            thriveBadge.style.transform = 'scale(1.02)';
            setTimeout(() => {
                if (thriveBadge) thriveBadge.style.transform = '';
            }, 400);
        }, 4000);
    }
    
    // Click tracking
    const allLinks = document.querySelectorAll('.social-link');
    allLinks.forEach(link => {
        link.addEventListener('click', function() {
            const platform = this.querySelector('.platform-name')?.innerText || 'social';
            console.log(`[Thrive Link] Clicked: ${platform} -> ${this.href}`);
        });
    });
    
    // Fade-in animation
    if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(15px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    }
})();
