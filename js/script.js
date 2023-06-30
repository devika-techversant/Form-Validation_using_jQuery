$(document).ready(function() {
    $("#formToValidate").submit(function(event) {
        event.preventDefault();
        validateInputs();
    });

    function setError(element, message) {
        const inputControl = $(element).parent();
        const errorDisplay = inputControl.find(".errorMessage");
        errorDisplay.html(message);
        inputControl.addClass("errorStyle").removeClass("successStyle");
    }

    function setSuccess(element) {
        const inputControl = $(element).parent();
        const errorDisplay = inputControl.find(".errorMessage");
        errorDisplay.html("");
        inputControl.addClass("successStyle").removeClass("errorStyle");
    }

    function isValidName(name) {
        const regEx = /^[a-zA-Z\-]+$/;
        return regEx.test(name);
    }

    function isValidEmailID(emailID) {
        const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regEx.test(String(emailID).toLowerCase());
    }

    function isValidNumber(phoneNumber) {
        const regEx = /^\d{10}$/;
        return regEx.test(phoneNumber);
    }

    function validateInputs() {
        const firstNameValue = $("#firstName").val().trim();
        const lastNameValue = $("#lastName").val().trim();
        const emailIDValue = $("#emailID").val().trim();
        const phoneNumberValue = $("#phoneNumber").val().trim();
        const passwordValue = $("#password").val().trim();

        //Performing validation for inputs

        if (firstNameValue === "") {
            setError("#firstName", "First Name is required");
        } else if (!isValidName(firstNameValue)) {
            setError("#firstName", "Please provide a valid first name");
        } else {
            setSuccess("#firstName");
        }
        
        if (lastNameValue === "") {
            setError("#lastName", "Last Name is required");
        } else if (!isValidName(lastNameValue)) {
            setError("#lastName", "Please provide a valid last name");
        } else {
            setSuccess("#lastName");
        }

        if (emailIDValue === "") {
            setError("#emailID", "Email is required");
        } else if (!isValidEmailID(emailIDValue)) {
            setError("#emailID", "Please provide a valid email address");
        } else {
            setSuccess("#emailID");
        }

        if (phoneNumberValue === "") {
            setError("#phoneNumber", "Phone Number is required");
        } else if (!isValidNumber(phoneNumberValue)) {
            setError("#phoneNumber", "Please provide a valid phone number");
        } else {
            setSuccess("#phoneNumber");
        }

        if (passwordValue === "") {
            setError("#password", "Password is required");
        } else if (passwordValue.length < 8) {
            setError("#password", "Password must be at least 8 characters.");
        } else {
            setSuccess("#password");
        }

        // Form submission if there are no errors
        if ($(".errorMessage").text() === "") {
            // Uncomment the line below to submit the form
            // $("#formToValidate").submit();
            alert("Form submitted successfully!");
        }
    }
});