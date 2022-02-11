let fname, email, content, submitbtn;
let spancontent, spanname, spanemail;

// let resetbtn;

$(function () {
  fname = $("#name");
  email = $("#email");
  content = $("#content");

  spanname = $("#namespan");
  spanemail = $("#emailspan");
  spancontent = $("#contentspan");

  submitbtn = $("#formsubmit");
  // resetbtn = $("#reset");

  fname.blur(function () {
    validate1();
  });

  email.blur(function () {
    validate2();
  });

  content.blur(function () {
    validate3();
  });

  // resetbtn.click(function () {
  //   clearSpan();
  // });

  submitbtn.submit(function () {
    return formValidate;
  });
});

function validate1() {
  let namevalue = fname.val();
  spanname.html("");
  if (namevalue == "") {
    spanname.html("Name required");
    return false;
  } else if (namevalue.length < 3) {
    spanname.html("Atleast 3 charcaters required");
    return false;
  } else {
    fname.css("border", "solid 2px green");
    return true;
  }
}

function validate2() {
  spanemail.html("");
  let mail = email.val();
  console.log(mail);
  if (mail == "") {
    spanemail.html("EMail id required");
    return false;
  } else if (!mail.includes("@")) {
    spanemail.html("Enter correct email");
    return false;
  } else {
    email.css("border", "solid 2px green");
    return true;
  }
}

function validate3() {
  spancontent.html("");
  let review = content.val();
  if (review == "") {
    spancontent.html("Mention some Review!!!");
    return false;
  } else if (review.length > 10) {
    spancontent.html("Atmost 10 charcaters required");
    return false;
  } else if (review.length < 3) {
    spancontent.html("Atleast 3 charcaters required");
    return false;
  } else {
    content.css("border", "solid 2px green");
    return true;
  }
}

function formValidate() {
  let v1 = validate1();
  let v2 = validate2();
  let v3 = validate3();

  return v1 && v2 && v3;
}

// function clearSpan() {
//   spanpass.html("");
//   spanconfpass.html("");
//   spanmobile.html("");
//   spanemail.html("");
//   spanname.html("");
// }
