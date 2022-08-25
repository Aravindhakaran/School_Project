let teachers = [];
$(document).ready(function () {

let searchParams = new URLSearchParams(window.location.search);
let param = searchParams.get("id");
if(param!=null){
getUpdate(param);
};

  $("#createTeacher").click(function (e) {
    e.preventDefault();

    let firstname = $("#firstName").val();
    let lastname = $("#lastName").val();
    let email = $("#email").val();
    let phonenumber = $("#phoneNumber").val();
    let age = $("#age").val();
    let qualification = $("#qualification").val();
    let address = $("#address").val();
    let pin = $("#pin").val();
    let city = $("#city").val();
    let gender = $('input[name="gender"]:checked').val();
    let language = $(".language").is(":checked");
    let state = $("#state").val();
    let checkbox = $("#news").is(":checked");
    let id = $("#new_update").val();

    let regEx =
      /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    let validEmail = regEx.test(email);

    if (language) {
      var languages = [];
      $(".language:checked").each(function (i) {
        languages[i] = $(this).val();
      });
      // console.log(val)
    }
    $(".error").remove();

    let flag = false;

    if (firstname.length < 1) {
      $("#firstName").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else {
      flag = true;
    }

    if (lastname.length < 1) {
      $("#lastName").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }

    if (email.length < 1) {
      $("#email").after('<span class="error">This field is required</span>');
      flag = false;
    } else if (!validEmail) {
      $("#email").after('<span class="error">Enter a valid email</span>');
      flag = false;
    } else {
      flag = true;
    }

    if (phonenumber.length < 1) {
      $("#phoneNumber").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else if (phoneNumber.length < 8) {
      $("#phoneNumber").after(
        '<span class="error">Password must contain 8 characters</span>'
      );
      flag = false;
    } else {
      flag = true;
    }

    if (age.length < 1) {
      $("#age").after('<span class="error">This field is required</span>');
      flag = false;
    } else if (age < 22) {
      $("#age").after('<span class="error">Minimum alowed age is 22</span>');
      flag = false;
    } else {
      flag = true;
    }

    if (qualification == "") {
      $("#qualification").after(
        '<span class="error"> Please select option</span>'
      );
      flag = false;
    } else {
      flag = true;
    }

    if (address.length < 1) {
      $("#address").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }

    if (pin.length < 1) {
      $("#pin").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }

    if (city == "") {
      $("#city").after('<span class="error"> Please select your city</span>');
      flag = false;
    } else {
      flag = true;
    }

    if ($(".gender:checked").length > 1 || $(".gender:checked").length == 0) {
      $(".errormessage").after(
        '<span class="error">Please select your gender</span>');
    
      flag = false;
    } else {
      flag = true;
    }

    if (language == "") {
      $("#language").after(
        '<span class="error">Please choose atleast 2 laguages</span>'
      );
      flag = false;
    } else {
      flag = true;
    }

    if (state == "") {
      $("#state").after('<span class="error"> Please select your state</span>');
      flag = false;
    } else {
      flag = true;
    }

    if (!checkbox) {
      $("#error-message").after(
        '<span class="error">checkbox not selected</span>'
      );
      flag = false;
    } else {
      flag = true;
    }
    listofTeacher = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      qualification: qualification,
      age: age,
      gender: gender,
      phonenumber: phonenumber,
      city: city,
      address: address,
      pin: pin,
      languages: languages,
      state: state,
      id:id
    };
    console.log(listofTeacher);
    if (id != "") {
      update(listofTeacher);
    } else {
      $.ajax({
        url: "https://62ff3a1734344b6431f4dbde.mockapi.io/teacher",
        method: "post",
        data: listofTeacher,
        dataType: "json",
        success: function (result) {
          teachers.push(result);
          onloadApi(teachers);
          window.location.href = "/HTML/teachers_list.html";
        },
        error: function (error) {
          console.log(error);
        },
      });
    }
  });
  onloadApi(teachers);
});

function onloadApi(teachers) {
  $.ajax({
    url: "https://62ff3a1734344b6431f4dbde.mockapi.io/teacher",
    method: "get",
    dataType: "json",
    success: function (result) {
      teachers = result;
      updateTable(result);
    },
    error: function (result) {
      console.log(error);
    },
  });
}

function updateTable(teachers) {
  $("#tbody").html("");
  for (let i = 0; i < teachers.length; i++) {
    row =
      "<tr><td>" +
      teachers[i].id +
      "</td><td>" +
      teachers[i].firstname +
      "</td><td>" +
      teachers[i].lastname +
      "</td><td>" +
      teachers[i].qualification +
      "</td><td>" +
      teachers[i].age +
      "</td><td>" +
      teachers[i].gender +
      "</td><td>" +
      teachers[i].phonenumber +
      "</td><td>" +
      teachers[i].city +
      "</td><td><button type='button' class='btn btn-secondary btn-sm' onclick='geteditUpdate(" +
      i +
      "," +
      teachers[i].id +
      ")'>Edit</button></td><td><button type='button' class='btn btn-danger btn-sm' onclick='deleteRow(" +
      i +
      "," +
      teachers[i].id +
      ")'>Delete</button></td></tr>";
    $("#tbody").append(row);
  };
};

function deleteRow(index,teacher_id){
    $.ajax({
        url:"https://62ff3a1734344b6431f4dbde.mockapi.io/teacher/"+teacher_id,
        method:"delete",
        dataType: "json",
        success: function(result){
            teachers.splice(index,1);
            onloadApi(teachers);
        },
        error: function(error){
            console.log(error);
        },
    });
};

function getUpdate(id){
    $.ajax({
url:"https://62ff3a1734344b6431f4dbde.mockapi.io/teacher/"+id,
method:"get",
dataType:"json",
success: function(result){

  $("#firstName").val(result.firstname);
  $("#lastName").val(result.lastname);
  $("#email").val(result.email);
  $("#phoneNumber").val(result.phonenumber);
  $("#age").val(result.age);
  $("#qualification").val(result.qualification);
  $("#address").val(result.address);
  $("#pin").val(result.pin);
  $("#city").val(result.city);
  $(".language").is(":checked");
  $("#state").val(result.state);
  $("#news").is(":checked");
  $("#new_update").val(result.id);
  alert(result.gender)
  if(result.gender=="Male"){
    $("#male").prop("checked", true);
  }else{
    $("#female").prop("checked", true);
  }
  alert(result.id);

}, 
error: function(error){
console.log(error);
},
    });
};
function geteditUpdate(index,id){
  window.open("/HTML/create_teachers.html?id="+id);
};

function update(listofTeacher){
$.ajax({
  url:"https://62ff3a1734344b6431f4dbde.mockapi.io/teacher/" + listofTeacher.id,
  method:"put",
  data:listofTeacher,
  dataType:"json",
  success: function(result){
    teachers.push(result);
    onloadApi(teachers);
    window.location.href = "/HTML/teachers_list.html";
  },
  error: function(error){
    console.log(error);
  },
});
};
