
$(document).ready(function(){
    $("#register-button").click(function(e){
        e.preventDefault();

        let name = $("#name").val();
        let email = $("#email").val();
        let password = $("#password").val();
        let confirmpassword = $("#confirmpassword").val();
        let checkbox =    $('#checkbox').is(':checked');


        $(".error").remove();

        if(name.length<1){
            $("#name").after('<span class="error">This field is required</span>');
        }
        
        if(email.length<1){
            $("#email").after('<span class="error">This field is required</span>');
        }
        else {
            let regEx = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            let validEmail = regEx.test(email);
            if(!validEmail){
                $("#email").after('<span class="error">Enter a valid email</span>')
            }
        }
        if(password.length < 8){
            $("#password").after('<span class="error">Password length must be in 8 characters</span>');
        }
        if(password != confirmpassword){
            $("#confirmpassword").after('<span class="error"> password does not match</span>');
        }
        if(!checkbox)
        {
             $("#checkbox").after('<span class="error"> Please select checkbox</span>');
             valid = false;
        }
        else{
            valid = true;
        }

        let result = {name,email,password,confirmpassword,checkbox};
        console.log(result);

        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("password",password);
        localStorage.setItem("confirmpassword",confirmpassword);

        if(valid){
            debugger
           window.location.href="sign_in.html"; 
        }
    });
});