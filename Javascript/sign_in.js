
$(document).ready(function(){

    $("sign-in").submit(function(e){
        e.preventDefault();
        
        let email = $("#email").val();
        let password = $("#password").val();

        $(".error").remove();

        if(email.legnth<1){
            $("#email").after('<span class="error">This field is required</span>');
        }
        else {
            let regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
            let validEmail = regEx.test(email);
            if(!validEmail){
                $("email").after('<span class="error">Enter a valid email')
            }
        }
        if(password.length<8){
            $("#password").after('<span class="error">Password must contain 8 characters');
        }

        });
});