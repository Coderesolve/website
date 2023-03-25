let sliderImages = document.querySelectorAll('.image-slider img');
let currentIndex = 0;

function showImage(index) {
    sliderImages.forEach((img, i) => {
        if (i === index) {
            img.style.transform = 'translateX(0%)';
        }
        else if (i === (index + sliderImages.length - 1) % sliderImages.length) {
            img.style.transform = 'translateX(-100%)';
        }
        else {
            img.style.transform = 'translateX(100%)';
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    showImage(currentIndex);
}

// Set the initial image display
showImage(currentIndex);

// Set the fixed time interval for the image slider
setInterval(nextImage, 3000);
