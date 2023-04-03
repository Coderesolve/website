let sliderImages = document.querySelectorAll('.image-slider img');
let currentIndex = 0;

function showImage(index) {
    sliderImages.forEach((img, i) => {
        if (i === index) {
            img.style.transform = 'translateX(0%)';
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

document.addEventListener('DOMContentLoaded', function () {
    //Hover Events for Mobile Responsiveness

    const memberCards = document.querySelectorAll('.member-card');

    function toggleMemberInfo(event) {
        const memberInfo = event.currentTarget.querySelector('.member-info');
        if (memberInfo.style.transform == 'translateY(0%)') {
            memberInfo.style.transform = 'translateY(100%)';
        }
        else {
            memberInfo.style.transform = 'translateY(0%)';
        }
    }

    memberCards.forEach(card => {
        card.addEventListener('click', toggleMemberInfo);
    });
});
