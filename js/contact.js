document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            alert('Gửi thành công!');
            contactForm.reset();
        });
    }
}); 