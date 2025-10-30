Copy$(document).ready(function() {
    // Dynamic destination details
    $('#destination').on('input', function() {
        let dest = $(this).val();
        if (dest) {
            $('#destinationDetails').html(`
                <div class="destination-card">
                    <h5>${dest}</h5>
                    <p>Explore the beautiful ${dest} with our exclusive packages!</p>
                </div>
            `);
        }
    });

    // Form validation
    $('#bookingForm').on('submit', function(e) {
        e.preventDefault();
        if (this.checkValidity()) {
            alert('Booking confirmed!');
        } else {
            $(this).addClass('was-validated');
        }
    });
});
