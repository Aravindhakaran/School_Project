
$(document).ready(function(){
    $("#createTeacher").click(function(e){
        e.preventDefault();

        let firstName = $("#firstName").val();
        let lastName = $("#lastName").val();
        let email = $("#email").val();
        let phoneNumber = $("#phoneNumber").val();
        let age = $("#age").val();
        let qualification = $("#qualification").val();
        let address = $("#address").val();
        let pin = $("#pin").val();
        let city = $("#city").val();
        let gender = $(".gender").val();
        let language = $(".language").is(":checked");
        let state = $("#state").val();
        let checkbox = $("#news").is(":checked");
      
        let regEx = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        let validEmail = regEx.test(email);

        if(language){
        var languages = [];
        $('.language:checked').each(function(i){
          languages[i] = $(this).val();
        });
        // console.log(val)
    }

        $(".error").remove();

        let flag = false;

if(firstName.length<1){
    $("#firstName").after('<span class="error">This field is required</span>');
    flag = false;

} else{
    flag = true;
}

if(lastName.length<1){
    $("#lastName").after('<span class="error">This field is required</span>');
    flag = false;
} else{
    flag = true;
}

if(email.length<1){
    $("#email").after('<span class="error">This field is required</span>');
    flag = false;
  
} else if(!validEmail){
  
    $("#email").after('<span class="error">Enter a valid email</span>')
    flag = false;
} else{
    flag = true;
}

if(phoneNumber.length<1){
        $("#phoneNumber").after('<span class="error">This field is required</span>');
        flag = false;
} else if(phoneNumber.length<8){
        $("#phoneNumber").after('<span class="error">Password must contain 8 characters</span>');
        flag = false;
} else{
    flag = true;
}

if(age.length<1){
    $("#age").after('<span class="error">This field is required</span>');
    flag = false;
} else if(age<22){
    $("#age").after('<span class="error">Minimum alowed age is 22</span>');
    flag = false;
} else{
    flag = true;
}

if(qualification==""){
    $("#qualification").after('<span class="error"> Please select option</span>' );
    flag = false;
} else{
    flag = true;
}

if(address.length<1){
    $("#address").after('<span class="error">This field is required</span>');
    flag = false;
} else{
    flag = true;
}

if(pin.length<1){
    $("#pin").after('<span class="error">This field is required</span>');
    flag = false;
} else{
    flag = true;
}

if(city==""){
    $("#city").after('<span class="error"> Please select your city</span>' );
    flag = false; 
} else{
    flag = true;
}

if($(".gender:checked").length > 1 || $(".gender:checked").length == 0){
    $(".errormessage").after('<span class="error">Please select your gender</span>');
    flag = false;
} else{
    flag = true;
}

if(language==""){
    $("#language").after('<span class="error">Please choose atleast 2 laguages</span>');
    flag = false;
} else{
    flag = true;
}

if(state==""){
    $("#state").after('<span class="error"> Please select your state</span>' ); 
    flag = false;
} else{
    flag = true;
}

if(!checkbox){
    $("#news").after('<span class="error">checkbox not selected</span>');
    flag = false;
} else{
    flag = true;
}


let fullAddress = {address,pin,city,state};
let result = {firstName,lastName,email,phoneNumber,age,fullAddress,qualification,gender,languages,checkbox};
console.log(result);

if(flag){
    debugger
    window.location.href = "/HTML/teachers_list.html";
}
    });
});


