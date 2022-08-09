
$(document).ready(function(){
    $("#sign-up").submit(function(e){
        e.preventDefault();

        console.log("hello all");

        let name = $("#sname").val();
        let email = $("#semail").val();
        let password = $("spassword").val();
        let confirmpassword = $("sconfirmpassword").val();

        $(".error").remove();

        if(name.length<1){
            $("#sname").after('<span class="error">This field is required');
        }
        if(email.length<1){
            $("#semail").after('<span class="error" This is field is required>');
        let regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
        let validEmail = regEx.test(email);
        if(!validEmail){
            $("#semail").after('<span class="error">Enter a valid email address');
        }
        }
        if(password < 8 || confirmpassword < 8){
            $("#spassword").after('<span class="error">Password length must be in 8 characters');
        }
        if($("spassword").val() !=  $("sconfirmpassword").val()){
            $("#confirmpassword").after('<span class="error"> password does not match');
        }
        
    });
});