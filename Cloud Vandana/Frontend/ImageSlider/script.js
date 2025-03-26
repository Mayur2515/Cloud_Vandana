document.addEventListener('DOMContentLoaded', function() {
    // Array of local image URLs from Images/ folder
    const images = [
        { src: 'Images/Nature.avif', caption: 'Beautiful Nature' },
        { src: 'Images/Ocean.avif', caption: 'Serene Ocean' },
        { src: 'Images/Sunset.avif', caption: 'Stunning Sunset' }
    ];
    
    const slider = document.getElementById('slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    
    // Create slides dynamically
    function initializeSlider() {
        // Clear any existing content
        slider.innerHTML = '';
        
        // Create slides
        images.forEach((image, index) => {
            const slide = document.createElement('div');
            slide.className = 'slide';
            if (index === 0) slide.classList.add('active');
            
            slide.innerHTML = `
                <img src="${image.src}" alt="${image.caption}">
                <div class="slide-caption">${image.caption}</div>
            `;
            
            slider.appendChild(slide);
        });
    }
    
    // Show specific slide
    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Show current slide
        slides[index].classList.add('active');
        currentSlide = index;
    }
    
    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % images.length;
        showSlide(currentSlide);
    }
    
    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + images.length) % images.length;
        showSlide(currentSlide);
    }
    
    // Initialize the slider
    initializeSlider();
    
    // Button event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });
    
    // Auto slide (optional)
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
});