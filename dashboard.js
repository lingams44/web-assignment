Copy$(document).ready(function() {
    // Theme toggle
    $('#themeToggle').click(function() {
        $('body').toggleClass('light-theme dark-theme');
        $(this).text($('body').hasClass('light-theme') ? 'Dark Mode' : 'Light Mode');
    });

    // Expand/collapse panels
    $('.expand-btn').click(function() {
        $(this).closest('.card-body').find('.progress').toggleClass('d-none');
        $(this).text($(this).text() === 'Expand' ? 'Collapse' : 'Expand');
    });
});