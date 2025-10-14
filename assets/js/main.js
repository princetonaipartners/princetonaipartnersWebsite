document.addEventListener('DOMContentLoaded', () => {
    // Fetch and inject the header
    fetch('assets/includes/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(data => {
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = data;
                // Now that the header is loaded, run the JS that makes it interactive
                initializeHeader();
            }
        })
        .catch(error => {
            console.error('Error fetching the header:', error);
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = '<p>Error loading header.</p>';
            }
        });
});

// This function contains the logic specifically for the header's interactivity
function initializeHeader() {
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Mouse blur effect (if element exists)
    const mouseBlur = document.querySelector('.mouse-blur');
    if (mouseBlur) {
        window.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            mouseBlur.style.transform = `translate(${clientX - mouseBlur.offsetWidth / 2}px, ${clientY - mouseBlur.offsetHeight / 2}px)`;
        });
    }
}
