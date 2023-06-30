$(document).ready(function() {
    $("#formToValidate").submit(function(event) {
        event.preventDefault();

        // Email ID validation function
        function isValidEmail(email) {
            // Regular expression for email validation
            let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailPattern.test(email);
        }

        // Phone number validation function
        function isValidPhoneNumber(phoneNumber) {
            // Regular expression for phone number validation
            let phoneNumberPattern = /^\d{10}$/;
            return phoneNumberPattern.test(phoneNumber);
        }

        // Reset error messages
        $(".errorMessage").empty();

        // Fetch form inputs
        let firstName = $("#firstName").val().trim();
        let lastName = $("#lastName").val().trim();
        let emailID = $("#emailID").val().trim();
        let phoneNumber = $("#phoneNumber").val().trim();
        let password = $("#password").val().trim();
        let gender = $("input[name='gender']:checked").val();
        let agreeMessage = $("input[name='agreeMessage']:checked").length > 0;
        let termsAgreement = $("input[name='termsAgreement']:checked").length > 0;
        // let stateInIndia = $("#stateInIndia").val();
        let feedback = $("#feedback").val().trim();

        // Validate First Name
        if (firstName === "") {
            $("#firstName").siblings(".errorMessage").text("First name is required.");
        }

        // Validate Last Name
        if (lastName === "") {
            $("#lastName").siblings(".errorMessage").text("Last name is required.");
        }

        // Validate Email ID
        if (emailID === "") {
            $("#emailID").siblings(".errorMessage").text("Email ID is required.");
        } else if (!isValidEmail(emailID)) {
            $("#emailID").siblings(".errorMessage").text("Invalid email ID.");
        }

        // Validate Phone Number
        if (phoneNumber === "") {
            $("#phoneNumber").siblings(".errorMessage").text("Phone number is required.");
        } else if (!isValidPhoneNumber(phoneNumber)) {
            $("#phoneNumber").siblings(".errorMessage").text("Invalid phone number.");
        }

        // Validate Password
        if (password === "") {
            $("#password").siblings(".errorMessage").text("Password is required.");
        }

        // Validate Gender
        if (!gender) {
            $(".radioButtonClass .errorMessage").text("Please select a gender.");
        }

        // Validate Agree Message
        if (!agreeMessage) {
            $(".checkboxClass .errorMessage").text("Please agree to be contacted.");
        }

        // Validate Terms Agreement Message
        if (!termsAgreement) {
            $(".checkboxClassTwo .errorMessage").text("Please agree to be contacted.");
        }

        // Validate State
        if (stateInIndia === "") {
            $("#stateInIndia").siblings(".errorMessage").text("Please select a country.");
        }

        // Validate Feedback
        if (feedback === "") {
            $("#feedback").siblings(".errorMessage").text("Feedback is required.");
        }

        // Form submission if there are no errors
        if ($(".errorMessage").text() === "") {
            // Uncomment the line below to submit the form
            // $("#formToValidate").submit();
            alert("Form submitted successfully!");
        }
    });
});