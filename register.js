   Copy$(document).ready(function() {
    // Form validation
    $('#registrationForm').on('submit', function(e) {
        e.preventDefault();
        if (this.checkValidity()) {
            alert('Registration successful!');
        } else {
            $(this).addClass('was-validated');
        }
    });

    // Preview data
    $('#previewBtn').click(function() {
        let name = $('#name').val();
        let email = $('#email').val();
        let college = $('#college').val();
        let event = $('#event').val();
        let date = $('#date').val();
        $('#preview').html(`
            <h5>Preview</h5>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>College:</strong> ${college}</p>
            <p><strong>Event:</strong> ${event}</p>
            <p><strong>Date:</strong> ${date}</p>
        `);
    });

    // Input focus/blur effects
    $('input, select').on('focus', function() {
        $(this).css('border-color', '#80bdff');
    }).on('blur', function() {
        $(this).css('border-color', '#ced4da');
    });
});
