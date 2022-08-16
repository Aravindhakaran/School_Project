
$(document).ready(function(){
    $("#createWorker").click(function(e){
        e.preventDefault();

        let fullName = $("#fullName").val();
        let email = $("#email").val();
        let phoneNumber = $("#phoneNumber").val();
        let age = $("#age").val();
        let job = $("#job").val();
        let city = $("#city").val();
        let education = $("#education").val();
        let homecontactNumber = $("#homecontactNumber").val();
        let experience = $("#experience").val();
        let address = $("#address").val();
        let gender = $(".gender").val();
        let language = $(".language").is(":checked");
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

if(fullName.length<1){
    $("#fullName").after('<span class="error">This field is required</span>');
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

if(job.length<1){
    $("#job").after('<span class="error">This field is required</span>');
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

if(education==""){
    $("#education").after('<span class="error"> Please select your city</span>' );
    flag = false; 
} else{
    flag = true;
}

if(homecontactNumber.length<1){
    $("#homecontactNumber").after('<span class="error">This field is required</span>');
    flag = false;
} else if(phoneNumber.length<8){
    $("#homecontactNumber").after('<span class="error">Password must contain 8 characters</span>');
    flag = false;
} else{
flag = true;
}

if(experience==""){
    $("#experience").after('<span class="error"> Please select your city</span>' );
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

if($(".gender:checked").length > 1 || $(".gender:checked").length == 0){
    $(".errormessage").after('<span class="error">Please select your gender</span>');
    flag = false;
} else{
    flag = true;
}

if(language==""){
    $("#languageWorker").after('<span class="error">Please choose atleast 2 laguages</span>');
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


let fullAddress = {address,homecontactNumber,city};
let result = {fullName,email,phoneNumber,age,fullAddress,job,city,education,experience,gender,languages,checkbox};
console.log(result);

if(flag){
    debugger
    window.location.href = "/HTML/workers_list.html";
}
    });
});


