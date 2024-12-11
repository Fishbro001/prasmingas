document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('searchIcon');
    const searchMobile = document.getElementById('searchMobile');

    searchIcon.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        searchMobile.classList.toggle('hidden'); // Toggle the 'hidden' class
    });

    // Optional: Close the dropdown if clicked outside
    document.addEventListener('click', function(event) {
        if (!searchMobile.contains(event.target) && !searchIcon.contains(event.target)) {
            searchMobile.classList.add('hidden'); // Hide the dropdown
        }
    });
});

