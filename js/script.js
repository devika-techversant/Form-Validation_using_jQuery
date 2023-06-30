$(document).ready(function() {
    $("#formToValidate").submit(function(event) {
        event.preventDefault();
        
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let password = $('#password').val();
        let emailID = $('#emailID').val();
        let phoneNumber = $('#phoneNumber').val();
        let feedback = $('#feedback').val();

        $(".error").remove();
            
        if (firstName.length < 1){
            $('#firstName').after('<div class="error">First Name is required</div>');
        } else {
            let regEx = /^[a-zA-Z\-]+$/;
            let validName = regEx.test(firstName);

            if (!validName) {
                $('#firstName').after('<div class="error">Please provide a valid first name</div>');
            }
        }
            
        if (lastName.length < 1){
            $('#lastName').after('<div class="error">Last Name is required</div>');
        } else {
            let regEx = /^[a-zA-Z\-]+$/;
            let validName = regEx.test(firstName);

            if (!validName) {
                $('#lastName').after('<div class="error">Please provide a valid last name</div>');
            }
        }

        if (emailID.length < 1) {
            $('#emailID').after('<div class="error">Email is required</div>');
        } else {
            var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var validEmail = regEx.test(emailID);
            if (!validEmail) {
                $('#email').after('<div class="error">Enter a valid email</div>');
            }
        }
        
        if (phoneNumber.length < 1) {
            $('phoneNumber').after('<div>Phone Number is required</div>')
        } else {
            let regEx = /^\d{10}$/;
            let validPhoneNumber = regEx.test(phoneNumber);

            if (!validPhoneNumber){
            $('#phoneNumber').after('<div class="error">Please provide a valid phone number</div>');
            }
        }            
    
        if (password.length < 1){
            $('#password').after('<div class="error">Password is required</div>');
        } else if (password.length < 8) {
            $('password').after('<div class="error>Password must be at least 8 characters</div>');
        }        
            
        if ($('input[name="gender"]:checked').length == 0) {
            $('.radioButtonClass').after('<div class="error">select any</div>');
        }

        if ($('input[name="agreeMessage"]:checked').length == 0){
            $('.checkboxClass').after('<div class="error">select any</div>');
        } 

        if ($('input[name="termsAgreement"]:checked').length == 0) {
            $('#termsAgreement').after('<div class="error">select any</div>');
        } 

        // if($('input[name="stateInIndia"]:checked').length == 0){
        //     $('.dropDownClass').after('<div class="error">select any</div>');

        if (feedback.length < 1) {
            $('#feedback').after('<div class="error">select any</div>');
        }	

        // Form submission if there are no errors
        if ($(".error").text() === "") {
            // Uncomment the line below to submit the form
            // $("#formToValidate").submit();
            alert("Form submitted successfully!");
        }
    });
});