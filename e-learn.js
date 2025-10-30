Copy$(document).ready(function() {
    // Login form validation
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        if (this.checkValidity()) {
            alert('Login successful!');
        } else {
            $(this).addClass('was-validated');
        }
    });

    // Animate courses
    $('#courseRow').hide().slideDown(1000);
});
