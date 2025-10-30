Copy$(document).ready(function() {
    // Live clock
    function updateClock() {
        let now = new Date();
        $('#clock').text(now.toLocaleTimeString());
    }
    setInterval(updateClock, 1000);

    // Dynamic greeting
    let hour = new Date().getHours();
    let greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';
    $('#greeting').text(greeting);

    // Load project details
    $('.details-btn').click(function() {
        let title = $(this).closest('.card').find('.card-title').text();
        $('#projectModal .modal-body').html(`
            <p><strong>${title}</strong> is a project built with modern web technologies.</p>
        `);
    });

    // Smooth scrolling
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });
});