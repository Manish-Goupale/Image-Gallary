document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'images/IMAGE1.jpg',
        'images/IMAGE2.jpg',
        'images/IMAGE3.jpg',
        'images/IMAGE4.jpg',
        'images/IMAGE5.JPG',
        'images/IMAGE6.JPG',
        'images/IMAGE7.JPG',
        'images/IMAGE8.JPG',
        'images/IMAGE9.JPG',
        'images/IMAGE10.JPG',
        'images/IMAGE11.JPG'
        // Add more image paths as needed
    ];
    
    let currentIndex = 0;
    
    const galleryImage = document.getElementById('galleryImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    function updateImage(index) {
        galleryImage.src = images[index];
    }
    
    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage(currentIndex);
    }
    
    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage(currentIndex);
    }
    
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);
    
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            updateImage(currentIndex);
        });
    });
});
