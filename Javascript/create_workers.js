let workers = [];
$(document).ready(function () {

let searchParams = new URLSearchParams(window.location.search);
let param = searchParams.get("id");
if(param!=null){
  getUpdate(param);
}

  $("#createWorker").click(function (e) {
    e.preventDefault();

    let fname = $("#fullName").val();
    let email = $("#email").val();
    let phonenumber = $("#phoneNumber").val();
    let age = $("#age").val();
    let job = $("#job").val();
    let materialstatus = $("#materialstatus").val();
    let education = $("#education").val();
    let homecontactnumber = $("#homecontactNumber").val();
    let experience = $("#experience").val();
    let address = $("#address").val();
    let gender = $('input[name="gender"]:checked').val();
    let language = $(".language").is(":checked");
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

    if (fname.length < 1) {
      $("#fullName").after('<span class="error">This field is required</span>');
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
    } else if (phonenumber.length < 8) {
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

    if (job.length < 1) {
      $("#job").after('<span class="error">This field is required</span>');
      flag = false;
    } else {
      flag = true;
    }

    if (materialstatus == "") {
      $("#materialstatus").after(
        '<span class="error"> Please select your materialstatus </span>'
      );
      flag = false;
    } else {
      flag = true;
    }

    if (education == "") {
      $("#education").after(
        '<span class="error"> Please select your city</span>'
      );
      flag = false;
    } else {
      flag = true;
    }

    if (homecontactnumber.length < 1) {
      $("#homecontactNumber").after(
        '<span class="error">This field is required</span>'
      );
      flag = false;
    } else if (phonenumber.length < 8) {
      $("#homecontactNumber").after(
        '<span class="error">Password must contain 8 characters</span>'
      );
      flag = false;
    } else {
      flag = true;
    }

    if (experience == "") {
      $("#experience").after(
        '<span class="error"> Please select your city</span>'
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

    if ($(".gender:checked").length > 1 || $(".gender:checked").length == 0) {
      $(".errormessage").after(
        '<span class="error">Please select your gender</span>'
      );
      flag = false;
    } else {
      flag = true;
    }

    if (language == "") {
      $("#languageWorker").after(
        '<span class="error">Please choose atleast 2 laguages</span>'
      );
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

    listofWorker = {
      fname: fname,
      email: email,
      age: age,
      gender: gender,
      phonenumber: phonenumber,
      job: job,
      experience: experience,
      materialstatus: materialstatus,
      education: education,
      homecontactnumber: homecontactnumber,
      address: address,
      languages: languages,
      checkbox: checkbox,
      id:id
    };

    console.log(listofWorker);
if(id!=""){
  update(listofWorker);
}else{
    $.ajax({
      url: "https://62ff3a1734344b6431f4dbde.mockapi.io/worker",
      method: "post",
      data: listofWorker,
      dataType: "json",
      success: function (result) {
        workers.push(result);
        onloadApi(workers);
        window.location.href = "/HTML/workers_list.html";
      },
      error: function (error) {
        console.log(error);
      },
    });
  };

  });
  onloadApi(workers);
});

function onloadApi(workers) {
  $.ajax({
    url: "https://62ff3a1734344b6431f4dbde.mockapi.io/worker",
    method: "get",
    dataType: "json",
    success: function (result) {
      workers = result;
      updateTable(result);
    },
    error: function (result) {
      console.log(error);
    },
  });
}

function updateTable(workers) {
  $("#tbody").html("");
  for (let i = 0; i < workers.length; i++) {
    row =
      "<tr><td>" +
      workers[i].id +
      "</td><td>" +
      workers[i].fname +
      "</td><td>" +
      workers[i].age +
      "</td><td>" +
      workers[i].gender +
      "</td><td>" +
      workers[i].phonenumber +
      "</td><td>" +
      workers[i].job +
      "</td><td>" +
      workers[i].experience +
      "</td><td><button type='button' class='btn btn-secondary btn-sm' onclick='geteditUpdate(" +
      i +
      ","+
    workers[i].id +
      ")'>Edit</button></td><td><button type='button' class='btn btn-danger btn-sm' onclick='deleteRow(" +
      i +
      "," +
      workers[i].id +
      ")'>Delete</button></td></tr>";
    $("#tbody").append(row);
  };
};

function deleteRow(index,worker_id){
  $.ajax({
      url:"https://62ff3a1734344b6431f4dbde.mockapi.io/worker/" +worker_id,
      method: "delete",
      dataType: "json",
      success: function (result) {
        workers.splice(index, 1);
        onloadApi(workers);
      },
      error: function (error) {
        console.log(error);
      },
  });
};


function getUpdate(id){
  $.ajax({
    url:"https://62ff3a1734344b6431f4dbde.mockapi.io/worker/"+id,
    method:"get",
    dataType:"json",
    success: function(result){
     

      $("#fullName").val(result.fname);
      $("#email").val(result.email);
      $("#phoneNumber").val(result.phonenumber);
      $("#age").val(result.age);
      $("#job").val(result.job);
      $("#materialstatus").val(result.materialstatus);
      $("#education").val(result.education);
      $("#homecontactNumber").val(result.homecontactnumber);
      $("#experience").val(result.experience);
      $("#address").val(result.address);
      $(".language").is(":checked")
      // alert(result.language);
      $("#news").is(":checked")
      $("#new_update").val(result.id);
      alert(result.gender)
      if(result.gender=="Male"){
        $("#male").prop("checked", true);
      }else{
        $("#female").prop("checked", true);
      }

      // if(result.language=="M"){
      //   $("#male").prop("checked", true);
      // }else{
      //   $("#female").prop("checked", true);
      // }

      alert(result.id);
    },
    error: function(error){
      console.log(error);
    },

  });
};

function geteditUpdate(index,id){
  window.location.href = "/HTML/create.workers.html?id="+id; 
};

function update(listofWorker){
  $.ajax({
    url:"https://62ff3a1734344b6431f4dbde.mockapi.io/worker/" + listofWorker.id,
    method:"put",
    data:listofWorker,
    dataType:"json",
    success: function(result){
      workers.push(result);
      onloadApi(workers);

      window.location.href = "/HTML/workers_list.html";
    },
    error: function(error){
      console.log(error);
    },
  });
};
