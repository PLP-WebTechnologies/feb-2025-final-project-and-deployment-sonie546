// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Shopping Cart Functionality
    const cart = [];

    const updateCart = (productName) => {
        cart.push(productName);
        alert(`${productName} added to cart!`);
        console.log('Cart:', cart);
    };

    const cartButtons = document.querySelectorAll('.add-to-cart');
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.closest('.product-card').querySelector('h3').textContent;
            updateCart(productName);
        });
    });

    // Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message sent successfully!');
            contactForm.reset();
        });
    }

    // CTA Button Animation
    const ctaButton = document.getElementById('ctaButton');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            ctaButton.classList.add('clicked');
            setTimeout(() => {
                window.location.href = 'products.html';
            }, 300);
        });
    }
});