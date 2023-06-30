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
            
        if(firstName.length<1){
            $('#firstName').after('<div class="error">name is required</div>');
        }    
            
        if(lastName.length<1){
            $('#lastName').after('<div class="error">name is required</div>');
        }
    
        if(password.length<5){
            $('#password').after('<div class="error">password should have 8 character</div>');
        }
        if (emailID.length < 1) {
            $('#emailID').after('<div class="error">enter the email</div>');
        } else {
            var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var validEmail = regEx.test(emailID);
            if (!validEmail) {
                $('#email').after('<div class="error">Enter a valid email</div>');
            }
        }
            
        if(isNaN(phoneNumber) || phoneNumber.length <10 || phoneNumber.length>10){
            $('#phoneNumber').after('<div class="error">enter the phone number</div>');
        }
            
        if($('input[name="gender"]:checked').length == 0){
            $('.radioButtonClass').after('<div class="error">select any</div>');
        }

        if($('input[name="agreeMessage"]:checked').length == 0){
            $('.checkboxClass').after('<div class="error">select any</div>');
        }else{
        }	

        if($('input[name="termsAgreement"]:checked').length == 0){
            $('#termsAgreement').after('<div class="error">select any</div>');
        }else{
        }	

        // if($('input[name="stateInIndia"]:checked').length == 0){
        //     $('.dropDownClass').after('<div class="error">select any</div>');
        // }else{
        // }	

        if(feedback.length < 1){
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