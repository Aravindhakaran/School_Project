
$(document).ready(function(){

    $("#login-button").click(function(e){
        e.preventDefault();
        
        let email = $("#email").val();
        let password = $("#password").val();
        let checkbox = $("#checkbox").is(":checked");

        $(".error").remove();

        if(email.length<1){
            $("#email").after('<span class="error">This field is required</span>');
            return
        }
        let regEx = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;;
            let validEmail = regEx.test(email);
            if(!validEmail){
                $("#email").after('<span class="error">Enter a valid email</span>')
            }

        if(password.length<1){
            $("#password").after('<span class="error">This field is required</span>');
            return
        }
        if(password.length<8){
            $("#password").after('<span class="error">Password must contain 8 characters</span>');
        }

        if(!checkbox)
        {
             $("#checkbox").after('<span class="error"> Please select checkbox</span>' );
             valid = false;
        }else{
            valid = true
       }
        
let result = {email,password,checkbox};
console.log(result);



    let signIn = localStorage.getItem("signUpList")? JSON.parse(localStorage.getItem("signUpList")): [];
    for(let i=0; i<signIn.length; i++){
        if(signIn[i].email==email && signIn[i].confirmpassword==password){
            window.location.href="home_page.html"; 
        } else{
            $("#errorMessage").after('<span class="error">Please give registered Email and Password</span>');
        }
    }
    debugger
    window.location.href="/HTML/home_page.html"; 
        });
});