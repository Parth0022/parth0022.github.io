function showTab(event, tabId) {
    // Remove active class and aria-selected from all tabs and contents
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Add active class to clicked tab and corresponding content
    event.currentTarget.classList.add('active');
    event.currentTarget.setAttribute('aria-selected', 'true');
    document.getElementById(tabId).classList.add('active');

    // Smooth scroll to the top of the tab content
    document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('.tab').forEach((tab, index) => {
    tab.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            const nextTab = document.querySelectorAll('.tab')[index + 1] || document.querySelectorAll('.tab')[0];
            nextTab.focus();
            nextTab.click();
        } else if (event.key === 'ArrowLeft') {
            const prevTab = document.querySelectorAll('.tab')[index - 1] || document.querySelectorAll('.tab')[document.querySelectorAll('.tab').length - 1];
            prevTab.focus();
            prevTab.click();
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can add any form validation here if needed

    // Display success message
    const toast = document.getElementById('toast');
    toast.classList.add('show'); // Show the toast message

    // Clear the form fields after submission
    document.getElementById('contactForm').reset();

    // Hide the toast message after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
});

