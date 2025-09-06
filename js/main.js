document.addEventListener('DOMContentLoaded', () => {
    // Fetch and inject the header
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            
            // Now that the header is loaded, run the JS that makes it interactive
            initializeHeader();
        })
        .catch(error => {
            console.error('Error fetching the header:', error);
            // You can add a fallback message here if the header fails to load
            document.getElementById('header-placeholder').innerHTML = '<p>Error loading header.</p>';
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
}
