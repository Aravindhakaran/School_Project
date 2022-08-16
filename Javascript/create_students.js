
$(document).ready(function(){
    $("#createStudent").click(function(e){
        e.preventDefault();

        let firstName = $("#firstName").val();
        let lastName = $("#lastName").val();
        let fatherName = $("#fatherName").val();
        let motherName = $("#motherName").val();
        let gaurdian = $("#gaurdian").val();
        let phoneNumber = $("#phoneNumber").val();
        let email = $("#email").val();
        let studentClass = $("#studentClass").val();
        let studentCity = $("#studentCity").val();
        let address = $("#address").val();
        let dob = $("#dob").val();
        let gender = $(".gender").val();
        let checkbox = $("#news").is(":checked");
        let board8th = $("#8th-stateboard").val();
        let percentage8th = $("#8th-Percentage").val();
        let yearofpass8th = $("#8th-yearofPass").val();
        let board10th = $("#10th-stateboard").val();
        let percentage10th = $("#10th-Percentage").val();
        let yearofpass10th = $("#10th-yearofPass").val();

        let regEx = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        let validEmail = regEx.test(email);

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

        if(fatherName.length<1){
            $("#fatherName").after('<span class="error">This field is required</span>');
            flag = false;
            
        } else{
            flag = true;
        }

        if(motherName.length<1){
            $("#motherName").after('<span class="error">This field is required</span>');
            flag = false;
            
        } else{
            flag = true;
        }

        if(gaurdian.length<1){
            $("#gaurdian").after('<span class="error">This field is required</span>');
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
        if(email.length<1){
            $("#email").after('<span class="error">This field is required</span>');
            flag = false;
          
        } else if(!validEmail){
          
            $("#email").after('<span class="error">Enter a valid email</span>')
            flag = false;
        } else{
            flag = true;
        }

        if(studentClass==""){
            $("#studentClass").after('<span class="error"> Please select your class</span>' );
            flag = false; 
        } else{
            flag = true;
        }

        if(studentCity==""){
            $("#studentCity").after('<span class="error"> Please select your class</span>' );
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

        if(dob.length<1){
            $("#dob").after('<span class="error">This field is required</span>');
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

        if(!checkbox){
            $("#news").after('<span class="error">checkbox not selected</span>');
            flag = false;
        } else{
            flag = true;
        }

        let fullAddress = {address,studentCity};
        let result = {firstName,lastName,fatherName,motherName,gaurdian,email,phoneNumber,dob,studentClass,fullAddress,gender,checkbox};
        console.log(result);

        let board8 = {board8th,percentage8th,yearofpass8th};
        let board10 = {board10th,percentage10th,yearofpass10th};
        stateboard = {board8,board10};
        console.log(stateboard);

        if(flag){
            debugger
            window.location.href = "/HTML/create_students.html";
        }
    });
});